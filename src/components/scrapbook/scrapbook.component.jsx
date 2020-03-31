import React, { Component } from "react";
import FlipPage from "react-flip-page";
import "./scrapbook.styles.scss";
import ScrapPage from "../scrappage/scrappage.component";
import ScrapImage from "../scrapimage/scrapimage.component";
import { Text } from "react-konva";
import Fullscreen from "react-full-screen";
import imageLoader from "../../utils/images";
import FullscreenButton from "@material-ui/icons/Fullscreen";

function isMobileDevice() {
	return (
		typeof window.orientation !== "undefined" ||
		navigator.userAgent.indexOf("IEMobile") !== -1
	);
}

class Scrapbook extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isFull: false,
			images: []
		};
	}

	componentDidMount() {
		const images = imageLoader();
		this.setState({ images });
	}

	goFull = () => {
    this.setState({ isFull: true });
  }

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
							<ScrapPage width={width} height={height}>
								<ScrapImage
									imageUrl={`http://unsplash.it/260/160/?rain`}
									posX={150}
									posY={150}
									rotation={-30}
									scaleX={1}
									scaleY={1}
								/>
								<Text text='Hello' x={360} y={80} />
							</ScrapPage>
							<ScrapPage width={width} height={height}>
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
							</ScrapPage>
						</FlipPage>
					</div>
				</Fullscreen>
			</React.Fragment>
		);
	}
}

export default Scrapbook;
