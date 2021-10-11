// Write your solution here!

let cats=["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name) {
    cats.push(name);
    console.log (cats);   
};


function destructivelyPrependCat(name) {
    cats.unshift(name);
    console.log (cats);   
};


function destructivelyRemoveLastCat() {
    cats.pop();
    console.log (cats);   
};


function destructivelyRemoveFirstCat() {
    cats.shift();
    console.log (cats);   
};


function appendCat(name) {
return [...cats,name]
     
};


function prependCat(name) {
   return  [name,...cats]
      
};


function removeLastCat() {
    return cats.slice(0,-1);
   
};


function removeFirstCat() {
    return cats.slice(1);
}