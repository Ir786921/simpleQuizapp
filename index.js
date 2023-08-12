const question_cont1 = document.getElementById("question-container1");
const question_cont2 = document.getElementById("question-container2");
const question_cont3 = document.getElementById("question-container3");
const question_cont4 = document.getElementById("question-container4");
const question_cont5 = document.getElementById("question-container5");
const q1op1 = document.getElementById("Q1op1");
const q1op2 = document.getElementById("Q1op2");

const q1op3 = document.getElementById("Q1op3");

const q1op4 = document.getElementById("Q1op4");
const q2op1 = document.getElementById("Q2op1");
const q2op2 = document.getElementById("Q2op2");

const q2op3 = document.getElementById("Q2op3");

const q2op4 = document.getElementById("Q2op4");

const q3op1 = document.getElementById("Q3op1");
const q3op2 = document.getElementById("Q3op2");

const q3op3 = document.getElementById("Q3op3");

const q3op4 = document.getElementById("Q3op4");

const q4op1 = document.getElementById("Q4op1");
const q4op2 = document.getElementById("Q4op2");

const q4op3 = document.getElementById("Q4op3");

const q4op4 = document.getElementById("Q4op4");

const q5op1 = document.getElementById("Q5op1");
const q5op2 = document.getElementById("Q5op2");

const q5op3 = document.getElementById("Q5op3");

const q5op4 = document.getElementById("Q5op4");

const ans1 = "Paris";
const ans2 = "Mars";
const ans3 = "Photosynthesis";
const ans4 = "Mount Everest";
const ans5 = "liver";

let score = 0;


const container = document.querySelector("#container");
const display = document.createElement("ul");
const headingR = document.createElement("h1");

display.id = "resultcont";
display.setAttribute("hidden","true");
display.appendChild(headingR);
container.appendChild(display);

q5op3.addEventListener("click", function () {
    if (q5op3.innerText === ans5) {
      q5op3.classList.add("correct");
      score = score + 1;
    
      console.log(score);
      q5op1.setAttribute("disabled", "false");
      q5op2.setAttribute("disabled", "false");
  
      q5op3.setAttribute("disabled", "false");
  
      q5op4.setAttribute("disabled", "false");
    } else {
      q5op3.classList.add("incorrect");
      q5op1.classList.add("correct");
      q5op1.setAttribute("disabled", "false");
      q5op2.setAttribute("disabled", "false");
  
      q5op3.setAttribute("disabled", "false");
  
      q5op4.setAttribute("disabled", "false");
    }
  });


  q5op1.addEventListener("click", function () {
    if (q5op1.innerText === ans5) {
      q5op1.classList.add("correct");
      score = score + 1;
      console.log(score);
      q5op1.setAttribute("disabled", "false");
      q5op2.setAttribute("disabled", "false");
  
      q5op3.setAttribute("disabled", "false");
  
      q5op4.setAttribute("disabled", "false");
    } else {
      q5op1.classList.add("incorrect");
      q5op1.classList.add("correct");
      q5op1.setAttribute("disabled", "false");
      q5op2.setAttribute("disabled", "false");
  
      q5op3.setAttribute("disabled", "false");
  
      q5op4.setAttribute("disabled", "false");
    }
  });

  q5op2.addEventListener("click", function () {
    if (q5op2.innerText === ans5) {
      q5op2.classList.add("correct");
      score = score + 1;
      q5op1.setAttribute("disabled", "false");
      q5op2.setAttribute("disabled", "false");
  
      q5op3.setAttribute("disabled", "false");
  
      q5op4.setAttribute("disabled", "false");
    } else {
      q5op2.classList.add("incorrect");
      q5op1.classList.add("correct");
      q5op1.setAttribute("disabled", "false");
      q5op2.setAttribute("disabled", "false");
  
      q5op3.setAttribute("disabled", "false");
  
      q5op4.setAttribute("disabled", "false");
    }
  });

  q5op4.addEventListener("click", function () {
    if (q5op4.innerText === ans5) {
      q5op4.classList.add("correct");
      score = score + 1;
      q5op1.setAttribute("disabled", "false");
      q5op2.setAttribute("disabled", "false");
  
      q5op3.setAttribute("disabled", "false");
  
      q5op4.setAttribute("disabled", "false");
    } else {
      q5op4.classList.add("incorrect");
      q5op1.classList.add("correct");
      q5op1.setAttribute("disabled", "false");
      q5op2.setAttribute("disabled", "false");
  
      q5op3.setAttribute("disabled", "false");
  
      q5op4.setAttribute("disabled", "false");
    }
  });









