import AppearLayer from "react-parallax-scroll";
import classesComputer from "./about.module.css";
import classesMobile from "./aboutMobile.module.css";
import gal from "../../images/gal.png";
import { motion } from "framer-motion";

function About({ isMobile }) {
	const classes = isMobile ? classesMobile : classesComputer;

	const aboutBoxVarients = {
		offscreen: { y: 90, opacity: 0 },
		onscreen: { y: 0, opacity: 1, transition: { duration: 2 } },
	};
	return (
		<motion.div
			className={classes.aboutMainDiv}
			id="about"
			initial={"offscreen"}
			whileInView={"onscreen"}
			viewport={{ once: true, amount: 0.1 }}>
			<motion.div
				variants={aboutBoxVarients}
				className={classes.aboutBox}>
				<div>
					<img
						src={gal}
						alt="coverPhoto"></img>
				</div>

				<div className={classes.mainText}>
					<p className={classes.peragraph1}>
						סחטיר בלובק. תצטנפל בלינדו למרקל אס לכימפו, דול, צוט ומעיוט - לפתיעם
						ברשג - ולתיעם גדדיש. קוויז דומור ליאמום בלינך רוגצה. לפמעט מוסן מנת.
						קולהע צופעט למרקוח איבן איף, ברומץ כלרשט מיחוצים. קלאצי קולורס
						מונפרד אדנדום סילקוף, מרגשי ומרגשח. עמחליף קולהע צופעט למרקוח איבן
						איף, ברומץ כלרשט מיחוצים. קלאצי לפרומי בלוף קינץ תתיח לרעח. לת צשחמי
						צש בליא, מנסוטו צמלח לביקו ננבי, צמוקו בלוקריה שיצמה ברורק. גולר
						מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, ושבעגט ליבם סולגק.
						בראיט ולחת צורק מונחף, בגורמי מגמש. תרבנך וסתעד לכנו סתשם השמה -
						לתכי מורגם בורק? לתיג ישבעס.
					</p>
				</div>
			</motion.div>
		</motion.div>
	);
}

export default About;
