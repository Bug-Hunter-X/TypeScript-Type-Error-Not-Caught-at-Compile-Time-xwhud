function add(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both arguments must be numbers.');
  }
  return a + b;
}

let result = add(1, 2); // Correct

try {
  let result2 = add(1, "2"); // Runtime error is thrown
} catch (e) {
  console.error(e);
}

//Alternative solution using type guards
function isNumber(value: any): value is number {
  return typeof value === 'number';
}

function addSafe(a: any, b: any): number {
    if (isNumber(a) && isNumber(b)){
        return a + b;
    } else {
        throw new Error('Both arguments must be numbers');
    }
}
let result3 = addSafe(1,2); //Correct
try{
    let result4 = addSafe(1, "2");
} catch(e){
    console.error(e);
}