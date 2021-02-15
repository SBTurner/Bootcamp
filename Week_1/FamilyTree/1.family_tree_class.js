//Week 1 Day 2: Create family tree using objects and classes.

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

//create Class (begin with Capital letter)
class Person{
    constructor(name,age,gender,gen){
        this.name = name
        this.age = age
        this.gender = gender
        this.gen = gen
        this.parents = []
        this.children = []
        this.partner = []
        this.siblings = []
        this.childOf = childOf
        this.parentOf = parentOf
        this.siblingOf = siblingOf
        this.partnerOf = partnerOf
    }

}

const sarah = new Person("Sarah",23,"F",2)
const matthew = new Person("Matthew",21,"M",2)
const david = new Person("David",19,"M",2)
const neil = new Person("Neil",52,"M",1)
const sharon = new Person("Sharon",49,"F",1)
const lauren = new Person("Lauren",21,"F",2)


//Define relationships
sarah.siblings = [matthew, david]; 
matthew.siblings = [sarah, david]; 
david.siblings = [sarah, matthew];
sarah.parents ; matthew.parents ; david.parents = [neil,sharon];
sharon.children ; neil.children = [sarah, matthew, david];
sharon.partner = [neil]; neil.partner = [sharon];
matthew.partner = [lauren]; lauren.partner = [matthew];

//Group into generations
const gen1 = [neil, sharon]
const gen2 = [sarah, matthew, david, lauren]

//Group all into family tree
const famTree =[neil,sharon,sarah,matthew,david,lauren]

//Display in the console
console.log(sarah.siblingOf())
console.log(gen2[2].name)
console.log(sarah.partnerOf())
console.log(sarah)
