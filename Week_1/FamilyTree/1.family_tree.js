//Week 1 Day 2: Create family tree using objects.

//Define functions
function childOf (){
    return this.parents.map(parent=>parent.name).join(" & ")||"Parents unknown"
}

function siblingOf (){
    return this.siblings.map(sibling=>sibling.name).join(" & ")||"Siblings unknown"
}

function partnerOf (){
    return this.partner.map(partner=>partner.name).join(" & ")||"Relationship status unknown"
}


function parentOf (){
    return this.children.map(child=>child.name).join(" & ")||"Children unknown"
}


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

//Add the functions as key's to each of the people objects. NB: when passing a function as a value, e.g. childOf:childOf can be shortened to just a key instead of using the full key:value pair
//as long as the key:value words match. However when looping, specify the function.
for (i=0;i<famTree.length;i++){
    famTree[i].childOf = childOf
    famTree[i].parentOf = parentOf
    famTree[i].siblingOf = siblingOf
    famTree[i].partnerOf = partnerOf
}


//Display in the console
console.log(sarah.siblingOf())
console.log(gen2[2].name)
console.log(sarah.partnerOf())
