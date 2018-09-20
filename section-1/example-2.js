let sentence = "this is a  , list : oranges , apples , lemons , limes , cherries .";
let start = sentence.indexOf(':');
let end = sentence.indexOf('.' , start + 1); // start + 1 在位置start之后去寻找 end
let liststr = sentence.substring(start + 1 , end);
let list = liststr.split(',');
console.log(start);
console.log(end);
console.log(liststr);
console.log(list);
//消除空格
list.forEach(function (element , index , array){
    array[index] = element.trim();
});
//还有另一种方法来消除空格（使用正则表达式）

//let list = liststr.split(/\s*,\s*/);

console.log(list);