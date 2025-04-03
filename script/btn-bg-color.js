

document.getElementById("bg-btn")
.addEventListener('click',function(){
    
    const bgColor = '#' + Math.
    floor(Math.random()*16777215 ).toString(16);
    
    document.body.style.backgroundColor = bgColor;

})