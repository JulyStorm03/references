//these are my notes on(in order of appearence) object, properties of objects, embeded objects(see colors), objects represented by variables, objects with bracket notation(cat[size])

//step 1: object initializer. this process is kind of like OOP encapsulation.

const cat = {    //cat is the object. 
    
    //step 2: properties
    
    colors: {   //colors is an object within the cat object. colors is therefore a property of the cat object
        head:'black and white',   //head, torso and paws are all properties of the colors object.  
        torso: 'black and brown',
        paws: 'brown and white',
    },
    size: 'small',  //size, age, limbs and cute are properties of the cat object
    age: 3,
    limbs: 4,
    cute: true,
};

var query = 'size';
var query2 = 'colors.head'

console.log(`${cat.colors.head}\n ${cat.colors.torso}\n ${cat.size}\n ${cat.cute}`); //template literal (${}) removes the curly braces in the console. They are used to embed expressions(variables, objects)
console.log(cat[size])

