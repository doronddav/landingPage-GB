import React from "react";
import CloseSharpIcon from "@mui/icons-material/CloseSharp";
import classes from "./ToggleNav.module.css";
const ToggleNav = ({ setIsNavOpen, scrollToElement }) => {
	function closePopip(event) {
		event.stopPropagation();
		setIsNavOpen(false);
	}
	return (
		<div className={classes.popupContainer}>
			<div onClick={closePopip}>
				<CloseSharpIcon className={classes.closeMenu} />
			</div>
			<ul className={classes.navList}>
				<a
					className={classes.navElement}
					onClick={scrollToElement("about")}>
					אודות
				</a>
				<a
					className={classes.navElement}
					onClick={scrollToElement("types")}>
					סוגי אילוף
				</a>
				<a
					className={classes.navElement}
					onClick={scrollToElement("photos")}>
					תמונות
				</a>
				<a
					className={classes.navElement}
					onClick={scrollToElement("contact")}>
					צור קשר
				</a>
			</ul>
		</div>
	);
};

export default ToggleNav;
