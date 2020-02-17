
document.getElementById('display').style.visibility = "hidden";
let input = document.getElementById('weightInput');
input.addEventListener('input',function(){
let value = document.getElementById('weightInput').value;
document.getElementById('display').style.visibility = "visible";
document.getElementById('tonOtp').innerHTML = value/1000;
document.getElementById('gramOtp').innerHTML = value*1000;
document.getElementById('poundOtp').innerHTML = value*2.2046;

}) ;


