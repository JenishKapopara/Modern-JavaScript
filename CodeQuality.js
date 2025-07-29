function functionPlacement() {

    // Declare the functions above the code that uses them:
        function createElement() {
            //code...
        }

        function setHandler(elem) {
            // code...
        }

        function walkAround() {
            // code...
        }

        // the code which uses them
        let elem = createElement();
        setHandler(elem);
        walkAround();



    // Code first, then function
        let abc = createElement();
        setHandler(abc);
        walkAround();

        // --- helper functions ---
        function createElement() {
            // code...
        }

        function setHandler(abc) {
            // code...
        }

        function walkAround() {
            // code...
        }
}


function transpilers() {

    let height = null;
    height = height ?? 100;    // before running the transpiler
    console.log(height);

    height = (height !== undefined && height !== null) ? height : 100;     // after running the transpiler
    console.log(height);
}


function polyFills() {

    let n =1.55;

    if (!Math.trunc) { // if no such function in js engine
        // implement it
        Math.trunc = function(n) {
            // Math.ceil and Math.floor exist even in ancient JavaScript engines
            // they are covered later in the tutorial
            return n < 0 ? Math.ceil(n) : Math.floor(n);
        };
    }
    else {
        let num = Math.trunc(n);
        console.log(num);
    }

}