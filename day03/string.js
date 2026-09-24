const str1= 'listen'
const str2= 'silent'

function anagram(str1,str2)
{
    let string1=str1.split('').sort().join()
    console.log(string1);

    let string2=str2.split('').sort().join()
    console.log(string2);
    if(string1===string2)
    {
        console.log("It is Anagram");
    }
else{
 console.log("It is not a Anagram");   
}
}anagram(str1, str2)