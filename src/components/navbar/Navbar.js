import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import classesComputer from "./navbar.module.css";
import classesMobile from "./navbarMobile.module.css";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import ToggleNav from "../toggleNavBar/ToggleNav";

function NavBar({ isMobile }) {
	const [isNavOpen, setIsNavOpen] = useState(false);

	const classes = isMobile ? classesMobile : classesComputer;

	const toggleNav = () => {
		setIsNavOpen(!isNavOpen);
	};
	// const scrollToComponent = (scrollYPosition) => {
	// 	console.log(window.scrollY);
	// 	if (isNavOpen) setIsNavOpen(false);
	// 	window.scrollTo({
	// 		top: scrollYPosition,
	// 		behavior: "smooth",
	// 	});
	// };
	function scrollToElement(elementId) {
		return () => {
			const element = document.getElementById(elementId);
			if (element) {
				window.scrollTo({
					top: element.offsetTop,
					behavior: "smooth",
				});
				if (isMobile) {
					setIsNavOpen(false);
				}
			}
		};
	}

	return (
		<>
			<nav className={classes.navbar}>
				<div className={classes.navContainer}>
					<div className={classes.logoContainer}>
						<Link>
							<a className={classes.link}> LOGO</a>
						</Link>
					</div>
					{isMobile ? (
						<MenuSharpIcon onClick={toggleNav} />
					) : (
						<div className={classes.navList}>
							<a
								className={classes.link}
								onClick={scrollToElement("about")}>
								אודות
							</a>
							<a
								className={classes.link}
								onClick={scrollToElement("types")}>
								סוגי אילוף
							</a>
							<a
								onClick={scrollToElement("photos")}
								className={classes.link}>
								תמונות
							</a>
							<a
								onClick={scrollToElement("contact")}
								className={classes.link}>
								צור קשר
							</a>
						</div>
					)}
				</div>
			</nav>
			{isNavOpen && (
				<ToggleNav
					scrollToElement={scrollToElement}
					setIsNavOpen={setIsNavOpen}
				/>
			)}
		</>
	);
}

export default NavBar;
