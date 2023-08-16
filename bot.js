function text(){
	var list={"Who are you" : "Hello, Codewith_random here ",
"How are you" : "Good :)",
"What can i do for you" : "Please Give us A Follow & Like.",
"Your followers" : "I have my family of 5000 members, i don't have follower ,have supportive Famiy ",
"ok" : "Thank You So Much ",
"Bye" : "Okay! Will meet soon.."
};
var ques=document.getElementById('userBox').value;
document.getElementById('chatlog').innerHTML = ques + "<br>";
if (ques in list){
	document.getElementById('chatlog').innerHTML=list[ques]+"<br>";
}else{
document.getElementById('chatlog').innerHTML="Sorry,I didn't understand"+"<br>";
}
}