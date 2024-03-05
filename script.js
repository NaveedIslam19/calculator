let button = Array.from(document.querySelectorAll("input"));
let search = document.getElementById("search")


button.forEach(function (e) {
    e.addEventListener('click', function () {
        if (e.value == "=") {
            if(search.value == ""){
                "Invalid Value"
            } else {
                let evaldata = document.querySelector("#search")
                evaldata.value = eval(evaldata.value)
            }
            
        } else if(e.value == "DE"){

            let InputVal = document.querySelector("#search");
            InputVal.value = InputVal.value.slice(0, -1);

        } else if (e.value == "AC"){

            document.querySelector("#search").value = "";

        }
         else {

            document.querySelector("#search").value += e.value;
        }
       
    })

});

