var op = null;
var value1 = 0;
var value2 = 2;
function getOperation(){
    op = prompt('Select your opation:\n 1 - Addition (+)\n 2 - Subtraction(-)\n' + 
    '3 - Multiplication(*)\n4 - Division(/)\n5 -  Exponentiation(**)');   
}

function validOp() {
    if (isNaN(op)) {
        console.log('Invalid option!!\n please digit a number');
        op = null;
    } else {
        if (op >= 1 && op <= 5) {
            console.log('Option is valid!');
        }
        else {
            console.log('Please select a option between 1 and 5');
        }
    }
}

function getValues(){
    value1 = Number(prompt('Please digit first value:'));
    if(!isNaN(value1)){
        value2 = Number(prompt('Please digit second value:'));
        if(!isNaN(value2)){
            console.log('Values Ok');
        }else{
            console.log('Invalid value!!\n please digit a number');
            value1 = 0;    
            value2 = 0;
        }
    }else{
        console.log('Invalid value!!\n please digit a number');
        value1 = 0;
    }
}

function calculate(){
    let message = '';
    let result;
    switch(op){
        case '1':
            result = value1 + value2;
            message = 'The sum of values ' +  value1 + ' and ' + value2 + ' result ' + result + '.' 
            console.log(message);
            alert(message);
            break;
        case '2':
            result = value1 - value2;
            message = 'The subtraction of values ' +  value1 + ' and ' + value2 + ' result ' + result + '.' 
            console.log(message);
            alert(message);
            break;
        case '3':
            result = value1 * value2;
            message = 'The multiplication of values ' +  value1 + ' and ' + value2 + ' result ' + result + '.' 
            console.log(message);
            alert(message);
            break;
        case '4':
            result = value1 / value2;
            message = 'The division of values ' +  value1 + ' and ' + value2 + ' result ' + result + '.' 
            console.log(message);
            alert(message);
            break;
        case '5':
            result = value1 ** value2;
            message = 'The exponentiation of values ' +  value1 + ' and ' + value2 + ' result ' + result + '.' 
            console.log(message);
            alert(message);
            break;
        default:
            console.log('Inavlid operacion!!');
            break;
    }
    startNew();
}

function calculator(){
    getOperation();
    if(op!=null){
        getValues();
        if(value1>0 || value2>0){
            calculate();
        }
    }
}

calculator();

function startNew() {
    let res = prompt('Would you like to perform a new operation?\n Y = Yes or N = No'); 
    res = res.toUpperCase();   
    if (res == 'Y') {
        console.log(res);
        calculator();
    }else if(res == 'N'){
        alert('Good bye, thanks');
    }else{
        alert('invalid option! Good bye');
    }
}

