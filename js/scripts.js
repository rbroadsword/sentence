$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const userInput = $("input#sentence").val();
    console.log("User Input: " + userInput);
    let wordArray = userInput.split(" ");
    console.log(wordArray);
    let newWordArray = [];
    wordArray.forEach(function(word) {
      if(word.length <= 3) {
        newWordArray.push(word);
      }

    
    });

    console.log(newWordArray);
  });
});