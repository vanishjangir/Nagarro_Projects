var buttons=document.getElementsByClassName("dot")
for(let i=0;i<buttons.length;i++){
    buttons[i].addEventListener("click",myFunction);
}

function myFunction(){
    var div=document.getElementsByClassName("text")[0];
    var textarea=document.getElementsByClassName("textarea")[0]
    var btns=document.getElementsByClassName("btns")[0]
    if(this.id=="black"){
        div.style.backgroundColor=this.id;
        textarea.style.backgroundColor=this.id;
        textarea.style.borderColor="white"
        textarea.style.color="white"
        btns.style.borderColor="white"
    }
    else if(this.id=="blue"){
        div.style.backgroundColor=this.id;
        textarea.style.backgroundColor=this.id;
        textarea.style.borderColor="white"
        textarea.style.color="white"
        btns.style.borderColor="white"
    }
    else if(this.id=="green"){
        div.style.backgroundColor=this.id;
        textarea.style.backgroundColor=this.id;
        textarea.style.borderColor="black"
        textarea.style.color="black"
        btns.style.borderColor="black"
    }
    else if(this.id=="yellow"){
        div.style.backgroundColor=this.id;
        textarea.style.backgroundColor=this.id;
        textarea.style.borderColor="black"
        textarea.style.color="black"
        btns.style.borderColor="black"
    }
    

    console.log(this.id)
}
