import React from "react";
import classesComputer from "./trainingType.module.css";
import classesMobile from "./trainingTypeMobile.module.css";

import pupyPhoto from "../../images/pupy.png";
import therapyImg from "../../images/therapy.png";
import bumbleAndYuki from "../../images/babelAndYuki.png";
import crazyYuvi from "../../images/crazyYuvi.jpeg";
function traningType({ isMobile }) {
	const classes = isMobile ? classesMobile : classesComputer;
	let types = [
		{ src: pupyPhoto, alt: `${pupyPhoto}`, title: "חינוך גורים" },
		{ src: bumbleAndYuki, alt: `${bumbleAndYuki}`, title: "אילוף מתקדם  " },
		{ src: crazyYuvi, alt: `${crazyYuvi}`, title: " >פתרון בעיות התנהגות" },
		{ src: therapyImg, alt: `${therapyImg}`, title: "כלבנות טיפולית " },
	];
	return (
		<>
			{types.map((type, index) => (
				<div
					className={classes.mainBox}
					key={index}>
					<img
						className={classes.typeImg}
						src={type.src}
						alt={type.alt}
					/>
					<h4 className={classes.typeTitle}>{type.title}</h4>
				</div>
			))}
		</>
	);
}

export default traningType;
