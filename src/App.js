import React, { useEffect, useState } from "react";

import NavBar from "./components/navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import MobileNavbar from "./components/mobileNavbar/MobileNavbar";
import classes from "./App.module.css";
function App() {
	const [isMobile, setIsMobile] = useState(null);

	// let checkForMobile = () => {
	// 	if (window.navigator.userAgentData.mobile === false) setIsMobile(false);
	// 	else setIsMobile(true);
	// 	console.log("isMobile:", isMobile);
	// };

	// useEffect(() => {
	// 	checkForMobile();
	// }, []);

	// useEffect(() => {
	// 	console.log("isMobile:", isMobile);
	// }, [isMobile]);

	let checkForMobile = () => {
		const isMobile = window.matchMedia("(max-width: 768px)").matches;
		setIsMobile(isMobile);
		console.log("isMobile:", isMobile);
	};

	useEffect(() => {
		checkForMobile();
	}, []);

	useEffect(() => {
		console.log("isMobile:", isMobile);
	}, [isMobile]);

	return (
		<BrowserRouter>
			<div className={classes.fullSite}>
				<NavBar isMobile={isMobile} />
				<div className="container">
					<Routes>
						<Route
							exact
							path="/"
							element={<Home isMobile={isMobile} />}
						/>
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
