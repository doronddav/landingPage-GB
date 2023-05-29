import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { Link } from "react-router-dom";
import classesComputer from "./footer.module.css";
import classesMobile from "./footerMobile.module.css";
function Footer({ isMobile }) {
	const classes = isMobile ? classesMobile : classesComputer;
	console.log(isMobile);
	const facebookClickHandler = () => {
		window.open("https://www.facebook.com/gal.bareket");
	};
	const emailClickHandler = () => {
		window.location.href = "galbareket93@gmail.com";
	};
	return (
		<footer
			className={classes.footerContainer}
			id="contact">
			<div className={classes.businnessDetails}>
				<div>
					<EmailIcon onClick={emailClickHandler} />
					<h5 className={classes.emailAndPhone}>galbareket93@gmail.com</h5>
				</div>
				<div>
					<LocalPhoneIcon title="050-4444444" />
					<h5 className={classes.emailAndPhone}>050-4444444</h5>
				</div>
				<Link to="https://www.facebook.com/sfatharegesh">
					<div className={classes.footerIconsContainer}>
						<FacebookIcon
							onClick={facebookClickHandler}
							style={{ fontSize: "1.8rem", color: "white" }}
						/>
						<InstagramIcon
							onClick={facebookClickHandler}
							style={{ fontSize: "1.8rem", color: "white" }}
						/>
					</div>
				</Link>
			</div>
			<div>
				<p className={classes.webMaker}>Doron David 2023 ©</p>
			</div>
		</footer>
	);
}

export default Footer;
