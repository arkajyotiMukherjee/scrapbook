import React, { Component } from 'react'
import { Image } from 'react-konva'

export default class ScrapImage extends Component {
	constructor(props){
		super(props);
		this.state = {
			image: null,
		}
	}

	componentDidMount(){
		const image = new window.Image();
		image.src = this.props.imageUrl;
		image.onload = () => {
			this.setState({
				image: image,
			})
		}
	}

	render() {
		return (
			<Image image={this.state.image} />
		)
	}
}
