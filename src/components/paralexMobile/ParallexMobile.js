import Parallax, { Layer } from "react-parallax-scroll";

import classes from "./ParallexMobil.module.css";
function ParallexMobile({ children }) {
	return (
		<Parallax>
			{/* 0-250px */}

			<Layer
				style={{
					left: "auto",
					right: "-5px",
					top: "255px",
					rotate: "-35deg",
				}}
				className={classes.boneBig}
				settings={{ speed: -0.3, type: ["translateY"] }}
			/>
			<Layer
				style={{
					left: "auto",
					right: "150px",
					top: "180px",
					rotate: "10deg",
				}}
				className={classes.dogPawSmall}
				settings={{ speed: -0.3, type: ["translateY"] }}
			/>
			<Layer
				style={{
					left: "auto",
					right: "300px",
					top: "250px",
					rotate: "25deg",
				}}
				className={classes.plate1}
				settings={{ speed: -0.3, type: ["translateY"] }}
			/>
			{/* 250-500px */}

			<Layer
				style={{
					left: "auto",
					right: "-71px",
					top: "400px",
					rotate: "35deg",
				}}
				className={classes.dogMiddle}
				settings={{ speed: -0.3, type: ["translateY"] }}
			/>
			<Layer
				style={{
					left: "auto",
					right: "150px",
					top: "500px",
					rotate: "10deg",
				}}
				className={classes.dogPawSmall}
				settings={{ speed: -0.3, type: ["translateY"] }}
			/>
			<Layer
				style={{
					left: "auto",
					right: "300px",
					top: "500px",
					rotate: "25deg",
				}}
				className={classes.blackBoneSmall}
				settings={{ speed: -0.3, type: ["translateY"] }}
			/>
			{/* 500-800px */}

			<Layer
				style={{
					left: "auto",
					right: "-1px",
					top: "560px",
					rotate: "-20deg",
				}}
				className={classes.plate1}
				settings={{ speed: -0.3, type: ["translateY"] }}
			/>
			<Layer
				style={{
					left: "auto",
					right: "20px",
					top: "730px",
					rotate: "-45deg",
				}}
				className={classes.boneBig}
				settings={{ speed: -0.3, type: ["translateY"] }}
			/>
			<Layer
				style={{
					left: "auto",
					right: "150px",
					top: "660px",
					rotate: "36deg",
				}}
				className={classes.dogPawSmall}
				settings={{ speed: -0.3, type: ["translateY"] }}
			/>
			<Layer
				style={{
					left: "auto",
					right: "250px",
					top: "720px",
					rotate: "-36deg",
				}}
				className={classes.plate1}
				settings={{ speed: -0.3, type: ["translateY"] }}
			/>
			<Layer
				style={{
					left: "auto",
					right: "280px",
					top: "780px",
					rotate: "35deg",
				}}
				className={classes.blackBoneSmall}
				settings={{ speed: -0.3, type: ["translateY"] }}
			/>
			{/* 800-1100px */}

			<Layer
				style={{
					left: "auto",
					right: "-1px",
					top: "1100px",
					rotate: "-20deg",
				}}
				className={classes.plate1}
				settings={{ speed: -0.3, type: ["translateY"] }}
			/>
			<Layer
				style={{
					left: "auto",
					right: "20px",
					top: "980px",
					rotate: "-45deg",
				}}
				className={classes.dogMiddle}
				settings={{ speed: -0.3, type: ["translateY"] }}
			/>
			<Layer
				style={{
					left: "auto",
					right: "150px",
					top: "840px",
					rotate: "36deg",
				}}
				className={classes.dogPawSmall}
				settings={{ speed: -0.3, type: ["translateY"] }}
			/>
			<Layer
				style={{
					left: "auto",
					right: "-95px",
					top: "840px",
					rotate: "36deg",
				}}
				className={classes.plate1}
				settings={{ speed: -0.3, type: ["translateY"] }}
			/>
			<Layer
				style={{
					left: "auto",
					right: "270px",
					top: "1000px",
					rotate: "35deg",
				}}
				className={classes.plate1}
				settings={{ speed: -0.3, type: ["translateY"] }}
			/>

			{/* 1100- 1400*/}

			<Layer
				style={{
					left: "auto",
					right: "-10px",
					top: "1210px",
					rotate: "20deg",
				}}
				className={classes.plate1}
				settings={{ speed: -0.3, type: ["translateY"] }}
			/>
			<Layer
				style={{
					left: "auto",
					right: "-220px",
					top: "823px",
					rotate: "20deg",
				}}
				className={classes.blackBoneSmall}
				settings={{ speed: -0.3, type: ["translateY"] }}
			/>
			<Layer
				style={{
					left: "auto",
					right: "477px",
					top: "930px",
					rotate: "-20deg",
				}}
				className={classes.blackBoneSmall}
				settings={{ speed: -0.5, type: ["translateY"] }}
			/>
			<Layer
				style={{
					left: "auto",
					right: "210px",
					top: "1200px",
					rotate: "30deg",
				}}
				className={classes.dogPawSmall}
				settings={{ speed: -0.3, type: ["translateY"] }}
			/>
			<Layer
				style={{
					left: "auto",
					right: "-9px",
					top: "1400px",
					rotate: "-20deg",
				}}
				className={classes.blackBoneSmall}
				settings={{ speed: -0.5, type: ["translateY"] }}
			/>
			<Layer
				style={{
					left: "auto",
					right: "-98px",
					top: "980px",
					rotate: "35deg",
				}}
				className={classes.boneBig}
				settings={{ speed: -0.3, type: ["translateY"] }}
			/>

			{/* 1400px-2800px */}
			<Layer
				style={{
					left: "auto",
					right: "327px",
					top: "1335px",
					rotate: "0deg",
				}}
				className={classes.dogPawSmall}
				settings={{ speed: -0.3, type: ["translateY"] }}
			/>
			<Layer
				style={{
					left: "auto",
					right: "366px",
					top: "1329px",
					rotate: "-38deg",
				}}
				className={classes.boneBig}
				settings={{ speed: -0.3, type: ["translateY"] }}
			/>
			<Layer
				style={{
					left: "auto",
					right: "190px",
					top: "1335px",
					rotate: "-31deg",
				}}
				className={classes.plate1}
				settings={{ speed: -0.3, type: ["translateY"] }}
			/>

			<Layer
				style={{
					left: "auto",
					right: "-10px",
					top: "1373px",
					rotate: "29deg",
				}}
				className={classes.boneBig}
				settings={{ speed: -0.3, type: ["translateY"] }}
			/>
			<Layer
				style={{
					left: "auto",
					right: "187px",
					top: "1434px",
					rotate: "-31deg",
				}}
				className={classes.dogpawBig}
				settings={{ speed: -0.3, type: ["translateY"] }}
			/>
			<Layer
				style={{
					left: "auto",
					right: "227px",
					top: "1490px",
					rotate: "26deg",
				}}
				className={classes.plate1}
				settings={{ speed: -0.3, type: ["translateY"] }}
			/>

			{/* under slider */}
			<Layer
				style={{
					left: "auto",
					right: "79px",
					top: "1856px",
					rotate: "30deg",
				}}
				className={classes.blackBoneSmall}
				settings={{ speed: -0.3, type: ["translateY"] }}
			/>
			<Layer
				style={{
					left: "auto",
					right: "79px",
					top: "1956px",
					rotate: "30deg",
				}}
				className={classes.boneBig}
				settings={{ speed: -0.3, type: ["translateY"] }}
			/>
			<Layer
				style={{
					left: "auto",
					right: "76px",
					top: "2245px",
					rotate: "38deg",
				}}
				className={classes.plate1}
				settings={{ speed: -0.3, type: ["translateY"] }}
			/>
			<Layer
				style={{
					left: "auto",
					right: "371px",
					top: "2163px",
					rotate: "-48deg",
				}}
				className={classes.dogpawBig}
				settings={{ speed: -0.3, type: ["translateY"] }}
			/>
			<Layer
				style={{
					left: "auto",
					right: "129px",
					top: "1876px",
					rotate: "-8deg",
				}}
				className={classes.dogPawSmall}
				settings={{ speed: -0.3, type: ["translateY"] }}
			/>
			<Layer
				style={{
					left: "auto",
					right: "129px",
					top: "2160px",
					rotate: "-8deg",
				}}
				className={classes.dogPawSmall}
				settings={{ speed: -0.3, type: ["translateY"] }}
			/>
			<Layer
				style={{
					left: "auto",
					right: "139px",
					top: "2318px",
					rotate: "41deg",
				}}
				className={classes.blackBoneSmall}
				settings={{ speed: -0.3, type: ["translateY"] }}
			/>

			{children}
		</Parallax>
	);
}

export default ParallexMobile;
