let num = 20;
   if (num <= 70) {
    console.log('ok');
    for (let i = 0; i <= 5; i++) {
    console.log('points:2');
    }
}


//licence validity depends on points being less than 12
function driverLicense (points) {
    if (points > 12) {
        return 'License Suspended';
    }
    else {
        for (let i = 0; i < 5; i++)
            console.log('points:2');
     return 'valid license';
    }
}
