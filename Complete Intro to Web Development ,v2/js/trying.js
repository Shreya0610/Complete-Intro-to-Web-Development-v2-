const firstname = "Shreya";
const lastname = "Sharma";

//Concating of string using +
const fullname = firstname + lastname;
console.log(fullname);

//making a sentence using quotes
const sentence = "Hello " + firstname + " " + lastname + " !! How are you!?";
console.log(sentence);

const sen = `Hello ${firstname} ${lastname}! How are you!?`;
console.log(sen);

//function example using template
const HomeCity = "Jodhpur";
const HomeState = "Rajasthan";
const HomeCountry = "India";

function MyHome(city, state, country) {
  console.log(`You are from ${city}, ${state}, ${country}.`);
}
MyHome(HomeCity, HomeState, HomeCountry);

//loops
let familyMembers = 0;
while (familyMembers < 10) {
  familyMembers += 1;
}
console.log("You have " + familyMembers + " family members.");

//cohersion a small example(if else)
if (familyMembers === "6") {
  console.log("Awesome family");
}else if(familyMembers <= 6){
  console.log("Small Family!!");
} else {
  console.log("Pretty large family!!");
}

//functions creation and use
function totalDays(month) {
  return month * 4 * 7;
}
console.log("Total working days are " + totalDays(4));

//objects
const Bio = {
 userName : "Shreya Sharma",
 userAddress : {
   street: "Pratap Nagar",
   apartmentNo : "K-109"
 },
 userCity : "Jodhpur",
 userState : "Rajasthan"
};
console.log(Bio);
console.log(Bio.userAddress.apartmentNo);

//arrays
const weekDays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
];
console.log(weekDays);
console.log("Favourite Day " +weekDays[6]);
console.log(weekDays.join(" - "));

//Printing of array using function 
weekDays.forEach(function(day){
  console.log(day.toUpperCase());
});
//We can print array using loop too(already know)

