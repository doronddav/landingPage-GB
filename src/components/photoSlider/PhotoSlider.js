import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// computer icon
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
// phone icon
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import classesComputer from "./photoSlider.module.css";
import classesMobile from "./photoSliderMobile.module.css";

import photo1 from "./photos/babelAndYuki.png";
import photo2 from "./photos/therapy.png";
import photo3 from "./photos/Screenshot 2023-05-22 at 15.39.07.png";
import photo4 from "./photos/Screenshot 2023-05-22 at 14.43.06.png";
const images = [photo1, photo2, photo4, photo3];
const PhotoSlider = ({ isMobile }) => {
	const classes = isMobile ? classesMobile : classesComputer;

	const [currentIndex, setCurrentIndex] = useState(0);

	const typesBoxVarients = {
		offscreen: { y: 90, opacity: 0 },
		onscreen: { y: 0, opacity: 1, transition: { duration: 2 } },
	};
	const handlePrevious = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? images.length - 1 : prevIndex - 1,
		);
	};

	const handleNext = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === images.length - 1 ? setCurrentIndex(0) : prevIndex + 1,
		);
	};
	useEffect(() => {
		const timer = setTimeout(() => {
			handleNext();
		}, 3000);
		return () => clearTimeout(timer);
	}, [currentIndex]);

	return isMobile ? (
		<motion.div
			id="photos"
			initial={"offscreen"}
			whileInView={"onscreen"}
			viewport={{ once: true, amount: 0.1 }}>
			<motion.div
				className={classes.mainContiner}
				variants={typesBoxVarients}>
				<div className={classes.imgContainer}>
					<img
						className={classes.image}
						src={images[currentIndex]}
						alt="Slider"
					/>
				</div>
				<div className={classes.btnContainer}>
					<button
						onClick={handlePrevious}
						className={classes.sliderButton}>
						<ArrowBackIcon />
					</button>
					<button
						onClick={handleNext}
						className={classes.sliderButton}>
						<ArrowForwardIcon />
					</button>
				</div>
			</motion.div>
		</motion.div>
	) : (
		<motion.div
			id="photos"
			initial={"offscreen"}
			whileInView={"onscreen"}
			viewport={{ once: true, amount: 0.1 }}>
			<motion.div className={classes.mainContiner}>
				<button
					onClick={handlePrevious}
					className={classes.sliderButton}>
					<ArrowCircleLeftOutlinedIcon />
				</button>
				<div className={classes.imgContainer}>
					<img
						className={classes.image}
						src={images[currentIndex]}
						alt="Slider"
					/>
				</div>

				<button
					onClick={handleNext}
					className={classes.sliderButton}>
					<ArrowCircleRightOutlinedIcon />
				</button>
			</motion.div>
		</motion.div>
	);
};

export default PhotoSlider;
