import Parallax, { Layer } from "react-parallax-scroll";

import classes from "./parallex.module.css";

import React from "react";

export function ParalexLayers({ top }) {
	return (
		<>
			<Layer
				style={{
					left: "auto",
					right: "50px",
					top: `${top + 900}px`,
					rotate: "10deg",
				}}
				className={classes.dogPaw1}
				settings={{ speed: -0.3, type: ["translateY"] }}
			/>
			<Layer
				style={{
					left: "auto",
					right: "1200px",
					top: `${top + 700}px`,
					rotate: "20deg",
				}}
				className={classes.plate1}
				settings={{ speed: -0.3, type: ["translateY"] }}
			/>
			<Layer
				style={{
					left: "auto",
					right: "1700px",
					top: `${top + 1600}px`,
					rotate: "25deg",
				}}
				className={classes.dogPaw2}
				settings={{ speed: -0.3, type: ["translateY"] }}
			/>
			<Layer
				style={{
					left: "auto",
					right: "1700px",
					top: `${top + 900}px`,
					rotate: "-45deg",
				}}
				className={classes.boneBig}
				settings={{ speed: -0.3, type: ["translateY"] }}
			/>
			<Layer
				style={{
					left: "auto",
					right: "120px",
					top: `${top + 1200}px`,
					rotate: "-35deg",
				}}
				className={classes.boneSmall}
				settings={{ speed: -0.3, type: ["translateY"] }}
			/>
			<Layer
				style={{
					left: "auto",
					right: "800px",
					top: `${top + 700}px`,
					rotate: "-20deg",
				}}
				className={classes.dogPaw3}
				settings={{ speed: -0.3, type: ["translateY"] }}
			/>

			<Layer
				style={{
					left: "auto",
					right: "1200px",
					top: `${top + 1000}px`,
					rotate: "35deg",
				}}
				className={classes.dogPaw2}
				settings={{ speed: -0.3, type: ["translateY"] }}
			/>
		</>
	);
}

function ParalexComp({ children }) {
	const layerCount = 5;
	return (
		<Parallax>
			{Array.from({ length: layerCount }, (_, index) => (
				<ParalexLayers
					key={index}
					top={index * 570}
				/>
			))}
			{children}
		</Parallax>
	);
}

export default ParalexComp;
