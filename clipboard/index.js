
// JavaScript
function myFunction(){
    var text=document.querySelector("#text");
    text.select();
    navigator.clipboard.writeText(text.value);
}


// jQuery
$('#click').on("click",function(){
    var text1=$('#text');
    text1.select();
    document.execCommand('copy');
});
