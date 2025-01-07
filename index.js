let string = 'convert-to_camel' ;
function camel(string)
{
    return string
    .split(/[-_]/)
    .map((str,index) => {
        if ( index == 0){
            return str;
        }
        return(
            str.charAt(0).toUpperCase()
            + str.slice (1)
        );
    })
    .join("");
}
console.log(camel(string));