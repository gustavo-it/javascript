const h1 = document.querySelector("#inform-time");
const date = new Date();
const day = [
     
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "friday",  "Saturday", 
];

const monthString = [
    "January", "February", "April", "May",
    "June", "July", "August", "September",
    "October", "November", "December" 
]

const getDayWeek = date => {
    const dayWeek = date.getDay();

    switch (dayWeek) {
        case 0:
            return day[0];
        case 1:
            return day[1];
        case 2:
            return day[2];
        case 3:
            return day[3];
        case 4:
            return day[4];
        case 5:
            return day[5];
        case 6:
            return day[6];
    };
    
};

const dayWeek = getDayWeek(date);

const getMonth = date => {
    const month = date.getMonth();

    switch (month) {
        case 0:
            return monthString[0];
        case 1:
            return monthString[1];
        case 2:
            return monthString[2];
        case 3:
            return monthString[3];
        case 4:
            return monthString[4];
        case 5:
            return monthString[5];
        case 6:
            return monthString[6];
        case 7:
            return monthString[7];
        case 8:
            return monthString[8];
        case 9:
            return monthString[9];
        case 10:
            return monthString[10];
        case 11:
            return monthString[11];
    };
};

const monthActual = getMonth(date);

const insertTextH1 = (day, month, date) => {
    const dayMonth = date.getDate();
    const year = date.getFullYear();
    const hour = date.getHours();
    const minutes = date.getMinutes();
    const text = `${day} to ${dayMonth} ${month} of ${year} ${hour}:${minutes}`;

    return h1.innerText = text;
};

insertTextH1(dayWeek, monthActual, date);