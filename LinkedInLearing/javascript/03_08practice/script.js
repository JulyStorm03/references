const house = {
    base: "400 sqft",
    stories: 2,
    basement: true,
    doorOpen: {
        open: true,
        closed: false,
    },




    doorStatus: function(openedDoor, closedDoor){
        this.doorOpen.open = openedDoor;
        this.doorOpen.closed = closedDoor;
    }
};

//console.log(house.base);

console.log(doorStatus(openedDoor))




const methodsAndFunctions = {
    functionExample: function(a,b){
        this.functionExample.a = "parameterA";
        this.this.functionExample.b = "pramaertB";
    },
}


functionExample(a, b);

property.expresion(); //access property then calls a function(expression(); being the funciton in this example and property. being the property)

const functionRepresentative = property.functionExample;