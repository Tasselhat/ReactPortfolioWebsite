import React from "react";

import { calculateAge } from "./HowLong.js";
import Header from "../Components/Header.js";
import Footer from "../Components/Footer.js";
import backgroundDividerImg from "../images/5ef2e559f911d339e9e83b94_image-divider-bottom.png";
import "./HowLong.css";
import "../General.css";
import "../index.css";

export default class HowLong extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	componentDidMount() {
		document.getElementById("current-date-selector").value = new Date()
			.toJSON()
			.slice(0, 10);
	}

	// Control

	clearCalculations() {
		document.getElementById("years-alive-p").innerHTML = "";
		document.getElementById("days-alive-p").innerHTML = "";
		document.getElementById("months-alive-p").innerHTML = "";
		document.getElementById("weeks-alive-p").innerHTML = "";
		document.getElementById("hours-minutes-seconds-p").innerHTML = "";
		document.getElementById("dayofweek").innerHTML = "";
		document.getElementById("happy-new-year").innerHTML = "";
	}

	submitDates() {
		let yearBorn = 2001;
		let monthBorn = 2001;
		let dayBorn = 2001;
		let desiredYear = 2001;
		let desiredMonth = 2001;
		let desiredD = 2001;
		const datePicker = document.getElementById("date-of-birth-selector").value;
		const dateOfBirth = new Date(datePicker);
		if (!!dateOfBirth.valueOf()) {
			yearBorn = dateOfBirth.getFullYear();
			monthBorn = dateOfBirth.getMonth();
			dayBorn = dateOfBirth.getDate();
		} else {
			alert("Invalid Date Selection.");
			return;
		}

		const desiredDatePicker = document.getElementById(
			"current-date-selector"
		).value;
		const desiredDate = new Date(desiredDatePicker);
		if (!!desiredDate.valueOf()) {
			desiredYear = desiredDate.getFullYear();
			desiredMonth = desiredDate.getMonth();
			desiredD = desiredDate.getDate();
		}
		console.log(dateOfBirth, desiredDate);
		const dayAndYearsAliveFinal = calculateAge(
			desiredMonth,
			desiredD,
			desiredYear,
			monthBorn,
			dayBorn,
			yearBorn
		);
		const daysAlive = dayAndYearsAliveFinal[0];
		const yearsAlive = dayAndYearsAliveFinal[1];
		this.displayDaysAlive(daysAlive, yearsAlive);
		this.displayDayOfTheWeekBorn(dateOfBirth);
	}

	//View

	displayDayOfTheWeekBorn(dateOfBirth) {
		const weekday = [
			"Sunday",
			"Monday",
			"Tuesday",
			"Wednesday",
			"Thursday",
			"Friday",
			"Saturday",
			"Sunday",
		];

		const d = new Date(dateOfBirth);
		let day = weekday[d.getDay() + 1];
		document.getElementById("dayofweek").innerHTML =
			"You were born on a " + day;
	}

	displayDaysAlive(daysAlive, yearsAlive) {
		const avgDaysPerMonth = 30.44; //avg days in a month
		const monthsAlive = (daysAlive / avgDaysPerMonth).toFixed(2);
		const weeksAlive = (daysAlive / 7).toFixed(2);
		const hoursAlive = daysAlive * 24;
		const minutesAlive = hoursAlive * 60;
		const secondsAlive = minutesAlive * 60;

		const numberFormat = new Intl.NumberFormat("en-US");

		console.log(
			daysAlive,
			yearsAlive,
			monthsAlive,
			weeksAlive,
			hoursAlive,
			minutesAlive,
			secondsAlive
		);
		document.getElementById("years-alive-p").innerHTML =
			"You are " + numberFormat.format(yearsAlive) + " years old.";
		document.getElementById("days-alive-p").innerHTML =
			"You were born exactly " + numberFormat.format(daysAlive) + " days ago.";
		document.getElementById("months-alive-p").innerHTML =
			"Which is about " + numberFormat.format(monthsAlive) + " months ago";
		document.getElementById("weeks-alive-p").innerHTML =
			"or " + numberFormat.format(weeksAlive) + " weeks ago";
		document.getElementById("hours-minutes-seconds-p").innerHTML =
			"or " +
			numberFormat.format(hoursAlive) +
			" hours " +
			numberFormat.format(minutesAlive) +
			" minutes and " +
			numberFormat.format(secondsAlive) +
			" seconds!!";
		document.getElementById("happy-new-year").innerHTML =
			"Hopefully you treasured every single second!";
	}

	render() {
		return (
			<div>
				<Header />
				<main id="page" className="HowLong-container" role="main">
					<img
						className="background-divider-img"
						src={backgroundDividerImg}
						alt=""
					/>
					<section className="HowLongApplication">
						<div className="HowLong-wrapper">
							<h1
								style={{
									fontSize: "20px",
									textAlign: "center",
								}}
							>
								How Long Have I Been Alive?
							</h1>
							<div className="HowLongDisplay" id="HowLongDiplay">
								<div className="date-inputs">
									<div className="date-selector">
										<h3>
											Date of birth
											<input
												id="date-of-birth-selector"
												className="date-of-birth-selector"
												type="date"
												onKeyDown={(e) => {
													if (e.key === "Enter") {
														this.submitDates();
													}
												}}
											></input>
										</h3>
									</div>
									<div className="date-selector">
										<h3>
											Current date
											<input
												id="current-date-selector"
												className="current-date-selector"
												type="date"
												onKeyDown={(e) => {
													if (e.key === "Enter") {
														this.submitDates();
													}
												}}
											></input>
										</h3>
									</div>
								</div>
								<div className="submit-clear-buttons">
									<button
										className="form-button"
										onClick={() => this.submitDates()}
									>
										Submit
									</button>
									<button
										className="form-button"
										onClick={() => this.clearCalculations()}
									>
										Clear
									</button>
								</div>
							</div>
							<div
								style={{
									position: "relative",
								}}
							>
								<p id="years-alive-p"></p>
								<p id="days-alive-p"></p>
								<p id="months-alive-p"></p>
								<p id="weeks-alive-p"></p>
								<p id="hours-minutes-seconds-p"></p>
								<p id="dayofweek"></p>
								<p id="happy-new-year"></p>
							</div>
						</div>
					</section>
				</main>
				<div className="footer-background-overlay"></div>
				<Footer />
			</div>
		);
	}
}
