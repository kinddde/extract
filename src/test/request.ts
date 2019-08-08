import jsonPathFun from "../compile/jsonPath";

let str = jsonPathFun({ data: 1 }, "$..data");

console.log(str);
