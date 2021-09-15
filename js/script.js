

console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")

console.log("Ejercicio 1");
var a1 =38, a2 =24, a3=-1;

var f1 = (9 * a1 / 5) + 32
var f2 = (9 * a2 / 5) + 32
var f3 = (9 * a3 / 5) + 32

document.getElementById("fahr_1").innerHTML = f1.toFixed(2);
document.getElementById("fahr_2").innerHTML = f2.toFixed(2);
document.getElementById("fahr_3").innerHTML = f3.toFixed(2);

console.log(f1+ " " + f2 +" "+ f3)

console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
console.log("Ejercicio 2");
var classification = [ "John Hill" , "Mary Jane", "Gary Vee", "Paricia Mills", "Helen Hall", "Paul Green" ]; 
var a1 = classification[5] ,a2 =classification[4], a3 = classification[3];
var b1 = a1.toString(),b2 = a2.toString(),b3 = a3.toString();
var printe = b1 +" "+ b2+" " + b3
document.getElementById("best_students").innerHTML = printe.fixed();
console.log(printe)


console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
console.log("Ejercicio 3");

var course = {
    'title': "Learn to Code in Python 3",
    'categories': ['programming', 'technology', 'python'],
    '5_stars_reviews': 420,
    '4_stars_reviews': 80,
    '3_stars_reviews': 33,
    '2_stars_reviews': 20,
    '1_stars_reviews': 4
}

var a1= course['title'], a2= course['categories'][0] ;
var a3 = parseInt(course['5_stars_reviews']) + parseInt(course['4_stars_reviews']) + parseInt(course['3_stars_reviews']) +parseInt(course['2_stars_reviews']) +parseInt(course['1_stars_reviews']) ;
var a4 = parseInt(course['5_stars_reviews']) * 100 / a3;


var a4 = parseInt(a4);
var a5 = a4 + " %";



document.getElementById("course_title").innerHTML = a1.fixed();
document.getElementById("main_category").innerHTML = a2.fixed();
document.getElementById("reviews_5_stars").innerHTML = a5.fixed();

console.log(course['title'])
console.log(course['categories'][0] );
console.log(a5);


console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
console.log("Ejercicio 4");

var shoppingList = ["Milk", "Butter", "Juice", "Bread", "Beer", "Rice", "Potatoes", "Chocolate"]; 
var a1 = shoppingList.pop();

shoppingList.unshift(a1);
shoppingList.push('Queso', 'Huevos');

console.log(shoppingList);