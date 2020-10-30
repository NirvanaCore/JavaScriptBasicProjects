document.addEventListener('DOMContentLoaded', () => {
  generateBgImage();
});

// background image
const bgImage = document.getElementById('image');
const bgButton = document.getElementById('bgChange');

bgButton.addEventListener('click', generateBgImage);
function generateBgImage() {
  var url = "https://picsum.photos/1200/1200";
  bgImage.src = url;
  generateBgImage();
}

// LogIn/SignUp Form
const loginForm =document.querySelector('.logIn');
const signupForm =document.querySelector('.signUp');
const btn = document.querySelector('.btn');

const loginBtn = document.querySelector('.logInBtn');
const signupBtn = document.querySelector('.signUpBtn');
const toggleBtn = document.querySelector('.toggle-btn');

loginBtn.addEventListener('click',(e)=>{
  e.preventDefault();
  loginBtn.style.backgroundColor = '#e01537';
  signupBtn.style.backgroundColor = 'transparent';
  loginForm.style.display = "block";
  signupForm.style.display= "none";
});

signupBtn.addEventListener('click', (e) => {
  e.preventDefault();
  signupBtn.style.backgroundColor = '#e01537';
  loginBtn.style.backgroundColor = 'transparent';
  signupForm.style.display = 'block';
  loginForm.style.display = 'none';
});


