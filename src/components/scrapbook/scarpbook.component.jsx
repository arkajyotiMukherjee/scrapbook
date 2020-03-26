import React, { Component } from "react";
import FlipPage from "react-flip-page";

import "./scrapbook.styles.scss";
import ScrapPage from "../scrappage/scrappage.component";
import ScrapImage from "../scrapimage/scrapimage.component";

class Scrapbook extends Component {
	constructor(props) {
		super(props);
		this.width = 1080;
		this.height = 480;
	}

	render() {
		return (
			<div>
				<h1>Scarpbook</h1>
				<div className='scrapbook'>
					<FlipPage
						className='flipbook'
						uncutPages={true}
						width={this.width}
						orientation='horizontal'
					>
						<ScrapPage width={this.width} height={this.height}>
							<ScrapImage
								imageUrl={`http://unsplash.it/${this.width}/${this.height}/?space,sky`}
							/>
						</ScrapPage>
						<ScrapPage width={this.width} height={this.height}>
							<ScrapImage
								imageUrl={`http://unsplash.it/${this.width}/${this.height}/?nature,forest`}
							/>
						</ScrapPage>
						<ScrapPage width={this.width} height={this.height}>
							<ScrapImage
								imageUrl={`http://unsplash.it/${this.width}/${this.height}/?rain`}
							/>
						</ScrapPage>
					</FlipPage>
				</div>
			</div>
		);
	}
}

export default Scrapbook;
