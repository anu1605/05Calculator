
var str = "";
var number = [];
var operators = [];
var zero = "0".charCodeAt();
var negetive = false;
var counter = 0;

function insert(num){
  counter++;
  document.getElementsByName('textview')[0].value += num;
  str = document.getElementsByName('textview')[0].value ;
  }

  
  function equals(){
    var num = "";
    var lastIndex = 0;
    for(var value of str){
      if(value.charCodeAt() >= zero && value.charCodeAt() <= "9".charCodeAt() || value == "."){
         num += value;
         if(lastIndex == str.length-1 && value.charCodeAt() >= zero && value.charCodeAt() <= "9".charCodeAt())
         number.push(parseFloat(num));

      }
      else{
        if(checkInvalidString(str,value))
        return;

        if(lastIndex != 0){
          number.push(parseInt(num));
          num = "";
         if(repeatedOPerators(str,value))
         return;


         operators.push(value);
        }
        
        else 
        num += value;
      }
     lastIndex++;
    }
    
    console.log(number,operators);
    getresult();
    var result = number.pop();
    clearInput();
    document.getElementsByName('textview')[0].value = result;

  }
  
  function clean(){
    clearInput();
  }
  
  function back(){
    var input = document.getElementsByName('textview')[0];
    str = str.slice(0,-1);
    input.value = str;
  }

  function clearInput(){

    document.getElementsByName('textview')[0].value = ""
    str = "";
    number = [];       
  }
  function checkInvalidString(str,value){
    if(str.indexOf(value) == str.length-1 || str.indexOf(value) == 0 && value != '-' && value != "."){
      clearInput();
      document.getElementsByName('textview')[0].value = "Expression is Invalid";
      return true;
    }
    return false;
  }

  function repeatedOPerators(str,value){
    var nextValue = str.charAt(str.indexOf(value) + 1);
    if(nextValue != undefined && nextValue.charCodeAt() < zero){
      clearInput()  ;
      document.getElementsByName('textview')[0].value = "Expression is Invalid";
      return true;
    }
    return false;
  }

  function getresult(){
    var operator ;
    for(var i = 0; i< operators.length; i++){
      console.log(i);
      if(operators[i] == '*'){
        operator = operators.splice(i,1);
        var number1 = number.splice(i,1);
        var number2 = number.splice(i,1);
        number.splice(i+1,0,number1 * number2);
        console.log(i,operator,number1,number2);
        console.log(number);
        console.log(operators);
        i = 0;
      }
      if(operators[i] == '/'){
        operator = operators.splice(i,1);
        var number1 = number.splice(i,1);
        var number2 = number.splice(i,1);
        number.splice(i,0,number1 / number2);
        console.log(i,operator,number1,number2,number);
        console.log(number);
        console.log(operators);
        i =0;
      }
      if(operators[i] == '%'){
        operator = operators.splice(i,1);
        var number1 = number.splice(i,1);
        var number2 = number.splice(i,1);
        number.splice(i,0,number1 % number2);
        console.log(i,operator,number1,number2,number);
        console.log(number);
        console.log(operators);
        i = 0;
      }
      
    }
    console.log(number , operator)
    while(operators.length > 0){
       operator  = operators.pop();
      getMethode(operator);
    }

  }

  function getMethode(operator){
    var number1 = number.pop();
    var number2 = number.pop();


    if(operator == '+')
      number.push(number2 + number1);
    

    else if(operator == '-'){
      number.push(number2 - number1);
    }

    // else if(operator == '*')
    // number.push(number2 * number1);

    // else if(operator == '/')
    // number.push(number2 / number1);

    // else if(operator == '%')
    // number.push(number2 % number1);
  }