import React, { Component } from "react";
import FlipPage from "react-flip-page";
import "./scrapbook.styles.scss";
import ScrapPage from "../scrappage/scrappage.component";
import ScrapImage from "../scrapimage/scrapimage.component";
import { Text } from "react-konva";
import Fullscreen from "react-full-screen";
import FullscreenButton from "@material-ui/icons/Fullscreen";

function isMobileDevice() {
	return (
		typeof window.orientation !== "undefined" ||
		navigator.userAgent.indexOf("IEMobile") !== -1
	);
}

const imagePath = index => `/assets/img${index}.`;

class Scrapbook extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isFull: false,
			pages: [
				{
					pageNo: 1,
					images: [
						{
							id: 1,
							image: imagePath(1)+'png',
							posX: 150,
							posY: 250,
							rotation: -30,
							scaleX: 0.1,
							scaleY: 0.1
						},
						{
							id: 2,
							image: imagePath(2)+'png',
							posX: 150,
							posY: 350,
							rotation: -30,
							scaleX: 0.1,
							scaleY: 0.1
						}
					],
					texts: [
						{
							id: 1,
							text: "Hello",
							posX: 100,
							posY: 200
						}
					]
				},
				{
					pageNo: 2,
					images: [
						{
							id: 3,
							image: imagePath(3)+'jpg',
							posX: 150,
							posY: 150,
							rotation: -30,
							scaleX: 0.1,
							scaleY: 0.1
						},
						{
							id: 4,
							image: imagePath(4)+'jpg',
							posX: 150,
							posY: 250,
							rotation: -30,
							scaleX: 0.1,
							scaleY: 0.1
						}
					],
					texts: [
						{
							id: 1,
							text: "World",
							posX: 100,
							posY: 200
						}
					]
				}
			]
		};
	}

	goFull = () => {
		this.setState({ isFull: true });
	};

	render() {
		const paddingHorizontal = 32;
		const paddingVertical = 4;

		const width = isMobileDevice()
			? window.innerWidth - 2 * paddingHorizontal
			: 375;

		const height = isMobileDevice()
			? window.innerHeight - 2 * paddingVertical
			: 660;

		return (
			<React.Fragment>
				<FullscreenButton className='fullscreen-button' onClick={this.goFull} />
				<Fullscreen
					enabled={this.state.isFull}
					onChange={isFull => this.setState({ isFull })}
				>
					<div
						className='scrapbook'
						style={{
							maxWidth: width,
							height: height,
							padding: `${paddingVertical}px ${paddingHorizontal}px`,
							margin: "0 auto"
						}}
					>
						<FlipPage
							className='flipbook'
							uncutPages={true}
							orientation='vertical'
							pageBackground='#F7DE5B'
							showSwipeHint={true}
							responsive={true}
							style={{
								padding: 0
							}}
						>
							{this.state.pages.map(({ pageNo, images, texts }) => (
								<ScrapPage key={pageNo} width={width} height={height}>
									{images.map(
										({ id, image, posX, posY, rotation, scaleX, scaleY }) => (
											<ScrapImage
												key={id}
												imageUrl={image}
												posX={posX}
												posY={posY}
												rotation={rotation}
												scaleX={scaleX}
												scaleY={scaleY}
											/>
										)
									)}

									{texts.map(({ id, text, posX, posY }) => (
										<Text key={id} text={text} x={posX} y={posY} />
									))}
								</ScrapPage>
							))}
							{/* <ScrapPage width={width} height={height}>
								<ScrapImage
									imageUrl={`http://unsplash.it/360/260/?rain,snow`}
									posX={150}
									posY={150}
									rotation={-30}
									scaleX={1.2}
									scaleY={1.2}
								/>
								<Text text='World' x={460} y={180} />
							</ScrapPage>
							<ScrapPage width={width} height={height}>
								<ScrapImage
									imageUrl={`http://unsplash.it/480/360/?space`}
									posX={150}
									posY={150}
									rotation={0}
									scaleX={1}
									scaleY={1}
								/>
								<Text text="It's me ya boiii !" x={360} y={380} />
							</ScrapPage> */}
						</FlipPage>
					</div>
				</Fullscreen>
			</React.Fragment>
		);
	}
}

export default Scrapbook;
