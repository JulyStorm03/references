const cat = {    //cat is the object
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

console.log(cat[query]);
console.log(cat[query2])

