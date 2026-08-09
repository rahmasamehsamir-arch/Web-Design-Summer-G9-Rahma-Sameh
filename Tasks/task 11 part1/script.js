var degree= prompt("please enter your degree")

if(degree == null || degree == "" || degree>100 || degree<=0)
    alert(" garb tany law sam7t !") 
else 
{
    if (degree >90)
        alert(" Grade:A")
    else if (degree <=90 && degree >80)
        alert("Grade:B")
   else if (degree <=80 && degree >70)
        alert("Grade:C")
   else if (degree <=70 && degree >50)
        alert("Grade:D")
       else if (degree <50)
        alert("Grade:F")


}
