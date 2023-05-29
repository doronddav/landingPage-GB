import React from "react";
import TraningType from "./TraningType";
import classesComputer from "./trainingType.module.css";
import classesMobile from "./trainingTypeMobile.module.css";
import pupyPhoto from "../../images/pupy.png";
import therapyImg from "../../images/therapy.png";
import bumbleAndYuki from "../../images/babelAndYuki.png";
import crazyYuvi from "../../images/crazyYuvi.jpeg";
import { motion } from "framer-motion";
function trainingType({ isMobile }) {
	const classes = isMobile ? classesMobile : classesComputer;
	const typesBoxVarients = {
		offscreen: { y: 90, opacity: 0 },
		onscreen: { y: 0, opacity: 1, transition: { duration: 2 } },
	};

	return (
		<motion.div
			className={classes.typesFullPage}
			initial={"offscreen"}
			whileInView={"onscreen"}
			id="types"
			viewport={{ once: true, amount: 0.1 }}>
			<motion.div
				className={classes.fullContianer}
				variants={typesBoxVarients}>
				<div className={classes.titleBox}>
					<h4>סוגי אילוף</h4>
					<p>
						כל שיטה מותאמת בצורה המדוייקת בדיוק עבור צרכי הכלב והבעלים. בבחירת
						שיטת האילוף נתייחס לסוג הכלב, גילו,התנהלות החיים בבית וכל זאת במטרה
						להתאים בצורה המדוייקת ביותר את סוג האילוף
					</p>
				</div>
				<div className={classes.main}>
					<TraningType isMobile={isMobile} />
				</div>
			</motion.div>
		</motion.div>
	);
}

export default trainingType;
