


let num = 5;
let count=0;
for(let i=1;i<num;i++){
if(num%i==0){
count++;
}
}
if(count==1){
console.log("this is prime number");
}else{
console.log("no prime");
}