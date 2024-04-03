// Get objects from DOM
const userInput = document.getElementById("user-input");
const resultMsg = document.getElementById("results-div");
const clearBtn = document.getElementById("clear-btn");
const checkBtn = document.getElementById("check-btn");

// Establish regex variables
// 1 555-555-5555
const validNumberRegex1 = /^1\s\d{3}-\d{3}-\d{4}$/;

// 1 (555) 555-5555
const validNumberRegex2 = /^1\s\(\d{3}\)\s\d{3}-\d{4}/;

// 5555555555
const validNumberRegex3 = /^\d{10}$/;

// 555-555-5555
const validNumberRegex4 = /^\d{3}-\d{3}-\d{4}$/;

// (555)555-5555
const validNumberRegex5 = /^\(\d{3}\)\d{3}-\d{4}$/;

// 1(555)555-5555
const validNumberRegex6 = /^1\(\d{3}\)\d{3}-\d{4}$/;

// 1 555 555 5555
const validNumberRegex7 = /^1\s\d{3}\s\d{3}\s\d{4}$/;

// Regex array
const regexList = [validNumberRegex1, validNumberRegex2, validNumberRegex3, validNumberRegex4, validNumberRegex5, validNumberRegex6, validNumberRegex7];

// Check if input fits an American telephone number
const isMatch = (regex) => regexList.some((regex) => regex.test(userInput.value));

// Button functionality

// check button
checkBtn.addEventListener("click", () => {
 if (userInput.value === "") {
    alert("Please provide a phone number");
    return
  } 

  resultMsg.textContent = isMatch(userInput.value)
    ? resultMsg.innerText = `Valid US number: ${userInput.value}`
    : resultMsg.innerText = `Invalid US number: ${userInput.value}`;
});

//enter
userInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    resultMsg.textContent = isMatch(userInput.value)
    ? resultMsg.innerText = `Valid US number: ${userInput.value}`
    : resultMsg.innerText = `Invalid US number: ${userInput.value}`;
  }
});


//clear button
function clearResults() {
  resultMsg.textContent = "";
}
  
clearBtn.addEventListener("click", clearResults);
