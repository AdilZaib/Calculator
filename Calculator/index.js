function insert(num){
    document.getElementById("in").value = document.getElementById("in").value+num;
}
function equal(){
    var exp = document.getElementById("in").value;
    if(exp)
    {
       var done= document.getElementById("in").value= eval(exp);
    }
    
}
function clean(){
    document.getElementById("in").value="";
}
function back()
{
    var b= document.getElementById("in").value;
    document.getElementById("in").value = b.substring(0,b.length-1);
}