console.log(score);








q4op1.addEventListener("click", function () {
    if (q4op1.innerText === ans4) {
      q4op1.classList.add("correct");
      score = score + 1;
      q4op1.setAttribute("disabled", "false");
      q4op2.setAttribute("disabled", "false");
  
      q4op3.setAttribute("disabled", "false");
  
      q4op4.setAttribute("disabled", "false");
    } else {
      q4op1.classList.add("incorrect");
      q4op2.classList.add("correct");
      q4op1.setAttribute("disabled", "false");
      q4op2.setAttribute("disabled", "false");
  
      q4op3.setAttribute("disabled", "false");
  
      q4op4.setAttribute("disabled", "false");
    }
  });

  q4op2.addEventListener("click", function () {
    if (q4op2.innerText === ans4) {
      q4op2.classList.add("correct");
      score = score + 1;
      q4op1.setAttribute("disabled", "false");
      q4op2.setAttribute("disabled", "false");
  
      q4op3.setAttribute("disabled", "false");
  
      q4op4.setAttribute("disabled", "false");
    } else {
      q4op2.classList.add("incorrect");
      q4op2.classList.add("correct");
      q4op1.setAttribute("disabled", "false");
      q4op2.setAttribute("disabled", "false");
  
      q4op3.setAttribute("disabled", "false");
  
      q4op4.setAttribute("disabled", "false");
    }
  });

  q4op3.addEventListener("click", function () {
    if (q4op3.innerText === ans4) {
      q4op3.classList.add("correct");
      score = score + 1;
      q4op1.setAttribute("disabled", "false");
      q4op2.setAttribute("disabled", "false");
  
      q4op3.setAttribute("disabled", "false");
  
      q4op4.setAttribute("disabled", "false");
    } else {
      q4op3.classList.add("incorrect");
      q4op2.classList.add("correct");
      q4op1.setAttribute("disabled", "false");
      q4op2.setAttribute("disabled", "false");
  
      q4op3.setAttribute("disabled", "false");
  
      q4op4.setAttribute("disabled", "false");
    }
  });

  q4op4.addEventListener("click", function () {
    if (q4op4.innerText === ans4) {
      q4op4.classList.add("correct");
      score = score + 1;
      q4op1.setAttribute("disabled", "false");
      q4op2.setAttribute("disabled", "false");
  
      q4op3.setAttribute("disabled", "false");
  
      q4op4.setAttribute("disabled", "false");
    } else {
      q4op4.classList.add("incorrect");
      q4op2.classList.add("correct");
      q4op1.setAttribute("disabled", "false");
      q4op2.setAttribute("disabled", "false");
  
      q4op3.setAttribute("disabled", "false");
  
      q4op4.setAttribute("disabled", "false");
    }
  });








