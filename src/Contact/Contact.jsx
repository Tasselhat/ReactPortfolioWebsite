import React from "react";

import Header from "../Components/Header";
import Footer from "../Components/Footer";

import backgroundDividerImg from "../images/background-divider-img.png";

import "../index.css";
import "./Contact.css";

export default class Contact extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			name: "",
			email: "",
			message: "",
		};
	}

	handleSubmit(e) {
		e.preventDefault();

		fetch("https://budget-node-server.herokuapp.com/send", {
			method: "POST",
			body: JSON.stringify(this.state),
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
		})
			.then((response) => response.json())
			.then((response) => {
				if (response.status === "success") {
					alert("Message Sent.");
					this.resetForm();
				} else if (response.status === "fail") {
					alert("Message failed to send.");
				}
			});
	}

	resetForm() {
		this.setState({ name: "", email: "", message: "" });
	}

	render() {
		return (
			<div>
				<Header />
				<main id="page" className="contact-container" role="main">
					<img
						className="background-divider-img"
						src={backgroundDividerImg}
						alt=""
					/>
					<div className="contact-form-wrapper">
						<form
							id="contact-form"
							className="contact-form"
							onSubmit={this.handleSubmit.bind(this)}
							method="POST"
						>
							<div className="form-element">
								<label className="form-labels" htmlFor="name">
									Name
								</label>
								<input
									type="text"
									className="form-control"
									value={this.state.name}
									onChange={this.onNameChange.bind(this)}
								/>
							</div>

							<div className="form-element">
								<label className="form-labels" htmlFor="exampleInputEmail">
									Email address
								</label>
								<input
									type="email"
									className="form-control"
									aria-describedby="emailHelp"
									value={this.state.email}
									onChange={this.onEmailChange.bind(this)}
								/>
							</div>

							<div className="form-element">
								<label className="form-labels" htmlFor="message">
									Your message to me:
								</label>
								<textarea
									type="text"
									className="message-box"
									rows="5"
									value={this.state.message}
									onChange={this.onMessageChange.bind(this)}
								></textarea>
							</div>
							<div className="submit-clear-buttons">
								<button type="submit" className="form-button">
									Submit
								</button>
								<button
									type="clear"
									className="form-button"
									onClick={() => this.resetForm()}
								>
									Clear
								</button>
							</div>
						</form>
					</div>
				</main>
				<div className="footer-background-overlay"></div>
				<Footer />
			</div>
		);
	}

	onNameChange(event) {
		this.setState({ name: event.target.value });
	}

	onEmailChange(event) {
		this.setState({ email: event.target.value });
	}

	onMessageChange(event) {
		this.setState({ message: event.target.value });
	}
}
