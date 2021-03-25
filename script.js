const butt = document.getElementById("butt");
const Meals = ["Eggs + a piece of rbi3 on top + orange juice or tea + A warm ma7racha  ","Souciss + soda + komira	 dyal lbare7 + fromage ","kefta + fromage ","dinde + mashed potateos ","pizza + soda ","pasticio","l3sida",		"loubia + fromage + parisien ","l3des + fromage + parisien","fromage + ma7racha ", "tuna + potateos +			 les pates", "cerial", "bowl of bannanas, grek, strawberies and apples", "2 croissant + orange juice",			"chicken nuggets + frites", "fish + veggies + orange/carrot juice", "sushi", "2 pieces of cake ",			"tacos(mdare7)"];
butt.onclick = () => {
	const meal = Meals[Math.floor(Math.random() * 10)] ;
	console.log(meal);
	document.getElementById("result").innerHTML = meal;
} 