q3op1.addEventListener("click", function () {
    if (q3op1.innerText === ans3) {
      q3op1.classList.add("correct");
      score = score + 1;
      q3op1.setAttribute("disabled", "false");
      q3op2.setAttribute("disabled", "false");
  
      q3op3.setAttribute("disabled", "false");
  
      q3op4.setAttribute("disabled", "false");
    } else {
      q3op1.classList.add("incorrect");
      q3op1.classList.add("correct");
      q3op1.setAttribute("disabled", "false");
      q3op2.setAttribute("disabled", "false");
  
      q3op3.setAttribute("disabled", "false");
  
      q3op4.setAttribute("disabled", "false");
    }
  });

  console.log(score);

  q3op2.addEventListener("click", function () {
    if (q3op2.innerText === ans3) {
      q3op2.classList.add("correct");
      score = score + 1;
      q3op1.setAttribute("disabled", "false");
      q3op2.setAttribute("disabled", "false");
  
      q3op3.setAttribute("disabled", "false");
  
      q3op4.setAttribute("disabled", "false");
    } else {
      q3op2.classList.add("incorrect");
      q3op1.classList.add("correct");
      q3op1.setAttribute("disabled", "false");
      q3op2.setAttribute("disabled", "false");
  
      q3op3.setAttribute("disabled", "false");
  
      q3op4.setAttribute("disabled", "false");
    }
  });

  q3op3.addEventListener("click", function () {
    if (q3op3.innerText === ans3) {
      q3op3.classList.add("correct");
      score = score + 1;
      q3op1.setAttribute("disabled", "false");
      q3op2.setAttribute("disabled", "false");
  
      q3op3.setAttribute("disabled", "false");
  
      q3op4.setAttribute("disabled", "false");
    } else {
      q3op3.classList.add("incorrect");
      q3op1.classList.add("correct");
      q3op1.setAttribute("disabled", "false");
      q3op2.setAttribute("disabled", "false");
  
      q3op3.setAttribute("disabled", "false");
  
      q3op4.setAttribute("disabled", "false");
    }
  });

  q3op4.addEventListener("click", function () {
    if (q3op4.innerText === ans3) {
      q3op4.classList.add("correct");
      score = score + 1;
      q3op1.setAttribute("disabled", "false");
      q3op2.setAttribute("disabled", "false");
  
      q3op3.setAttribute("disabled", "false");
  
      q3op4.setAttribute("disabled", "false");
    } else {
      q3op4.classList.add("incorrect");
      q3op1.classList.add("correct");
      q3op1.setAttribute("disabled", "false");
      q3op2.setAttribute("disabled", "false");
  
      q3op3.setAttribute("disabled", "false");
  
      q3op4.setAttribute("disabled", "false");
    }
  });

  q3op4.addEventListener("click", function () {
    if (q3op4.innerText === ans3) {
      q3op4.classList.add("correct");
      score = score + 1;
      q3op1.setAttribute("disabled", "false");
      q3op2.setAttribute("disabled", "false");
  
      q3op3.setAttribute("disabled", "false");
  
      q3op4.setAttribute("disabled", "false");
    } else {
      q3op4.classList.add("incorrect");
      q3op1.classList.add("correct");
      q3op1.setAttribute("disabled", "false");
      q3op2.setAttribute("disabled", "false");
  
      q3op3.setAttribute("disabled", "false");
  
      q3op4.setAttribute("disabled", "false");
    }
  });






q2op4.addEventListener("click", function () {
  if (q2op4.innerText === ans2) {
    q2op4.classList.add("correct");
    score = score + 1;
    q2op1.setAttribute("disabled", "false");
    q2op2.setAttribute("disabled", "false");

    q2op3.setAttribute("disabled", "false");

    q2op4.setAttribute("disabled", "false");
  } else {
    q2op4.classList.add("incorrect");
    q2op2.classList.add("correct");
    q2op1.setAttribute("disabled", "false");
    q2op2.setAttribute("disabled", "false");

    q2op3.setAttribute("disabled", "false");

    q2op4.setAttribute("disabled", "false");
  }
});

q2op3.addEventListener("click", function () {
  if (q2op3.innerText === ans2) {
    q2op3.classList.add("correct");
    mark = score + 1;
    q2op1.setAttribute("disabled", "false");
    q2op2.setAttribute("disabled", "false");

    q2op3.setAttribute("disabled", "false");

    q2op4.setAttribute("disabled", "false");
  } else {
    q2op3.classList.add("incorrect");
    q2op2.classList.add("correct");
    q2op1.setAttribute("disabled", "false");
    q2op2.setAttribute("disabled", "false");

    q2op3.setAttribute("disabled", "false");

    q2op4.setAttribute("disabled", "false");
  }
});

q2op2.addEventListener("click", function () {
  if (q2op2.innerText === ans2) {
    q2op2.classList.add("correct");
    score = score + 1;
    q2op1.setAttribute("disabled", "false");
    q2op2.setAttribute("disabled", "false");

    q2op3.setAttribute("disabled", "false");

    q2op4.setAttribute("disabled", "false");
  } else {
    q2op2.classList.add("incorrect");
    q2op2.classList.add("correct");
    q2op1.setAttribute("disabled", "false");
    q2op2.setAttribute("disabled", "false");

    q2op3.setAttribute("disabled", "false");

    q2op4.setAttribute("disabled", "false");
  }
});

