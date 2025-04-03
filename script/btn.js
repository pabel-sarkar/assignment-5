
// cart 1 js code-----------------------------------

document.getElementById("btn-1")
    .addEventListener("click", function (event) {
        event.preventDefault;

        // doom 

        const navNumber = getInnerTextById("nav-number");
        const taskNumber = getInnerTextById("task-number");
        if (navNumber || taskNumber) {
            alert('Completed task')
            const sum = navNumber + 1;
            setInnerTextByIdAndValue("nav-number", sum);

            const sumN = taskNumber - 1;
            setInnerTextByIdAndValue("task-number", sumN);

            let newTime = new Date().toLocaleTimeString();
            const historyTitle = document.getElementById("history-title");
            const div = document.createElement("div");
            div.style.marginTop = '24px'
            
            div.innerHTML = `
            <p>You have Complete The Task </p>
             <p>Flex Mobile Button Issue ${newTime}</P>
            
            `
            historyTitle.appendChild(div);


            document.getElementById("btn-1").disabled = true;

        }

    })


// card 2 js code----------------------------


document.getElementById("btn-2")
    .addEventListener("click", function (event) {
        event.preventDefault;

        // doom 

        const navNumber = getInnerTextById("nav-number");
        const taskNumber = getInnerTextById("task-number");
        if (navNumber || taskNumber) {
            alert('Completed task')
            const sum = navNumber + 1;
            setInnerTextByIdAndValue("nav-number", sum);

            const sumN = taskNumber - 1;
            setInnerTextByIdAndValue("task-number", sumN);

            let newTime = new Date().toLocaleTimeString();
            const historyTitle = document.getElementById("history-title");
            const div = document.createElement("div");
            div.style.marginTop = '24px'

            div.innerHTML = `
            <p>You have Complete The Task </p>
             <p> Add Dark Mode ${newTime}</P>
            
            `
            historyTitle.appendChild(div);


            document.getElementById("btn-2").disabled = true;

        }

    })


// card 3 js code---------------------------

document.getElementById("btn-3")
    .addEventListener("click", function (event) {
        event.preventDefault;

        // doom 

        const navNumber = getInnerTextById("nav-number");
        const taskNumber = getInnerTextById("task-number");
        if (navNumber || taskNumber) {
            alert('Completed task')
            const sum = navNumber + 1;
            setInnerTextByIdAndValue("nav-number", sum);

            const sumN = taskNumber - 1;
            setInnerTextByIdAndValue("task-number", sumN);

            let newTime = new Date().toLocaleTimeString();
            const historyTitle = document.getElementById("history-title");
            const div = document.createElement("div");
            div.style.marginTop = '24px'
            div.innerHTML = `
            <p>You have Complete The Task Add</p>
             <p> Optimize Home pagee ${newTime}</P>
            
            `
            historyTitle.appendChild(div);


            document.getElementById("btn-3").disabled = true;

        }

    })

// card 4 js code ------------------------------------

document.getElementById("btn-4")
    .addEventListener("click", function (event) {
        event.preventDefault;

        // doom 

        const navNumber = getInnerTextById("nav-number");
        const taskNumber = getInnerTextById("task-number");
        if (navNumber || taskNumber) {
            alert('Completed task')
            const sum = navNumber + 1;
            setInnerTextByIdAndValue("nav-number", sum);

            const sumN = taskNumber - 1;
            setInnerTextByIdAndValue("task-number", sumN);

            let newTime = new Date().toLocaleTimeString();
            const historyTitle = document.getElementById("history-title");
            const div = document.createElement("div");
            div.style.marginTop = '24px'

            div.innerHTML = `
            <p>You have Complete The Task </p>
             <p> Add new emoji 🤲 ${newTime}</P>
            
            `
            historyTitle.appendChild(div);


            document.getElementById("btn-4").disabled = true;

        }

    })


// card 5 js code------------------------

document.getElementById("btn-5")
    .addEventListener("click", function (event) {
        event.preventDefault;

        // doom 

        const navNumber = getInnerTextById("nav-number");
        const taskNumber = getInnerTextById("task-number");
        if (navNumber || taskNumber) {
            alert('Completed task')
            const sum = navNumber + 1;
            setInnerTextByIdAndValue("nav-number", sum);

            const sumN = taskNumber - 1;
            setInnerTextByIdAndValue("task-number", sumN);

            let newTime = new Date().toLocaleTimeString();
            const historyTitle = document.getElementById("history-title");
            const div = document.createElement("div");
            div.style.marginTop = '24px'

            div.innerHTML = `
            <p>You have Complete The Task </p>
             <p> Integrate OpenAI API ${newTime}</P>
            
            `
            historyTitle.appendChild(div);


            document.getElementById("btn-5").disabled = true;

        }

    })

// card 6 js code----------------------------
document.getElementById("btn-6")
    .addEventListener("click", function (event) {
        event.preventDefault;

        // doom 

        const navNumber = getInnerTextById("nav-number");
        const taskNumber = getInnerTextById("task-number");
        if (navNumber || taskNumber) {
            alert('Completed task')
            const sum = navNumber + 1;
            setInnerTextByIdAndValue("nav-number", sum);

            const sumN = taskNumber - 1;
            setInnerTextByIdAndValue("task-number", sumN);

            let newTime = new Date().toLocaleTimeString();
            const historyTitle = document.getElementById("history-title");
            const div = document.createElement("div");
            div.style.marginTop = '24px'

            div.innerHTML = `
            <p>You have Complete The Task </p>
             <p> Improve Job searching ${newTime}</P>
            
            `
            historyTitle.appendChild(div);


            document.getElementById("btn-6").disabled = true;
            alert('You have Complete all the current task')
        }

    })

// clear history------------------
document.getElementById("clear-btn")
    .addEventListener("click", function () {
        document.getElementById("history-title").innerHTML = "";
    })


    // ----------------------
    let dateDay =  new Date().toLocaleDateString();
    document.getElementById("date-wed").innerText = dateDay;
