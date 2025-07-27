// Forward Counting
document.getElementById("forwardBtn").addEventListener("click", function() {
  let result = "";
  for (let i = 1; i <= 100; i++) {
    result += i + ", ";
  }
  document.getElementById("output").innerText = result.slice(0, -2);
});

// Backward Counting
document.getElementById("backwardBtn").addEventListener("click", function() {
  let result = "";
  for (let i = 100; i >= 1; i--) {
    result += i + ", ";
  }
  document.getElementById("output").innerText = result.slice(0, -2);
});

// Multiplication Table
document.getElementById("tableBtn").addEventListener("click", function() {
  const number = parseInt(document.getElementById("tableInput").value);
  let result = "";

  if (!isNaN(number)) {
    for (let i = 1; i <= 10; i++) {
      result += number + " × " + i + " = " + (number * i) + "\n";
    }
    document.getElementById("output").innerText = result;
  } else {
    document.getElementById("output").innerText = "Please enter a valid number.";
  }
});
