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
							image: imagePath(28)+'jpg',
							posX: 185,
							posY: 180,
							rotation: 30,
							scaleX: 0.05,
							scaleY: 0.05
						},
						{
							id: 2,
							image: imagePath(11)+'png',
							posX: 210,
							posY: 40,
							rotation: 0,
							scaleX: 0.03,
							scaleY: 0.03
						},
						{
							id: 3,
							image: imagePath(21)+'jpg',
							posX: 170,
							posY: 460,
							rotation: 0,
							scaleX: 0.1,
							scaleY: 0.1
						}
					],
					texts: [
						{
							id: 1,
							text: `Hilo Pui,\n
							Happy Birthday to you :| <3\n
							I make very shitty website\n
							for your birthday.\n
							I wanted you to have a\n
							glympse of our journey\n
							together. Forgive bad englis\n
							and crude writing style 😐\n
							Let's start...`,
							posX: 10,
							posY: 20
						},
						{
							id: 2,
							text: `You and I haven't\n
been so close at school\n
but we grew closer\n
as we drifted apart from home.\n
I love the little detail that\n
we started flirting with memes\n
and couldn't help but fall\n
for each other ❤️\n
this is one of the memes\n
that started it all.`,
							posX: 10,
							posY: 360
						}
					]
				},
				{
					pageNo: 2,
					images: [
						{
							id: 1,
							image: imagePath(22)+'jpg',
							posX: 200,
							posY: 10,
							rotation: 90,
							scaleX: 0.06,
							scaleY: 0.06
						},
						{
							id: 2,
							image: imagePath(23)+'jpg',
							posX: 10,
							posY: 380,
							rotation: -30,
							scaleX: 0.1,
							scaleY: 0.1
						}
					],
					texts: [
						{
							id: 1,
							text: `Went on a Date\n
							with this\n
							beautiful waman\n
							😐 ❤️`,
							posX: 210,
							posY: 80
						},
						{
							id: 2,
							text: `It was a lovely afternoon\n
with a lot of bad selfies 🤳🏼\n`,
							posX: 180,
							posY: 540
						}
					]
				},
				{
					pageNo: 3,
					images: [
						{
							id: 1,
							image: imagePath(31)+'jpg',
							posX: 380,
							posY: 180,
							rotation: 90,
							scaleX: 0.07,
							scaleY: 0.07
						},
						{
							id: 2,
							image: imagePath(26)+'jpg',
							posX: -10,
							posY: 70,
							rotation: 5,
							scaleX: 0.06,
							scaleY: 0.06
						},
						{
							id: 3,
							image: imagePath(16)+'jpg',
							posX: -50,
							posY: 330,
							rotation: -10,
							scaleX: 0.06,
							scaleY: 0.06
						},
						{
							id: 4,
							image: imagePath(25)+'jpg',
							posX: 130,
							posY: 450,
							rotation: 10,
							scaleX: 0.1,
							scaleY: 0.1
						},
					],
					texts: [
						{
							id: 1,
							text: `That one afternoon snowballed into a lot of happy\n
memories and amazing moments that I'll always cherish\n
in my heart ❤️`,
							posX: 10,
							posY: 10
						}
					]
				},
				{
					pageNo: 4,
					images: [
						{
							id: 1,
							image: imagePath(4)+'jpg',
							posX: 170,
							posY: 180,
							rotation: 0,
							scaleX: 0.07,
							scaleY: 0.07
						},
						{
							id: 2,
							image: imagePath(12)+'jpg',
							posX: -30,
							posY: 70,
							rotation: -10,
							scaleX: 0.2,
							scaleY: 0.2
						},
						{
							id: 3,
							image: imagePath(1)+'png',
							posX: 20,
							posY: 330,
							rotation: 10,
							scaleX: 0.2,
							scaleY: 0.2
						},
						{
							id: 4,
							image: imagePath(5)+'jpg',
							posX: 10,
							posY: 470,
							rotation: 0,
							scaleX: 0.3,
							scaleY: 0.3
						},
					],
					texts: [
						{
							id: 1,
							text: `We have an awesome friend group, who sometimes fills\n
			in for me 🍻❤️`,
							posX: 10,
							posY: 10
						}
					]
				},
				{
					pageNo: 5,
					images: [
						{
							id: 1,
							image: imagePath(27)+'jpg',
							posX: -30,
							posY: 80,
							rotation: -10,
							scaleX: 0.07,
							scaleY: 0.07
						},
						{
							id: 2,
							image: imagePath(32)+'jpg',
							posX: 160,
							posY: 380,
							rotation: -90,
							scaleX: 0.1,
							scaleY: 0.1
						},
						{
							id: 3,
							image: imagePath(9)+'jpg',
							posX: -20,
							posY: 360,
							rotation: 0,
							scaleX: 0.25,
							scaleY: 0.25
						},
						{
							id: 4,
							image: imagePath(10)+'jpg',
							posX: 50,
							posY: 500,
							rotation: 0,
							scaleX: 0.25,
							scaleY: 0.25
						},
					],
					texts: [
						{
							id: 1,
							text: `Althrough you...\n
							Laugh maniacally 👹`,
							posX: 10,
							posY: 10
						},
						{
							id: 2,
							text: `Cover me up\n
							in pictures 📸`,
							posX: 190,
							posY: 50
						},
						{
							id: 3,
							text: `And try to steal\n
my Happy Potter wand 🧙`,
							posX: 10,
							posY: 300
						}
					]
				},
				{
					pageNo: 6,
					images: [
						{
							id: 1,
							image: imagePath(19)+'jpg',
							posX: 10,
							posY: 80,
							rotation: 0,
							scaleX: 0.07,
							scaleY: 0.07
						},
						{
							id: 2,
							image: imagePath(3)+'jpg',
							posX: 10,
							posY: 400,
							rotation: 0,
							scaleX: 0.07,
							scaleY: 0.07
						},
						{
							id: 3,
							image: imagePath(24)+'png',
							posX: 210,
							posY: 40,
							rotation: 0,
							scaleX: 0.03,
							scaleY: 0.03
						},
					],
					texts: [
						{
							id: 1,
							text: `But I'll always love you exactly like this, till...\n
well I don't ever want this to have an "until"\n
I want this to have a forever ❤️`,
							posX: 10,
							posY: 10
						},
					]
				},
				{
					pageNo: 7,
					images: [
						{
							id: 1,
							image: imagePath(30)+'jpg',
							posX: 380,
							posY: 160,
							rotation: 90,
							scaleX: 0.1,
							scaleY: 0.1
						},
						{
							id: 2,
							image: imagePath(17)+'jpg',
							posX: -30,
							posY: 80,
							rotation: -10,
							scaleX: 0.07,
							scaleY: 0.07
						},
						{
							id: 4,
							image: imagePath(14)+'jpg',
							posX: 10,
							posY: 450,
							rotation: 0,
							scaleX: 0.05,
							scaleY: 0.05
						},
					],
					texts: [
						{
							id: 1,
							text: `I love that we are that couple\n
							who judges people together 😜`,
							posX: 10,
							posY: 10
						},
						{
							id: 2,
							text: `And gives each\n
other chips 🍟\n
because that's\n
very important`,
							posX: 10,
							posY: 415
						},
					]
				},
				{
					pageNo: 8,
					images: [
						{
							id: 1,
							image: imagePath(13)+'jpg',
							posX: 10,
							posY: 80,
							rotation: 0,
							scaleX: 0.06,
							scaleY: 0.06
						},
						{
							id: 2,
							image: imagePath(33)+'jpg',
							posX: 320,
							posY: 600,
							rotation: 180,
							scaleX: 0.1,
							scaleY: 0.1
						},
						{
							id: 3,
							image: imagePath(29)+'png',
							posX: 220,
							posY: 280,
							rotation: 0,
							scaleX: 0.03,
							scaleY: 0.03
						},
						{
							id: 4,
							image: imagePath(18)+'png',
							posX: 5,
							posY: 520,
							rotation: 0,
							scaleX: 0.03,
							scaleY: 0.03
						},
					],
					texts: [
						{
							id: 1,
							text: `I promise to protect you from all sorts of evil\n
							(like child molester Sandy)`,
							posX: 10,
							posY: 30
						},
						{
							id: 2,
							text: `and give you fake rose candies\n
because food is important 😐`,
							posX: 10,
							posY: 330
						},
					]
				},
				{
					pageNo: 9,
					images: [
						{
							id: 1,
							image: imagePath(7)+'jpg',
							posX: 0,
							posY: 30,
							rotation: 0,
							scaleX: 0.25,
							scaleY: 0.25
						},
						{
							id: 2,
							image: imagePath(20)+'jpg',
							posX: 90,
							posY: 260,
							rotation: 0,
							scaleX: 0.25,
							scaleY: 0.25
						},
						{
							id: 3,
							image: imagePath(6)+'jpg',
							posX: 10,
							posY: 420,
							rotation: 0,
							scaleX: 0.25,
							scaleY: 0.25
						},
						{
							id: 4,
							image: imagePath(2)+'png',
							posX: 215,
							posY: 40,
							rotation: 0,
							scaleX: 0.03,
							scaleY: 0.03
						},
					],
					texts: [
						{
							id: 1,
							text: `I love my beautiful,`,
							posX: 10,
							posY: 10
						},
						{
							id: 2,
							text: `little,\n
poet girlfriend 😚❤️`,
							posX: 10,
							posY: 370
						},
						{
							id: 3,
							text: `"I'm not little"`,
							posX: 240,
							posY: 150
						},
					]
				},
				{
					pageNo: 10,
					images: [
						{
							id: 1,
							image: imagePath(15)+'jpg',
							posX: 20,
							posY: 110,
							rotation: 0,
							scaleX: 0.05,
							scaleY: 0.05
						},
						{
							id: 4,
							image: imagePath(8)+'jpg',
							posX: 50,
							posY: 370,
							rotation: 0,
							scaleX: 0.25,
							scaleY: 0.25
						},
					],
					texts: [
						{
							id: 2,
							text: `Here's me riding a horse coming to your rescue\n
from boredom during this wretched lockdown of covid 19\n
(Love in the time of Corona is the only gift,\n
I really have for you 😐❤️)`,
							posX: 30,
							posY: 10
						},
						{
							id: 1,
							text: `Thank you for seeing my scrapbook\n
Here have a poorly drawn Rushali to show my gratitude 😐`,
							posX: 10,
							posY: 320
						},
					]
				},
			]
		};
	}

	goFull = () => {
		this.setState({ isFull: true });
	};

	render() {
		const paddingHorizontal = 18;
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
