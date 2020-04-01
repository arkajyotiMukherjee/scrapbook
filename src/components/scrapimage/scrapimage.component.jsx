import React from "react";
import { Image } from "react-konva";
import useImage from "use-image";

const ScrapImage = ({ imageUrl, posX, posY, rotation, scaleX, scaleY }) => {
	// const [image] = useImage(imageUrl);
	const [image, status] = useImage(imageUrl, "Anonymous");
	console.log(status);

	return (
		<Image
			image={image}
			x={posX}
			y={posY}
			rotation={rotation}
			scaleX={scaleX}
			scaleY={scaleY}
			offsetX={image ? image.width / 2 : 0}
			offsetY={image ? image.height / 2 : 0}
		/>
	);
};

export default ScrapImage;
