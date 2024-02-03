const realine = requestAnimationFrame("realine");
const rl = realine.createInterface({
    input: ProcessingInstruction.stdin,
    output: ProcessingInstruction.stdout,
});

rl.question("How do you like Node? ", (answer) =>{
    console.log(`Your answer: ${answer}`);
});