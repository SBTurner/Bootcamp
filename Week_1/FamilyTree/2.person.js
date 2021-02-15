//Create constant variables for the various people
const sarah = {name: "Sarah", age: 23, gender: "F", parents: [], children:[], siblings:[], partner:[]};
const matthew = {name: "Matthew", age: 21, gender: "M", parents: [], children:[], siblings:[], partner:[]};
const david = {name:"David", age: 19, gender: "M", parents: [], children:[], siblings:[], partner:[]};
const neil = {name:"Neil", age: 51, gender: "M", parents: [], children:[], siblings:[], partner:[]} ;
const sharon = {name:"Sharon", age: 49, gender: "F", parents: [], children:[], siblings:[], partner:[]};
const lauren = {name:"Lauren", age: 21, gender: "F", parents: [], children:[], siblings:[], partner:[]};

//Define relationships
sarah.siblings = [matthew, david];
matthew.siblings = [sarah, david];
david.siblings = [sarah, matthew];
sarah.parents = [neil,sharon];
matthew.parents = [neil,sharon];
david.parents = [neil,sharon];
sharon.children = [sarah, matthew, david];
neil.children = [sarah, matthew, david];
sharon.partner = [neil]; 
neil.partner = [sharon];
matthew.partner = [lauren];
lauren.partner = [matthew];

//Group into generations
const gen1 = [neil, sharon]
const gen2 = [sarah, matthew, david, lauren]

//Group all into family tree
const famTree =[neil,sharon,sarah,matthew,david,lauren]

module.exports = famTree

