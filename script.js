function calculate() {
  let input = document.getElementById("display").value;

  if (input.includes("-")) {
    document.getElementById("display").value = "Ako parin ba?";
  } else if (input.includes("*")) {
    document.getElementById("display").value = "Miss na kasi kita";
  } else if (input.includes("/")) {
    document.getElementById("display").value = "I miss you";
  } else {
    try {
      let result = eval(input);
      document.getElementById("display").value = result;
    } catch (error) {
      document.getElementById("display").value = "Hello Again";
    }
  }
}
