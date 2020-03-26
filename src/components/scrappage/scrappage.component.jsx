import React from "react";
import { Stage, Layer } from "react-konva";

import "./scrappage.styles.scss";

const ScrapPage = ({ width, height, ...props }) => (
	<Stage width={width} height={height} className='stage'>
		<Layer className='layer'>{props.children}</Layer>
	</Stage>
);

export default ScrapPage;
