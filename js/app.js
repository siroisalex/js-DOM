/*Use the Document Object Model (DOM) to complete the following exercises below:*/

/*1. Taylor Swift

Find the div with the id of "name1" and replace the n/a with the following:

Tay-Tay*/

var getName = document.getElementById("name1");
console.log(getName);
getName.innerHTML = "Taylor Swift";

/*2. DJ Khaled

Find the div with the id of "position2" and replace the n/a with the following: 

Project Manager*/

var replaceName = document.getElementById("position2");
console.log(replaceName);
replaceName.innerHTML = "Project Manager";

/*3. Piko Taro

Find the div with the id of "alias3" and replace the n/a with the following:

Concatenation*/

var replaceAlias = document.getElementById("alias3");
replaceAlias.innerHTML = "Concatenation";


/*4. Prince

Find the div with the class name of "profile" and replace the n/a with a verse from your favorite Prince song.*/

var replaceVerse = document.getElementsByClassName("profile");
console.log(replaceVerse[0]);
replaceVerse[0].innerHTML = "erotic city come alive";

/*5. Bruce Lee

Find the div with the class name of "profile" and replace the n/a with a quote from the legend himself.*/

var replacePerson = document.getElementsByClassName("profile");
console.log(replacePerson);
replacePerson[1].innerHTML = "balance your chi";

/*6. Samuel L Jackson

Find the div with the class name of "alias" and replace the n/a with your favorite character that Sammy portrayed.*/

var replaceCharacter = document.getElementsByClassName("alias");
console.log(replaceCharacter);
replaceCharacter[2].innerHTML = "Star of Snakes on A Plane";


/*7. Peter Griffin

Create a div element and give it an id of "name7". Inside this div element, give it the contents of "Peter Griffin".

Append this div element to the nameParent div*/

var newPerson = document.createElement("div");
newPerson.id = "name7";
newPerson.innerHTML = "Peter Griffin";
nameParent.appendChild(newPerson);

 
/*8. Tim Duncan

Create a div element give it an id of "alias8". Inside this div element, give it the contents of "Old Man Riverwalk".

Append this div element to the aliasParent div.*/

var addAlias = document.createElement("div");
addAlias.id = "alias8";
addAlias.innerHTML = "Old Man Riverwalk";
aliasParent.appendChild(addAlias);

//Final Boss
/*9. Create your own profile.*/

var imgBox = document.getElementsByTagName("img");
console.log(imgBox);
imgBox[8].src = "http://cdn.akc.org/Marketplace/Breeds/Great_Dane_SERP.jpg";

var jewelzCupcake = document.getElementsByClassName("block3 col-sm-4");
console.log(jewelzCupcake);
var addName = document.createElement("div");
console.log(addName);
addName.id = "name9";
addName.innerHTML = "TEXAS";
jewelzCupcake[2].appendChild(addName);