q2op1.addEventListener("click", function () {
  if (q2op1.innerText === ans2) {
    q2op1.classList.add("correct");
    score = score + 1;
    q2op1.setAttribute("disabled", "false");
    q2op2.setAttribute("disabled", "false");

    q2op3.setAttribute("disabled", "false");

    q2op4.setAttribute("disabled", "false");
  } else {
    q2op1.classList.add("incorrect");
    q2op2.classList.add("correct");
    q2op1.setAttribute("disabled", "false");
    q2op2.setAttribute("disabled", "false");

    q2op3.setAttribute("disabled", "false");

    q2op4.setAttribute("disabled", "false");
  }
});

q1op1.addEventListener("click", function () {
  if (q1op1.innerText === ans1) {
    q1op1.classList.add("correct");
    score = score + 1;
    q1op1.setAttribute("disabled", "false");
    q1op2.setAttribute("disabled", "false");

    q1op3.setAttribute("disabled", "false");

    q1op4.setAttribute("disabled", "false");
  } else {
    q1op1.classList.add("incorrect");
    q1op3.classList.add("correct");
    q1op1.setAttribute("disabled", "false");
    q1op2.setAttribute("disabled", "false");

    q1op3.setAttribute("disabled", "false");

    q1op4.setAttribute("disabled", "false");
  }
});
console.log(score);
q1op2.addEventListener("click", function () {
  if (q1op2.innerText === ans1) {
    q1op2.classList.add("correct");
    score = score + 1;

    q1op1.setAttribute("disabled", "false");
    q1op2.setAttribute("disabled", "false");

    q1op3.setAttribute("disabled", "false");

    q1op4.setAttribute("disabled", "false");
  } else {
    q1op2.classList.add("incorrect");
    q1op3.classList.add("correct");
    q1op1.setAttribute("disabled", "false");
    q1op2.setAttribute("disabled", "false");

    q1op3.setAttribute("disabled", "false");

    q1op4.setAttribute("disabled", "false");
  }
});

q1op3.addEventListener("click", function () {
  if (q1op3.innerText === ans1) {
    q1op3.classList.add("correct");
    score = score + 1;

    q1op1.setAttribute("disabled", "false");
    q1op2.setAttribute("disabled", "false");

    q1op3.setAttribute("disabled", "false");

    q1op4.setAttribute("disabled", "false");
  } else {
    q1op3.classList.add("incorrect");
    q1op3.classList.add("correct");
    q1op1.setAttribute("disabled", "false");
    q1op2.setAttribute("disabled", "false");

    q1op3.setAttribute("disabled", "false");

    q1op4.setAttribute("disabled", "false");
  }
});

q1op4.addEventListener("click", function () {
  if (q1op4.innerText === ans1) {
    q1op4.classList.add("correct");
    score = score + 1;
    console.log(score);

    q1op1.setAttribute("disabled", "false");
    q1op2.setAttribute("disabled", "false");

    q1op3.setAttribute("disabled", "false");

    q1op4.setAttribute("disabled", "false");
  } else {
    q1op4.classList.add("incorrect");
    q1op3.classList.add("correct");
    q1op1.setAttribute("disabled", "false");
    q1op2.setAttribute("disabled", "false");

    q1op3.setAttribute("disabled", "false");

    q1op4.setAttribute("disabled", "false");
  }
});
console.log(score);

function Nextquestion() {
  question_cont1.remove();
  question_cont2.removeAttribute("hidden");
  headingR.innerHTML = score;
}
function Nextquestion2() {
  question_cont2.remove();
  question_cont3.removeAttribute("hidden");
  headingR.innerHTML = score;

}

function Nextquestion3() {
  question_cont3.remove();
  question_cont4.removeAttribute("hidden");
  headingR.innerHTML = score;

}

function Nextquestion4() {
  question_cont4.remove();
  question_cont5.removeAttribute("hidden");
  headingR.innerHTML = score;

}






display.id = "resultcont";
display.setAttribute("hidden","true");
display.appendChild(headingR);
container.appendChild(display);


function displayresult() {
    question_cont5.remove();
    display.removeAttribute("hidden");
    headingR.innerHTML = ` your score is ${score} out of 5`;

  }