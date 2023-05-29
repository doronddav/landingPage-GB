import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./MobileNavbar.module.css";

import { Link } from "react-router-dom";

function MobileNavbar() {
	return (
		<>
			<nav className={classes.navbar}>
				<div className={classes.navContainer}>
					<div className={classes.logoContainer}>
						<Link>
							<a className={classes.link}> LOGO</a>
						</Link>
					</div>
				</div>
			</nav>
		</>
	);
}

export default MobileNavbar;
