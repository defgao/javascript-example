let str1 = String("string 1 ");
let str2 = new String("string 2");
if(str1 === "string 1 "){
    console.log("equal -- literal");
}
if(str1 === "string 2"){
    console.log("equal -- object");
}else{
    console.log("different -- object");
}
console.log(str1);
console.log(str2);