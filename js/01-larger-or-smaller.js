
let prompt1 = +window.prompt('Enter a Number');
let prompt2 = +window.prompt('Enter another Number');

if(prompt1 > prompt2){
    window.alert(`${ prompt1 } is the greater number`);
} else if(prompt2 > prompt1){
    window.alert(`${ prompt2 } is the greater number`);
} else if(prompt1 === prompt2){
    window.alert(`Numbers are even`);
} else {
    window.alert('Please enter valid numbers');
}
