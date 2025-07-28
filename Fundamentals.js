function helloWorld() {
  "use strict";
    console.log("Hello");
    console.log("World");

}

function variable() {
  let name,admin;   // declaration through 'var' or 'let' is most of same...
  name = "john";
  admin = name;

  console.log(admin);

  const surname = "Kapopara";
  //surname = "Radadiya";   // can not change th value for cont variable

  const birthday = '18.04.1982'; // make birthday uppercase?
  const AGE = someCode(birthday); // make age uppercase?

  console.log(AGE);
  

  function someCode(bday){
    const [day, month, year] = bday.split('.'); // split "18.04.1982"
    const birthDate = new Date(`${year}-${month}-${day}`);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();

    // Adjust if birthday hasn't occurred yet this year
    const hasBirthdayPassed =
      today.getMonth() > birthDate.getMonth() ||
      (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());

    if (!hasBirthdayPassed) {
      age--;
    }

    return age;
  }
}

function dataTypes() {

  console.log(21.234);  //number
  console.log(7467289020234); // BigInt
  console.log("Jenish");  //String
  console.log(4>2); // Boolean
  
  
  
  let name = "JK";

  console.log( `hello ${1}` ); 
  console.log( `hello ${"name"}` ); 
  console.log( `hello ${name}` );
}

function promptAlert() {

  let age = prompt('How old are you?', 100);
  console.log(`You are ${age} years old!`);

  let isBoss = confirm("Are you the boss?");
  console.log( isBoss );
  
}

function typeConversion() {
    
  let value = true;
  console.log(typeof value); // boolean

  value = String(value); // now value is a string "true"
  console.log(typeof value);


  let str = "123";
  console.log(typeof str); // string

  let num = Number(str); // becomes a number 123
  console.log(typeof num);


  console.log( Boolean(1) ); // true
  console.log( Boolean(0) ); // false

  console.log( Boolean("hello") ); // true
  console.log( Boolean("") );
}

function operatorMath(){

  // Addition +,
  // Subtraction -,
  // Multiplication *,
  // Division /,
  // Remainder %,
  // Exponentiation **

  let x = 1, y = 3;
  console.log( y - x ); // 2, binary minus subtracts values

  x = -x;
  console.log( x ); // -1, unary negation was applied

  console.log(5 ** 2); //square of 5
  console.log(5 % 2); // reminder of 5 divide by 2

  // STRING CONCATENTION
  console.log("my" + "string");  //mystring
  console.log('3' + 1 + 1); // 31
  console.log(1 + + 1 + '3')  //4


  //ASSIGNMENTS
  console.log(2 * 2 + 1);

  let a = 1;
  let b = 2;
  let c = 3 - (a = b + 1);

  console.log(a);
  console.log(c);


  //CHAINING 
  let p, q, r;
  p = q = r = 2 + 2;

  console.log(p);
  console.log(q);
  console.log(r);
  

  // INCREMENT-DECREMENT
  let counter = 5;
  counter++;        // works the same as counter = counter + 1, but is shorter
  console.log( counter ); // 6

  let counter2 = 10;
  counter2--;        // works the same as counter = counter - 1, but is shorter
  console.log( counter2 ); // 9


  //COMMA
  let s = (2 + 2, 10 + 23);
  console.log( s ); // 33 (the result of 10 + 23) 
}

function comparison(){
  
  //BOOLEAN
  console.log( 2 > 1 );  // true (correct)
  console.log( 2 == 1 ); // false (wrong)
  console.log( 2 != 1 ); // true (correct)


  //STRING
  console.log( 'Z' > 'A' ); // true
  console.log( 'Glow' > 'Glee' ); // true
  console.log( 'Bee' > 'Be' ); // true


  //DIFFERENT TYPES
  console.log( '2' > 1 ); // true, string '2' becomes a number 2
  console.log( '01' == 1 ); // true, string '01' becomes a number 1


  //STRICT EQUALITY
  console.log( 0 === false ); // false, because the types are different

  console.log( null === undefined ); // false
  console.log( null == undefined ); // true

}

