/*alert("Bienvenue sur la page d'acceuil du site du turfu")
x=10
y=prompt("entrer un nombre")
document.write(x)
if (y>x){
	document.write(" <center><h1>OUVRE</center></h1>")
}
else{
	document.write("<center><h1>FERME</center></h1>")
}*/
x=prompt("entrer un nombre pour x")
y=prompt("entrer un nombre pour y")
/*while (y<x){
	y=y+1
}
alert("maintenant y est égale à x")*/
/*for (var i=0; i<6; i=i+1){
	alert("La valeur de i est"+i)
}*/
function perimetre(R){
	p=2*3.14*R
	return p
}
r=prompt("entrer une valeur de rayon : ")
document.write(perimetre(r))