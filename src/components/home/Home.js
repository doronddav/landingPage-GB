import React from "react";
import Cover from "../cover/Cover";
import PhotoSlider from "../photoSlider/PhotoSlider";
import TrainingType from "../trainingTypes/TrainingTypes";
import About from "../About/About";
import classesComputer from "./home.module.css";
import classesMobile from "./homeMobile.module.css";
import ParallexMobile from "../paralexMobile/ParallexMobile";
import ParallexComp from "../paralex/ParalexComp";

import ContactMe from "../contactMe/ContactMe";
import Footer from "../footer/Footer";

function Home({ isMobile }) {
	//ALL COMPONENTS
	const classes = isMobile ? classesMobile : classesComputer;
	return (
		<div className={classes.homePage}>
			<Cover isMobile={isMobile} />
			{isMobile ? (
				<div className={classes.homeContent}>
					<About
						id="about"
						isMobile={isMobile}
					/>
					<TrainingType isMobile={isMobile} />
					<PhotoSlider isMobile={isMobile} />
					<ContactMe isMobile={isMobile} />
				</div>
			) : (
				<ParallexComp>
					<div className={classes.homeContent}>
						<About
							id="about"
							isMobile={isMobile}
						/>
						<TrainingType isMobile={isMobile} />
						<PhotoSlider isMobile={isMobile} />
						<ContactMe isMobile={isMobile} />
					</div>
				</ParallexComp>
			)}
			<Footer isMobile={isMobile} />
		</div>
	);
}

export default Home;
