let userNumber = +window.prompt('Enter a number between 1 and 100');

if(userNumber > 100 || userNumber < 0) {
    window.alert('Only numbers between 1 and 100 are accepted');
}


if (userNumber >= 60 && userNumber <= 69){
    window.alert(`You received a D`);
} else if (userNumber >= 70 && userNumber <= 79){
    window.alert(`You received a C`);
}else if (userNumber >= 80 && userNumber <= 89){
    window.alert(`You received a B`);
}else if(userNumber >= 90 && userNumber <= 100){
    window.alert(`You received a A`);
}else {
    window.alert(`You received a F`);
}