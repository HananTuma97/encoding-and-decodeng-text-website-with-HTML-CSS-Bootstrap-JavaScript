let text_area=document.getElementById("text");
let result= document.getElementById("result");
let select= document.getElementById("select");
text_area.addEventListener('input',()=>{
    makeresult();
});
select.addEventListener('change',()=>{
    makeresult();
});
function makeresult(){
    if(select.value == "encode"){
        result.value= btoa(text_area.value);
    } else if(select.value == "decode"){
      result.value= atob(text_area.value);
    }
}