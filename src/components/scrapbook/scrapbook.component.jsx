import React, { Component } from "react";
import FlipPage from "react-flip-page";

import "./scrapbook.styles.scss";
import ScrapPage from "../scrappage/scrappage.component";
import ScrapImage from "../scrapimage/scrapimage.component";
import { Text } from "react-konva";

class Scrapbook extends Component {
	constructor(props) {
		super(props);
		this.width = 1080;
		this.height = 480;
	}

	render() {
		return (
			<div>
				<h1>scrapbook</h1>
				<div className='scrapbook'>
					<FlipPage
						className='flipbook'
						uncutPages={true}
						width={this.width}
						orientation='horizontal'
					>
						<ScrapPage width={this.width} height={this.height}>
							<ScrapImage
								imageUrl={`http://unsplash.it/260/160/?rain`}
								posX={150}
								posY={150}
								rotation={-30}
								scaleX={1}
								scaleY={1}
							/>
							<Text text='Hello' x={360} y={80}/>
						</ScrapPage>
						<ScrapPage width={this.width} height={this.height}>
							<ScrapImage
								imageUrl={`http://unsplash.it/360/260/?rain,snow`}
								posX={150}
								posY={150}
								rotation={-30}
								scaleX={1.2}
								scaleY={1.2}
							/>
							<Text text='World' x={460} y={180}/>
						</ScrapPage>
						<ScrapPage width={this.width} height={this.height}>
							<ScrapImage
								imageUrl={`http://unsplash.it/480/360/?space`}
								posX={150}
								posY={150}
								rotation={0}
								scaleX={1}
								scaleY={1}
							/>
							<Text text="It's me ya boiii !" x={360} y={380}/>
						</ScrapPage>
					</FlipPage>
				</div>
			</div>
		);
	}
}

export default Scrapbook;
