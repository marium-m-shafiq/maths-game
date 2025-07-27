var result = "";
  for (let i = 1; i <= 100; i++) {
    result += i + ", ";
  }
  document.writeln(+result+slice(0, -2))