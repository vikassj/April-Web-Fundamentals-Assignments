let n = parseInt(prompt("enter the term"))
// let n=5;
let num= 1; count=0;
while(count<n){
    num = num+1;
    for(i=2;i<=num;i++){
        if(num%i == 0){
            break;
        }
    }
    if(i==num){
        count = count+1;
    }
}
console.log(num)