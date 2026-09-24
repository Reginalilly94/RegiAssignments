 let mark=90
function studentscore(mark)
{
   
    switch(true)
    {
        case mark>=100:
            console.log("Grade O")
            break;
        case mark>=90:
            console.log("Grade A")
            break;
        case mark>=70:
            console.log("Grade B")
            break;
default:
 console.log("Fail")
break;

    }
}studentscore(mark)