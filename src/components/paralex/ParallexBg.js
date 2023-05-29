import Parallax, { Layer, AppearLayer } from "react-parallax-scroll";

import classes from "./parallex.module.css";
function ParallexBg({ children }) {
	return (
		<Parallax>
			{/* top */}

			<Layer
				style={{ left: "auto", right: "50px", top: "900px", rotate: "10deg" }}
				className={classes.dogPaw1}
				settings={{ speed: -0.3, type: ["translateY"] }}
			/>
			<Layer
				style={{
					left: "auto",
					right: "1200px",
					top: "700px",
					rotate: "20deg",
				}}
				className={classes.plate1}
				settings={{ speed: -0.3, type: ["translateY"] }}
			/>
			<Layer
				style={{
					left: "auto",
					right: "1700px",
					top: "1160px",
					rotate: "25deg",
				}}
				className={classes.dogPaw2}
				settings={{ speed: -0.3, type: ["translateY"] }}
			/>
			<Layer
				style={{
					left: "auto",
					right: "1700px",
					top: "900px",
					rotate: "-45deg",
				}}
				className={classes.boneBig}
				settings={{ speed: -0.3, type: ["translateY"] }}
			/>
			<Layer
				style={{
					left: "auto",
					right: "120px",
					top: "1200px",
					rotate: "-35deg",
				}}
				className={classes.boneSmall}
				settings={{ speed: -0.3, type: ["translateY"] }}
			/>
			<Layer
				style={{ left: "auto", right: "800px", top: "700px", rotate: "-20deg" }}
				className={classes.dogPaw3}
				settings={{ speed: -0.3, type: ["translateY"] }}
			/>

			<Layer
				style={{
					left: "auto",
					right: "1200px",
					top: "1000px",
					rotate: "35deg",
				}}
				className={classes.dogPaw2}
				settings={{ speed: -0.3, type: ["translateY"] }}
			/>
			{/* middle */}

			<Layer
				style={{ left: "auto", right: "100px", top: "1600px", rotate: "10deg" }}
				className={classes.dogPaw2}
				settings={{ speed: -0.3, type: ["translateY"] }}
			/>
			<Layer
				style={{
					left: "auto",
					right: "650px",
					top: "1200px",
					rotate: "-20deg",
				}}
				className={classes.bone1}
				settings={{ speed: -0.3, type: ["translateY"] }}
			/>
			<Layer
				style={{
					left: "auto",
					right: "1300px",
					top: "1250px",
					rotate: "15deg",
				}}
				className={classes.plate1}
				settings={{ speed: -0.3, type: ["translateY"] }}
			/>
			<Layer
				style={{
					left: "auto",
					right: "800px",
					top: "1700px",
					rotate: "-20deg",
				}}
				className={classes.dogPaw1}
				settings={{ speed: -0.3, type: ["translateY"] }}
			/>
			<Layer
				style={{
					left: "auto",
					right: "1200px",
					top: "1600px",
					rotate: "35deg",
				}}
				className={classes.dogPaw3}
				settings={{ speed: -0.3, type: ["translateY"] }}
			/>
			<Layer
				style={{
					left: "auto",
					right: "650px",
					top: "1200px",
					rotate: "-20deg",
				}}
				className={classes.bone1}
				settings={{ speed: -0.3, type: ["translateY"] }}
			/>
			<Layer
				style={{
					left: "auto",
					right: "600px",
					top: "1350px",
					rotate: "15deg",
				}}
				className={classes.bone1}
				settings={{ speed: -0.3, type: ["translateY"] }}
			/>
			<Layer
				style={{
					left: "auto",
					right: "1300px",
					top: "1450px",
					rotate: "-45deg",
				}}
				className={classes.plate1}
				settings={{ speed: -0.3, type: ["translateY"] }}
			/>

			<Layer
				style={{
					left: "auto",
					right: "1700px",
					top: "1800px",
					rotate: "-45deg",
				}}
				className={classes.dogPaw2}
				settings={{ speed: -0.3, type: ["translateY"] }}
			/>
			<Layer
				style={{
					left: "auto",
					right: "1800px",
					top: "1450px",
					rotate: "-45deg",
				}}
				className={classes.boneSmall}
				settings={{ speed: -0.3, type: ["translateY"] }}
			/>
			<Layer
				style={{
					left: "auto",
					right: "150px",
					top: "1450px",
					rotate: "-45deg",
				}}
				className={classes.plate1}
				settings={{ speed: -0.3, type: ["translateY"] }}
			/>
			{/* button */}
			<Layer
				style={{
					left: "auto",
					right: "100px",
					top: "1780px",
					rotate: "-20deg",
				}}
				className={classes.plate1}
				settings={{ speed: -0.3, type: ["translateY"] }}
			/>
			<Layer
				style={{
					left: "auto",
					right: "100",
					top: "1780px",
					rotate: "-20deg",
				}}
				className={classes.dogPaw1}
				settings={{ speed: -0.3, type: ["translateY"] }}
			/>
			{/* paw */}

			{/* bone1 */}

			<Layer
				style={{
					left: "auto",
					right: "600px",
					top: "3200px",
					rotate: "-45deg",
				}}
				className={classes.boneBig}
				settings={{ speed: -0.3, type: ["translateY"] }}
			/>
			<Layer
				style={{
					left: "auto",
					right: "1130px",
					top: "2790px",
					rotate: "-20deg",
				}}
				className={classes.boneSmall}
				settings={{ speed: -0.3, type: ["translateY"] }}
			/>
			<Layer
				style={{
					left: "auto",
					right: "1500px",
					top: "2100px",
					rotate: "30deg",
				}}
				className={classes.boneBig}
				settings={{ speed: -0.3, type: ["translateY"] }}
			/>
			<Layer
				style={{
					left: "auto",
					right: "300px",
					top: "2100px",
					rotate: "-30deg",
				}}
				className={classes.boneBig}
				settings={{ speed: -0.3, type: ["translateY"] }}
			/>
			<Layer
				style={{
					left: "auto",
					right: "900px",
					top: "2200px",
					rotate: "-30deg",
				}}
				className={classes.plate1}
				settings={{ speed: -0.3, type: ["translateY"] }}
			/>
			<Layer
				style={{
					left: "auto",
					right: "1300px",
					top: "2140px",
					rotate: "-30deg",
				}}
				className={classes.dogPaw3}
				settings={{ speed: -0.3, type: ["translateY"] }}
			/>
			<Layer
				style={{
					left: "auto",
					right: "1500px",
					top: "2350px",
					rotate: "-45deg",
				}}
				className={classes.dogPaw1}
				settings={{ speed: -0.3, type: ["translateY"] }}
			/>
			<Layer
				style={{
					left: "auto",
					right: "1160px",
					top: "2420px",
					rotate: "-45deg",
				}}
				className={classes.dogPaw3}
				settings={{ speed: -0.3, type: ["translateY"] }}
			/>
			<Layer
				style={{
					left: "auto",
					right: "600px",
					top: "2480px",
					rotate: "45deg",
				}}
				className={classes.boneBig}
				settings={{ speed: -0.3, type: ["translateY"] }}
			/>
			<Layer
				style={{
					left: "auto",
					right: "300px",
					top: "2430px",
					rotate: "45deg",
				}}
				className={classes.plate1}
				settings={{ speed: -0.3, type: ["translateY"] }}
			/>
			<Layer
				style={{
					left: "auto",
					right: "190px",
					top: "2320px",
					rotate: "-25deg",
				}}
				className={classes.dogPaw2}
				settings={{ speed: -0.3, type: ["translateY"] }}
			/>
			<Layer
				style={{
					left: "auto",
					right: "1450px",
					top: "2600px",
					rotate: "-15deg",
				}}
				className={classes.boneBig}
				settings={{ speed: -0.3, type: ["translateY"] }}
			/>
			<Layer
				style={{
					left: "auto",
					right: "1600px",
					top: "2850px",
					rotate: "15deg",
				}}
				className={classes.plate1}
				settings={{ speed: -0.3, type: ["translateY"] }}
			/>
			<Layer
				style={{
					left: "auto",
					right: "200px",
					top: "2550px",
					rotate: "15deg",
				}}
				className={classes.dogPaw3}
				settings={{ speed: -0.3, type: ["translateY"] }}
			/>
			<Layer
				style={{
					left: "auto",
					right: "500px",
					top: "2700px",
					rotate: "25deg",
				}}
				className={classes.dogPaw1}
				settings={{ speed: -0.3, type: ["translateY"] }}
			/>
			<Layer
				style={{
					left: "auto",
					right: "300px",
					top: "2900px",
					rotate: "-15deg",
				}}
				className={classes.plate1}
				settings={{ speed: -0.3, type: ["translateY"] }}
			/>

			{/* buttom over 3000px from top */}
			<Layer
				style={{
					left: "auto",
					right: "1300px",
					top: "3000px",
					rotate: "-15deg",
				}}
				className={classes.dogPaw1}
				settings={{ speed: -0.3, type: ["translateY"] }}
			/>
			<Layer
				style={{
					left: "auto",
					right: "1650px",
					top: "3200px",
					rotate: "25deg",
				}}
				className={classes.dogPaw3}
				settings={{ speed: -0.3, type: ["translateY"] }}
			/>
			<Layer
				style={{
					left: "auto",
					right: "1650px",
					top: "300px",
					rotate: "45deg",
				}}
				className={classes.boneBig}
				settings={{ speed: -0.3, type: ["translateY"] }}
			/>
			<Layer
				style={{
					left: "auto",
					right: "1400px",
					top: "3150px",
					rotate: "30deg",
				}}
				className={classes.boneSmall}
				settings={{ speed: -0.3, type: ["translateY"] }}
			/>

			{children}
		</Parallax>
	);
}

export default ParallexBg;
