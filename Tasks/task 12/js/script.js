var course =["html" , "css","js"]
var index;
var user=prompt("enter the course")
index =course.findIndex(item => item == user)
if   (index  != -1){
alert ("index : " +  index )}
else{
    course.push(user)
    console.log(course)
}
