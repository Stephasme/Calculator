function add(a,b){
  return (a + b);
}

function substract(a,b){
  return (a - b);
}

function multiply(a,b){
  return (a * b);
}

function divide(a,b){
  if (b === 0) {
    alert("Nope!! Can't do that");
  }
  else{
    return (a/b);
  }
}

function operate(operator, a, b){
  switch (operator){
    case '+':
      result = add(a,b);
      console.log(result);
      break;
    case '-':
      result = substract(a,b);
      console.log(result);
      break;
    case 'x':
      result = multiply(a,b);
      console.log(result);
      break;
    case '/':
      result = divide(a,b);
      console.log(result);
  }
  return result;
}

function calculate(){

  let operator = '';
  let input ='';
  let a ='';
  let b ='';

  const buttons = document.querySelectorAll("button");
  buttons.forEach((button)=>{
    button.addEventListener('click',()=>{
      let displayValue = button.value;
      let screen = document.getElementById('screen');

      if (displayValue === "+" ||displayValue === "-"
          || displayValue === "x" ||displayValue === "/" ){
            operator = displayValue;
            a = input;
            input = "";
          }
      else if (displayValue === "."){
        if (input.includes(".")){
        }
        else{
          input += displayValue;
        }
      }

      else if (displayValue === ""){
        input = input.slice(0,-1);
        console.log(input);
      }
      else if (displayValue === "clear") {
        operator = "";
        input = "";
        a = "";
        b = "";
        screen.textContent = "";
      }

      else if (displayValue === "="){
        b = input;
        if (a === "" || operator === "") {
          alert('Not working');
        } else {
          input = operate(operator, parseFloat(a), parseFloat(b)).toFixed(2);
          screen.textContent = input;
        }
      }
      else {
        input += displayValue;
      }
      screen.textContent = input;
      console.log(input);
    });
  });
}

calculate();
