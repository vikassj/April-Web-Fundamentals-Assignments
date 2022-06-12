var list = ["geek", "geekster", "geeky"];
// check if geekster is present in array
function check(list){
for (let i = 0; i < list.length; i++) {
if (list[i] == "geekster") {
console.log(true + ' geekster is present');
}
}
// finding the index of geekster
let indexOfGeekster = list.indexOf("geekster");
console.log(indexOfGeekster + " is the index of 'geekster'");

// removal of 'geekster'
if (indexOfGeekster > -1) {
    list.splice(indexOfGeekster, 1)
}
console.log(list);
}
check(list);