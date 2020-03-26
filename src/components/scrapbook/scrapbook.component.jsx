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
							<Text text='from Boo' x={360} y={80}/>
						</ScrapPage>
					</FlipPage>
				</div>
			</div>
		);
	}
}

export default Scrapbook;
