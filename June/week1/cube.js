let num=parseInt(prompt('enter the number'));
// let num=5;
function cube(num){
    return num*num*num;
}
for(let i=1; i<=num; i++){
    console.log(`cube of ${i} = ${cube(i)}`);
}