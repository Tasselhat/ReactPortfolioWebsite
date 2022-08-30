//Model

export function calculateAge(
  currentMonth,
  currentDay,
  currentYear,
  monthBorn,
  dayBorn,
  yearBorn
) {
  let yearsAlive = currentYear - (yearBorn + 1);
  let addAdditionalYear = false;
  if (currentMonth > monthBorn) {
    addAdditionalYear = true;
  } else if (currentMonth === monthBorn && dayBorn <= currentDay) {
    addAdditionalYear = true;
  } else {
    addAdditionalYear = false;
  }

  if (addAdditionalYear === true) {
    yearsAlive += 1;
  }

  let daysAlive = 0; //adds total days you have been alive cumulatively starting from 0

  if (
    yearBorn === currentYear &&
    currentMonth === monthBorn &&
    currentDay === dayBorn
  ) {
    daysAlive = 0;
  } else if (yearBorn === currentYear) {
    daysAlive += daysAliveCalculator(monthBorn, currentMonth - 1, yearBorn);
    daysAlive -= dayBorn;
    daysAlive += currentDay;
  } else if (currentYear - yearBorn === 1) {
    daysAlive += daysAliveCalculator(monthBorn + 1, 12, yearBorn); //add days alive from first year
    daysAlive = daysAlive - dayBorn; //subtract day born so the days of the month before you were born aren't added to total
    daysAlive += daysAliveCalculator(1, currentMonth, currentYear); //1 to start at January, end before the current month (add days from current year alive)
    daysAlive += currentDay; //add the current day of the month to total
  } else {
    daysAlive += daysAliveCalculator(monthBorn + 1, 12, yearBorn); //add days alive from first year
    daysAlive = daysAlive - dayBorn; //subtract day born so the days of the month before you were born aren't added to total
    for (let year = yearBorn + 1; year < currentYear; year++) {
      /* iterates through each year adding the days to the total accounting for leap years 
            skips the first and current year starting at year+1 ending at before current year */
      daysAlive += daysAliveCalculator(1, 12, year);
    }
    daysAlive += daysAliveCalculator(1, currentMonth, currentYear); //1 to start at January, end before the current month (add days from current year alive)
    daysAlive += currentDay; //add the current day of the month to total
  }

  const daysAliveFinal = daysAlive;

  return [daysAliveFinal, yearsAlive];
}

function daysAliveCalculator(startingMonth, finishMonth, year) {
  let daysOfYear = 0;
  const janDays = 31;
  const febDaysNonLeap = 28;
  const febDaysLeap = 29;
  const marDays = 31;
  const aprDays = 30;
  const mayDays = 31;
  const junDays = 30;
  const julDays = 31;
  const augDays = 31;
  const sepDays = 30;
  const octDays = 31;
  const novDays = 30;
  const decDays = 31;
  for (let month = startingMonth; month < finishMonth + 1; month++) {
    switch (month) {
      case 1:
        daysOfYear += janDays;
        break;
      case 2:
        if (year % 100 === 0 && year % 400 !== 0) {
          daysOfYear += febDaysNonLeap;
        } else if (year % 4 === 0) {
          daysOfYear += febDaysLeap;
        } else {
          daysOfYear += febDaysNonLeap;
        }
        console.log(daysOfYear + " " + year + "  59=nonleap 60=leap");
        break;
      case 3:
        daysOfYear += marDays;
        break;
      case 4:
        daysOfYear += aprDays;
        break;
      case 5:
        daysOfYear += mayDays;
        break;
      case 6:
        daysOfYear += junDays;
        break;
      case 7:
        daysOfYear += julDays;
        break;
      case 8:
        daysOfYear += augDays;
        break;
      case 9:
        daysOfYear += sepDays;
        break;
      case 10:
        daysOfYear += octDays;
        break;
      case 11:
        daysOfYear += novDays;
        break;
      case 12:
        daysOfYear += decDays;
        break;
      default:
        daysOfYear += 0;
        break;
    }
  }
  return daysOfYear;
}
