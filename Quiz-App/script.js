const questionData = [
  {
    question : 'What is the HTML tag under which one can write the JavaScript code? ',
    a:' <javascript>',
    b:'<scripted> ',
    c:'<script>',
    d: '<js>',
    correct: 'c'
  },   {
    question : 'Choose the correct JavaScript syntax to change the content of the following HTML code.  <p id="geek">GeeksforGeeks</p>',
    a:' document.getElement(“geek”).innerHTML=”I am a Geek”;',
    b:'document.getElementById(“geek”).innerHTML=”I am a Geek”; ',
    c:' document.getId(“geek”)=”I am a Geek”;',
    d: ' document.getElementById(“geek”).innerHTML=I am a Geek;',
    correct: 'b'
  },   {
    question : ' Which of the following is the correct syntax to display “GeeksforGeeks” in an alert box using JavaScript? ',
    a:' alertbox(“GeeksforGeeks”);',
    b:' msg(“GeeksforGeeks”);',
    c:' msgbox(“GeeksforGeeks”);',
    d: ' alert(“GeeksforGeeks”);',
    correct: 'd'
  },   {
    question : ' What is the correct syntax for referring to an external script called “geek.js”?',
    a:' <script src=”geek.js”>',
    b:'<script href=”geek.js”> ',
    c:' <script ref=”geek.js”>',
    d: ' <script name=”geek.js”>',
    correct: 'a'
  },   {
    question : 'The external JavaScript file must contain <script> tag" ?',
    a:' True',
    b:' False',
    c:' May Be',
    d: 'All of above ',
    correct: 'b'
  },   {
    question : 'Which of the following is a true statement for JavaScript callbacks?',
    a:'All except None.',
    b:' Some callbacks are just events, called to give the user a chance to react when a certain state is triggered',
    c:'A callback is a plain JavaScript function passed to some method as an argument or option. ',
    d: 'None  ',
    correct: 'c'
  },   {
    question : ' Which of the following is not a reserved word in JavaScript?',
    a:' interface',
    b:' throws ',
    c:' program ',
    d: ' short ',
    correct: 'c'
  },   {
    question : ' Where is the correct place to insert a JavaScript?',
    a:'body ',
    b:' head and body',
    c:' head',
    d: ' footer',
    correct: 'b'
  },   {
    question : ' How do you create a function in JavaScript?',
    a:' function: myFunction()',
    b:' function = myFunction() ',
    c:' function myFunction()',
    d: 'myFunction() function ',
    correct: 'c'
  }, 
  {
    question : '  Which of the following function of String object returns a string representing the specified object?',
    a:' toLocaleUpperCase()',
    b:' toUpperCase()',
    c:' toString()',
    d: 'subString()',
    correct: 'c'
  }, 
];

const quiz_result = document.getElementById("quiz");
const que_text = document.getElementById('que_text');
const ans_text = document.querySelectorAll(".answer");

const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');

const sub_btn = document.getElementById('sub_btn');

const popUpMsg = document.getElementById('popUp');

var currentQue = 0;
var score = 0;

loadQuiz();

function loadQuiz( ){

  deSelectAnswer();
  
  const currentQueData = questionData[currentQue];
    
    que_text.innerText = currentQueData.question;
    a_text.innerText = currentQueData.a;
    b_text.innerText = currentQueData.b;
    c_text.innerText = currentQueData.c;
    d_text.innerText = currentQueData.d;
    
}

function getSelected() {
  let ans = undefined;
  ans_text.forEach((ans_text) => {      
      if (ans_text.checked) {
        ans = ans_text.id;
      }
  });
      return ans; 
}

//deselect fields before answering

function deSelectAnswer(){
  ans_text.forEach((answer) => {
    answer.checked = false;
  })
}


sub_btn.addEventListener('click', () => {

  const answer = getSelected();
  
    if (answer){
      
              if (answer  === questionData[currentQue].correct) {

                      setTimeout(function() {
                      popUpMsg.style.display = "block"; 
                document.getElementById('popup-content').innerHTML = 'Correct Answer';
                      },0.1);                      
                      score = score+1;
                      currentQue++;
              }
              
              else{
                      setTimeout(function() {
                      popUpMsg.style.display = "block"; 
                      document.getElementById('popup-content').innerHTML = 'Wrong Answer';
                      },0.1);  
                    currentQue++;
              }

              setTimeout(function() {
              popUpMsg.style.display = "none"; 
              },800);
              // currentQue++;

                if (currentQue <  questionData.length) {
                loadQuiz();   
              } else {
                quiz_result.innerHTML =                  
                `<h2> You Answered Correctly ${score}/ ${questionData.length} questions .</h2>   
                <button onclick="location.reload()">Reload</button>`;
              }
              
    }  
});