function conditionalBranches(){

  //IF-ELSE
  let year = prompt('In which year new 2000 rupee\'s notes were published?', '');

  if (year == 2018) {
    alert( 'You guessed it right!' );
  } else {
    alert( 'How can you be so wrong?' ); // any value except 2018
  }


  //ELSE-IF
  let time = prompt('In which year was the ECMAScript-2015 specification published?', '');

  if (time < 2015) {
    alert( 'Too early...' );
  } else if (time > 2015) {
    alert( 'Too late' );
  } else {
    alert( 'Exactly!' );
  }  


  // Conditional Operator '?'

  let age = prompt('age?', 18);

  let message = (age < 3) ? 'Hi, baby!' :
    (age < 18) ? 'Hello!' :
    (age < 100) ? 'Greetings!' :
    'What an unusual age!';

  alert( message );


  //TRUE - FALSE

  if (0) { // 0 is falsy
  // your code...
  }

  if (1) { // 1 is truthy
  // ypur code...
  }
}

function logicalOperator(){

  // OR - '||'

    console.log( true || true );   // true
    console.log( false || true );  // true
    console.log( true || false );  // true
    console.log( false || false ); // false

    let hour = 9;
    if (hour < 10 || hour > 18) {
      alert( 'The office is closed.' );
    }

    /*
    -->Evaluates operands from left to right.
    -->For each operand, converts it to boolean. If the result is true, stops and returns the original value of that operand.
    -->If all operands have been evaluated (i.e. all were false), returns the last operand.
    */
    alert( null || 0 || 1 ); // 1 (the first truthy value)
    alert( undefined || null || 0 ); // 0 (all falsy, returns the last value)



  //AND - '&&'

    console.log( true && true );   // true
    console.log( false && true );  // false
    console.log( true && false );  // false
    console.log( false && false ); // false


    let hours = 12;
    let minute = 30;

    if (hours == 12 && minute == 30) {
      alert( 'The time is 12:30' );
    }

    /* 
    -->Evaluates operands from left to right.
    -->For each operand, converts it to a boolean. If the result is false, stops and returns the original value of that operand.
    -->If all operands have been evaluated (i.e. all were truthy), returns the last operand.
    */
    alert( 1 && 2 && null && 3 ); // null
    alert( 1 && 2 && 3 ); // 3, the last one


  // NOT - '!'

    alert( !true ); // false
    alert( !0 ); // true

}

function nullishCoalescing(){

  //Nullish coalescing operator - '??'
   
    let firstName = null;
    let lastName = null;
    let nickName = "Supercoder";
    console.log(firstName ?? lastName ?? nickName ?? "Anonymous");


    let height = null;
    let width = null;

    // important: use parentheses
    let area = (height ?? 100) * (width ?? 50);

    console.log(area); // 5000
}

function loops(){

  // WHILE Loop
    console.log("While Loop");
    let i = 3;
    while (i) { // when i becomes 0, the condition becomes falsy, and the loop stops
      console.log( i );
      i--;
    }

  //Do-WHILE Loop
     console.log("Do-While Loop");
    let j = 0;
    do {
      console.log( j );
      j++;
    } while (j < 3);

  //FOR Loop
    console.log("For Loop ");
    for (let i = 0; i < 3; i++) { // shows 0, then 1, then 2
      console.log(i);
    }

  //BREAK & CONTINUE - Statments

    console.log("Break Statment");
    let sum = 0;
    while (true) {
      let value = +prompt("Enter a number", '');
      if (!value) break; // (*)
      sum += value;
    }
    console.log( 'Sum: ' + sum );

    console.log("Continue Statment");
    for (let i = 0; i < 10; i++) {
      // if true, skip the remaining part of the body
      if (i % 2 == 0) continue;

      console.log(i); // 1, then 3, 5, 7, 9
    }

  
}

function switchStatment(){

  let a = 2 + 2;
  switch (a) {
    case 3:
      console.log( 'Too small' );
      break;
    case 4:
      console.log( 'Exactly!' );
      break;
    case 5:
    case 6:            //Group of two cases
      console.log( 'Too big' );
      break;
    default:
      console.log( "I don't know such values" );
  }


  // If we don't use break statment all case os running which is define under true case
  let b= 2 + 2;
  switch (b) {
    case 3:
      alert( 'Too small' );
    case 4:
      alert( 'Exactly!' );
    case 5:
      alert( 'Too big' );
    default:
      alert( "I don't know such values" );
  }


  //Type Matters
    let arg = prompt("Enter a value?");
    switch (arg) {
      case '0':
      case '1':
        alert( 'One or zero' );
        break;

      case '2':
        alert( 'Two' );
        break;

      case 3:                       // This case doesn't execute because it has an integer value and prompt gives a String value
        alert( 'Never executes!' );
        break;
      default:
        alert( 'An unknown value' );
    }
}

function arrowFunction(){
  
  let age = prompt("What is your age?", 18);
  let welcome = (age < 18) ?  () => alert('Hello!') :  () => alert("Greetings!");

  welcome();
}