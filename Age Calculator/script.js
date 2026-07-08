// ===============================
// Selecting Elements
// ===============================

const birthDate = document.getElementById("birthDate");
const birthTime = document.getElementById("birthTime");
const calculateBtn = document.getElementById("calculateBtn");

const years = document.getElementById("years");
const months = document.getElementById("months");
const days = document.getElementById("days");

const weeks = document.getElementById("weeks");
const totalDays = document.getElementById("totalDays");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

const birthdayCountdown = document.getElementById("birthdayCountdown");
const zodiac = document.getElementById("zodiac");
const bornDay = document.getElementById("bornDay");
const leapYear = document.getElementById("leapYear");

let timer = null;
let savedBirthDate;

// ===============================
// Calculate Button
// ===============================

calculateBtn.addEventListener("click", function () {

    if (birthDate.value === "") {
        alert("Please select your birth date.");
        return;
    }

    let birth = new Date(birthDate.value);

    if (birthTime.value !== "") {

        const time = birthTime.value.split(":");

        birth.setHours(Number(time[0]));
        birth.setMinutes(Number(time[1]));
        birth.setSeconds(0);

    }

    savedBirthDate = birth;

    calculateAge();

    if (timer) clearInterval(timer);

    timer = setInterval(calculateAge, 1000);

});

// ===============================
// Main Function
// ===============================

function calculateAge() {

    const now = new Date();

    let year = now.getFullYear() - savedBirthDate.getFullYear();
    let month = now.getMonth() - savedBirthDate.getMonth();
    let day = now.getDate() - savedBirthDate.getDate();

    if (day < 0) {

        month--;

        const previousMonth = new Date(
            now.getFullYear(),
            now.getMonth(),
            0
        );

        day += previousMonth.getDate();

    }

    if (month < 0) {

        year--;
        month += 12;

    }

    years.textContent = year;
    months.textContent = month;
    days.textContent = day;

    calculateTotals(now);

    calculateBirthday(now);

    calculateBornDay();

    calculateLeapYear();

    calculateZodiac();

}

// ===============================
// Total Time Calculations
// ===============================

function calculateTotals(now) {

    const difference = now - savedBirthDate;

    const totalSeconds = Math.floor(difference / 1000);
    const totalMinutes = Math.floor(totalSeconds / 60);
    const totalHours = Math.floor(totalMinutes / 60);
    const totalDaysLived = Math.floor(totalHours / 24);
    const totalWeeksLived = Math.floor(totalDaysLived / 7);

    weeks.textContent = totalWeeksLived.toLocaleString();

    totalDays.textContent = totalDaysLived.toLocaleString();

    hours.textContent = totalHours.toLocaleString();

    minutes.textContent = totalMinutes.toLocaleString();

    seconds.textContent = totalSeconds.toLocaleString();

}

// ===============================
// Next Birthday
// ===============================

function calculateBirthday(now) {

    let nextBirthday = new Date(
        now.getFullYear(),
        savedBirthDate.getMonth(),
        savedBirthDate.getDate()
    );

    if (nextBirthday < now) {
        nextBirthday.setFullYear(now.getFullYear() + 1);
    }

    const difference = nextBirthday - now;

    const daysLeft = Math.ceil(difference / (1000 * 60 * 60 * 24));

    birthdayCountdown.textContent = daysLeft + " Days Left";

}


// ===============================
// Born Day
// ===============================

function calculateBornDay() {

    const daysNames = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];

    bornDay.textContent = daysNames[savedBirthDate.getDay()];

}


// ===============================
// Leap Year
// ===============================

function calculateLeapYear() {

    const year = savedBirthDate.getFullYear();

    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {

        leapYear.textContent = "Yes";

    } else {

        leapYear.textContent = "No";

    }

}


// ===============================
// Zodiac Sign
// ===============================

function calculateZodiac() {

    const month = savedBirthDate.getMonth() + 1;
    const day = savedBirthDate.getDate();

    let sign = "";

    if ((month == 1 && day >= 20) || (month == 2 && day <= 18))
        sign = "Aquarius ♒";

    else if ((month == 2 && day >= 19) || (month == 3 && day <= 20))
        sign = "Pisces ♓";

    else if ((month == 3 && day >= 21) || (month == 4 && day <= 19))
        sign = "Aries ♈";

    else if ((month == 4 && day >= 20) || (month == 5 && day <= 20))
        sign = "Taurus ♉";

    else if ((month == 5 && day >= 21) || (month == 6 && day <= 20))
        sign = "Gemini ♊";

    else if ((month == 6 && day >= 21) || (month == 7 && day <= 22))
        sign = "Cancer ♋";

    else if ((month == 7 && day >= 23) || (month == 8 && day <= 22))
        sign = "Leo ♌";

    else if ((month == 8 && day >= 23) || (month == 9 && day <= 22))
        sign = "Virgo ♍";

    else if ((month == 9 && day >= 23) || (month == 10 && day <= 22))
        sign = "Libra ♎";

    else if ((month == 10 && day >= 23) || (month == 11 && day <= 21))
        sign = "Scorpio ♏";

    else if ((month == 11 && day >= 22) || (month == 12 && day <= 21))
        sign = "Sagittarius ♐";

    else
        sign = "Capricorn ♑";

    zodiac.textContent = sign;

}