const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

function UserLogin(){
    var getValue = document.getElementById('name_user').value;
   console.log(getValue);
   localStorage.setItem("key1",getValue);
}

function HospitalLogin(){
    var getValue = document.getElementById('name_hos').value;
   console.log(getValue);
   localStorage.setItem("key2",getValue);
}
