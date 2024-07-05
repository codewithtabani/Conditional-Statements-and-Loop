
let firstNumber = +prompt('Enter your first number')
let lastNumber = +prompt('Enter your last number')

for (i = firstNumber; i <= lastNumber ; i++){
    document.write(i,'<br>');
}

let UserName = prompt('What name you have to type continiously ?')
let userNameNumber = prompt('How many times you have to type ' + UserName) 

for (i = 0 ; i <= userNameNumber ; i++){
    document.write(UserName,'<br>');
}

let fruits = ['Mango','Orange','Peach','Banana','Grapes','Apple']
let fruitsAsking = prompt('What is your favourite fruit among these:\n Mango,Orange,Peach,Banana,Grapes,Apple')
if(fruitsAsking == fruits[0]){
    alert('Horrey!This is the season enjoy your mangoes! 🥭')
}
else if (fruitsAsking == fruits[1]){
    alert('Its season start from march till december! 🍊')
}
else if (fruitsAsking == fruits[2]) {
    alert('Its season start from may till september! 🍑')
}
else if (fruitsAsking == fruits[3]) {
    alert('Its an year-around fruit! 🍌')
}
else if (fruitsAsking == fruits[4]) {
    alert('Its season start from august till october! 🍇')
}
else if (fruitsAsking == fruits[50]) {
    alert('Its an year-around fruit! 🍎')
}else{
    alert('Please try again')
}

// let students = ['Ali','Rabada','Mudassir','Muzammil','Mustafa','Ahmed']
// console.log(students);
// students.push('Rizwan')
// console.log(students);
// students.pop()
// console.log(students);
// students.unshift('Rizwan')
// console.log(students);
// students.shift()
// console.log(students);
// console.log(students.length);


