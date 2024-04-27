/* 
Between 0 - 11 -> Good morning
Between 12 - 17 -> Good afternoon
Between 18 - 23 -> Good night
*/

const hour = 19;

if (hour >= 0 && hour <= 11) {
    console.log("Good morning!!");
} else if (hour >= 12 && hour <= 17) {
    console.log("Good afternoon!!");
} else if (hour >= 18 && hour <= 23) {
    console.log("Good night!!");
} else {
    console.log(":)");
}
