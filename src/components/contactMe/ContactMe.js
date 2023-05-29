import React, { useState } from "react";
import classesComputer from "./contact.module.css";
import classesMobile from "./contactMobile.module.css";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import sideDog from "./13-dog-png-image.png";
const ContactMe = ({ isMobile }) => {
	const classes = isMobile ? classesMobile : classesComputer;
	const [title, setTitle] = useState("");
	const [message, setMessage] = useState("");
	const [senderEmail, setSenderEmail] = useState("");
	const [isMessageSent, setIsMessageSent] = useState(false);

	const handleTitleChange = (event) => {
		setTitle(event.target.value);
	};

	const handleMessageChange = (event) => {
		setMessage(event.target.value);
	};

	const handleSenderEmailChange = (event) => {
		setSenderEmail(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		let formData = new FormData();
		formData.append("title", title);
		formData.append("message", message);
		formData.append("senderEmail", senderEmail);

		const form = document.createElement("form");
		formData.forEach((value, key) => {
			const field = document.createElement("input");
			field.setAttribute("type", "hidden");
			field.setAttribute("name", key);
			field.setAttribute("value", value);
			form.appendChild(field);
		});

		console.log(process.env.REACT_APP_SERVICE_ID);

		emailjs
			.sendForm(
				process.env.REACT_APP_SERVICE_ID,
				process.env.REACT_APP_TEMPLATE_ID,
				form,
				process.env.REACT_APP_PUBLIC_KEY,
			)
			.then(
				setIsMessageSent(true),
				(result) => console.log(result.text),
				(error) => console.log(error.text),
			);

		setTitle("");
		setMessage("");
		setSenderEmail("");
	};

	const tcontactBoxVarients = {
		offscreen: { x: 30, opacity: 0 },
		onscreen: { x: 0, opacity: 1, transition: { duration: 2 } },
	};
	const dogVarient = {
		offscreen: { x: -500, opacity: 0 },
		onscreen: { x: 0, opacity: 1, transition: { duration: 1 } },
	};

	// const momVarients = {
	// 	offscreen: { x: -30, opacity: 0 },
	// 	onscreen: { x: 0, opacity: 1, transition: { duration: 2 } },
	// };

	// const heartsVarients = {
	// 	offscreen: { y: 50, opacity: 0 },
	// 	onscreen: { y: 0, opacity: 1, transition: { duration: 2 } },
	// };

	return (
		<motion.div
			initial={"offscreen"}
			whileInView={"onscreen"}
			transition={{ staggerChildren: 0.2 }}
			viewport={{ once: true, amount: 0.1 }}
			className={classes.allContactBox}>
			<div
				className={classes.contacxtContainer}
				initial={"offscreen"}
				whileInView={"onscreen"}
				transition={{ staggerChildren: 0.8 }}
				viewport={{ once: true, amount: 0.1 }}>
				<motion.div
					className={classes.contactTitle}
					variants={tcontactBoxVarients}>
					<h1 className={classes.contactTitle}>שלחו הודעה</h1>
				</motion.div>
				<div className={classes.formContainer}>
					<motion.div variants={tcontactBoxVarients}>
						{!isMessageSent && (
							<form onSubmit={handleSubmit}>
								<div className={classes.inputAndTitleBox}>
									<label htmlFor="title"> נושא ההודעה</label>
									<input
										className={classes.topicAndMail}
										type="text"
										id="title"
										value={title}
										onChange={handleTitleChange}
										required
									/>
								</div>
								<div className={classes.inputAndTitleBox}>
									<label htmlFor="senderEmail"> מייל השולח</label>
									<input
										className={classes.topicAndMail}
										type="email"
										id="senderEmail"
										value={senderEmail}
										onChange={handleSenderEmailChange}
										required
									/>
								</div>
								<div className={classes.inputAndTitleBox}>
									<label htmlFor="message">תוכן ההודעה</label>
									<textarea
										className={classes.messageContent}
										id="message"
										value={message}
										onChange={handleMessageChange}
										required></textarea>
								</div>

								<div className={classes.btnContainer}>
									<button
										className={`${classes.sendBtn} ${classes.btn}`}
										type="submit">
										לשליחה
									</button>
								</div>
							</form>
						)}
						{isMessageSent && (
							<div className={classes.sent}>
								<p>תודה רבה על פנייתך!</p>
								<div className={classes.checkmarkBox}>
									<CheckCircleOutlineIcon className={classes.checkmark} />
								</div>
								<h5>המייל נשלח בהצלחה נחזור אליך בהקדם</h5>
							</div>
						)}
					</motion.div>
				</div>
			</div>
			<motion.div
				variants={dogVarient}
				className={classes.ContactDogImg}>
				<img
					src={sideDog}
					alt="dog"></img>
			</motion.div>
		</motion.div>
	);
};

export default ContactMe;
