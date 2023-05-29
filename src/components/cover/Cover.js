import classesComputer from "./cover.module.css";
import classesMobile from "./coverMobile.module.css";
import cover from "../../images/cover.png";
function Cover({ isMobile }) {
	const classes = isMobile ? classesMobile : classesComputer;
	return (
		<>
			<div className={classes.main}>
				<img
					src={cover}
					alt="coverPhoto"></img>

				<div className={classes.mainText}>
					<h3 className={classes.name}>Gal Bareket</h3>
					<p className={classes.title}>אילוף כלבים וכלבנות טיפולית</p>
				</div>
			</div>
		</>
	);
}

export default Cover;
