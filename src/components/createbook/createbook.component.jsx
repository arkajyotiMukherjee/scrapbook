import React, { useState } from "react";
import { Stage, Layer, Line } from "react-konva";
import "./createbook.styles.scss";
import Rectangle from "../rectangle/rectangle.component";
import Circle from "../circle/circle.component";
import { addTextNode } from "../../utils/addTextNode";
import Image from "../imagebox/imagebox.component";
const uuidv1 = require("uuid/v1");

function CreateBook() {
	const [rectangles, setRectangles] = useState([]);
	const [circles, setCircles] = useState([]);
	const [images, setImages] = useState([]);

	const [tool, setTool] = React.useState("pen");
	const [isDrawing, toggleDrawing] = React.useState(false);
	const [lines, setLines] = React.useState([]);

	const [selectedId, selectShape] = useState(null);
	const [shapes, setShapes] = useState([]);
	const [, updateState] = React.useState();
	const stageEl = React.createRef();
	const layerEl = React.createRef();
	const fileUploadEl = React.createRef();
	const getRandomInt = max => {
		return Math.floor(Math.random() * Math.floor(max));
	};
	const addRectangle = () => {
		const rect = {
			x: getRandomInt(100),
			y: getRandomInt(100),
			width: 100,
			height: 100,
			fill: "red",
			id: `rect${rectangles.length + 1}`
		};
		const rects = rectangles.concat([rect]);
		setRectangles(rects);
		const shs = shapes.concat([`rect${rectangles.length + 1}`]);
		setShapes(shs);
	};
	const addCircle = () => {
		const circ = {
			x: getRandomInt(100),
			y: getRandomInt(100),
			width: 100,
			height: 100,
			fill: "red",
			id: `circ${circles.length + 1}`
		};
		const circs = circles.concat([circ]);
		setCircles(circs);
		const shs = shapes.concat([`circ${circles.length + 1}`]);
		setShapes(shs);
	};

	const startDrawing = (e) => {
		toggleDrawing(true);
		const pointer = e.target.getStage().getPointerPosition();
		const newLines = lines.concat({
			id: `line${lines.length + 1}`,
			tool: tool,
			points: [pointer.x, pointer.y]
		});
    setLines(newLines);
    const shs = shapes.concat([`line${lines.length + 1}`]);
		setShapes(shs);
	};

	const draw = (e) => {
    if (!isDrawing) {
      return;
    }
    const pointer = e.target.getStage().getPointerPosition();
    const newLines = lines.slice();
    const lastLine = {
      ...newLines[newLines.length - 1]
    };
    lastLine.points = lastLine.points.concat([pointer.x, pointer.y]);
    newLines[newLines.length - 1] = lastLine;
    setLines(newLines);
    // const shs = shapes.concat([`line${lines.length + 1}`]);
		// setShapes(shs);
  };

	const drawText = () => {
		const id = addTextNode(stageEl.current.getStage(), layerEl.current);
		const shs = shapes.concat([id]);
		setShapes(shs);
	};
	const drawImage = () => {
		fileUploadEl.current.click();
	};
	const forceUpdate = React.useCallback(() => updateState({}), []);
	const fileChange = ev => {
		let file = ev.target.files[0];
		let reader = new FileReader();
		reader.addEventListener(
			"load",
			() => {
				const id = uuidv1();
				images.push({
					content: reader.result,
					id
				});
				setImages(images);
				fileUploadEl.current.value = null;
				shapes.push(id);
				setShapes(shapes);
				forceUpdate();
			},
			false
		);
		if (file) {
			reader.readAsDataURL(file);
		}
	};
	const undo = () => {
		const lastId = shapes[shapes.length - 1];
		let index = circles.findIndex(c => c.id === lastId);
		if (index !== -1) {
			circles.splice(index, 1);
			setCircles(circles);
    }
    index = lines.findIndex(l => l.id === lastId);
		if (index !== -1) {
			lines.splice(index, 1);
			setLines(lines);
		}
		index = rectangles.findIndex(r => r.id === lastId);
		if (index !== -1) {
			rectangles.splice(index, 1);
			setRectangles(rectangles);
		}
		index = images.findIndex(r => r.id === lastId);
		if (index !== -1) {
			images.splice(index, 1);
			setImages(images);
		}
		shapes.pop();
		setShapes(shapes);
		forceUpdate();
	};
	document.addEventListener("keydown", ev => {
		if (ev.code === "Delete") {
			let index = circles.findIndex(c => c.id === selectedId);
			if (index !== -1) {
				circles.splice(index, 1);
				setCircles(circles);
			}
			index = rectangles.findIndex(r => r.id === selectedId);
			if (index !== -1) {
				rectangles.splice(index, 1);
				setRectangles(rectangles);
			}
			index = images.findIndex(r => r.id === selectedId);
			if (index !== -1) {
				images.splice(index, 1);
				setImages(images);
			}
			forceUpdate();
		}
	});
	return (
		<div className='home-page'>
			<h1>Whiteboard</h1>
			<div>
				<button onClick={addRectangle}>Rectangle</button>
				<button onClick={addCircle}>Circle</button>
				{/* <button onClick={drawLine}>
					Line
				</button>
				<button onClick={eraseLine}>
					Erase
				</button> */}
				<button onClick={drawText}>Text</button>
				<button onClick={drawImage}>Image</button>
				<button onClick={undo}>Undo</button>
			</div>
			<select
				value={tool}
				onChange={e => {
					setTool(e.target.value);
				}}
			>
				<option value='pen'>Pen</option>
				<option value='eraser'>Eraser</option>
			</select>
			<input
				style={{ display: "none" }}
				type='file'
				ref={fileUploadEl}
				onChange={fileChange}
			/>
			<Stage
				width={window.innerWidth * 0.9}
				height={window.innerHeight - 150}
				ref={stageEl}
				onMouseDown={e => {
					// deselect when clicked on empty area
					const clickedOnEmpty = e.target === e.target.getStage();
					if (clickedOnEmpty) {
						selectShape(null);
					}

					startDrawing(e);
				}}
				onMouseMove={e => {
					draw(e);
					
				}}
				onMouseUp={e => {
					toggleDrawing(false);
				}}
			>
				<Layer ref={layerEl}>
					{lines.map(line => (
						<Line
							key={line.id}
							strokeWidth={line.tool === "eraser" ? 20 : 5}
							stroke='black'
							points={line.points}
							globalCompositeOperation={
								line.tool === "eraser" ? "destination-out" : "source-over"
							}
						/>
					))}
					{rectangles.map((rect, i) => {
						return (
							<Rectangle
								key={i}
								shapeProps={rect}
								isSelected={rect.id === selectedId}
								onSelect={() => {
									selectShape(rect.id);
								}}
								onChange={newAttrs => {
									const rects = rectangles.slice();
									rects[i] = newAttrs;
									setRectangles(rects);
								}}
							/>
						);
					})}
					{circles.map((circle, i) => {
						return (
							<Circle
								key={i}
								shapeProps={circle}
								isSelected={circle.id === selectedId}
								onSelect={() => {
									selectShape(circle.id);
								}}
								onChange={newAttrs => {
									const circs = circles.slice();
									circs[i] = newAttrs;
									setCircles(circs);
								}}
							/>
						);
					})}
					{images.map((image, i) => {
						return (
							<Image
								key={i}
								imageUrl={image.content}
								isSelected={image.id === selectedId}
								onSelect={() => {
									selectShape(image.id);
								}}
								onChange={newAttrs => {
									const imgs = images.slice();
									imgs[i] = newAttrs;
								}}
							/>
						);
					})}
				</Layer>
			</Stage>
		</div>
	);
}
export default CreateBook;
