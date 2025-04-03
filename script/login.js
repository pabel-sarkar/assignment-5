
document.getElementById("btn-1")
    .addEventListener("click", function (event) {
        event.preventDefault;
        
        // doom 
        const navNumber = getInnerTextById("nav-number");
        const taskNumber = getInnerTextById("task-number");
        if(navNumber || taskNumber){
            alert()
            const sum = navNumber + 1;
            setInnerTextByIdAndValue("nav-number",sum);
            
            const sumN = taskNumber - 1;
            setInnerTextByIdAndValue("task-number",sumN);

            document.getElementById("btn-1").disabled = true;
          
        }
        
    })


