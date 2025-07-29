function objectS() {
    // let user = new Object(); -->"object constructor" syntax
    // let user = {};  -->"object literal" syntax

    // Literals

        function makeUser(name, age) {
            return {
                name, // same as name: name
                age,  // same as age: age
                // ...
            };
        }

        let user = makeUser("John", 30);
        alert(user.name); // John

        

    // Square brackets

        let users = {
            name: "John",
            age: 30
        };

        let key = prompt("What do you want to know about the user?", "");

        // access by variable
        alert( users[key] ); // John (if enter "name")



    // "in" Operator

        let details = { name: "John", age: 30 };

        console.log( "age" in details ); // true, user.age exists
        console.log( "blabla" in details ); // false, user.blabla doesn't exist


    // "For in" Loop
        
        let student = {
            name: "John",
            surname: "Smith"
        };
        student.age = 25; // add one more

        // non-integer properties are listed in the creation order
        for (let prop in student) {
            console.log( student[prop] ); // name, surname, age
        }
}

function interLinkedObject() {
    function marry(man, woman) {
    woman.husband = man;
    man.wife = woman;

    return {
        father: man,
        mother: woman
    }
    }

    let family = marry({ name: "John" }, { name: "Ann" });
}

function thisStatment() {
        
    //Simple Method

        let user = {
        name: "John",
        age: 30
        };

        user.sayHi = function() {
        alert("Hello!");
        };

        user.sayHi(); // Hello!

    // This Method

        let users = {
            name: "John",
            age: 30,

            sayHi() {
                // "this" is the "current object"
                alert(this.name);   // use of user.sayHi genrate an error
            }

        };

        users.sayHi(); // John


    /* 'This' in arrow function

        -->Arrow functions are special: they don’t have their “own” this. 
           If we reference this from such a function, it’s taken from the outer “normal” function.
    */
        
        let details = {
            firstName: "Ilya",
            sayHi() {
                let arrow = () => alert(this.firstName);
                arrow();
            }
        };

        details.sayHi(); // Ilya
    
}

function constructorExample() {

    // Constructur function

        function User(name) {
            this.name = name;
            this.isAdmin = false;
        }

        let user = new User("Jack");

        alert(user.name); // Jack
        alert(user.isAdmin); // false
    
    // Return from Constructer 

        function BigUser() {
            this.name = "John";
            return { name: "Godzilla" };  // <-- returns this object
        }

        alert( new BigUser().name ); 

        
    // Method in Constructer
        
        function UserEx(name) {
            this.name = name;

            this.sayHi = function() {
                alert( "My name is: " + this.name );
            };
        }

        let john = new UserEx("JK");

        john.sayHi();
}

function symbolS() {

    let user = { 
        name: "John"
    };

    let id = Symbol("id");
    user[id] = 1;
    console.log( user[id] );


    // Global Symbol

        let globalSymbol = Symbol.for("name");
        let localSymbol = Symbol("name");

        console.log( Symbol.keyFor(globalSymbol) ); // name, global symbol
        console.log( Symbol.keyFor(localSymbol) ); // undefined, not global

        console.log( localSymbol.description ); // name
    
}

function objectToPrimitives() {
    let user = {
    name: "John",
    money: 1000,

    [Symbol.toPrimitive](hint) {
        alert(`hint: ${hint}`);
        return hint == "string" ? `{name: "${this.name}"}` : this.money;
    }
    };

    // conversions demo:
    alert(user); // hint: string -> {name: "John"}
    alert(+user); // hint: number -> 1000
    alert(user + 500); // hint: default -> 1500
}