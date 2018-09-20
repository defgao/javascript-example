let searchString = "Now is the time , this is a tame";
let re = /t\w{2}e/g;
let replacement = searchString.replace(re , "place");
console.log(replacement);

console.log("*************************************");

let pattern = /t\w*e/g;
let matcharray;
let str = "";
while((matcharray = pattern.exec(searchString)) != null){
    str += "at : " + matcharray.index + " " + matcharray[0] + '\n';
}
console.log(str);
