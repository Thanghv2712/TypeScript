"use strict";
// exports.__esModule = true;
// let username: string ;
// username = "thangdeptrai";
// username =  '123';
// console.log(username)
var myNumber = 123; //kiểu số
var isAdmin = true; //kiểu true , false
var arrNumber = [1, 2, 3]; //kiểu mảng chứa số
var arrString = ["ông thắng", "ông trung"]; // kiểu mảng chứa chuỗi
function sum(a, b) {
    var result = a + b;
    console.log(result);
    return result;
}
sum(10, 20);
var project = {
    id: 1,
    name: "ong thang",
    image: "abc",
    link: "đây là link",
    status: true
};
var projetcList = function (props) {
    return props;
};
projetcList(project);
var ListProjects = [
    {
        id: 1,
        name: "ông thắng"
    },
    {
        id: 2,
        name: "ông Trung"
    }
];
for (var _i = 0, ListProjects_1 = ListProjects; _i < ListProjects_1.length; _i++) {
    var ob = ListProjects_1[_i];
    console.log("ob id nè", ob.id),
        console.log("ob name nè", ob.name);
}
