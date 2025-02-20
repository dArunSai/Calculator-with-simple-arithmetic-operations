

function addToDisplay(value) {
document.getElementById("display").value+= value;
console.log(a);
      }

      function clearDisplay() {
        document.getElementById("display").value = "";
      }

      function calculate() {
        var expression = document.getElementById("display").value;
        var result = eval(expression);
        document.getElementById("display").value = result;
      }
