var toDoListItem = document.getElementsByClassName("list-group-item");
var toDoListChck = document.querySelectorAll("input[type=checkbox]");
var toDoListGroup = document.getElementsByClassName("list-group");
var localStorageItem = "";

(function () {
    
})();

toDoListGrp = {
    toDoListGrpFnc: () => {
        for (let i = 0; i < toDoListItem.length; i++) {
            const item = toDoListItem[i];
            const chkItem = item.firstElementChild.children[0];

            item.addEventListener("click", () => {
                item.classList.contains("active") ? item.classList.remove("active") : item.className += " active";

                setTimeout(() => {
                    item.classList.contains("active") ? chkItem.checked = true : chkItem.checked = false;
                }, 100);

            setLocalStorage()
                
            });

            chkItem.addEventListener("click", () => {
                item.classList.contains("active") ? item.classList.remove("active") : item.className += " active";
            });

        }
    },
    addNewToDoItem: () => {
        var newToDoItemBox = document.getElementById("newToDoItemBox").value.trim();
        var itemCount = toDoListItem.length + 1;
        if (newToDoItemBox) {
            // Cache of the template
            var template = document.getElementById("template-list-item");
            // Get the contents of the template
            var templateHtml = template.innerHTML;
            // Final HTML variable as empty string
            var listHtml = "";
    
            listHtml += templateHtml.replace(/{{name}}/g, newToDoItemBox)
                .replace(/{{customCheck}}/g, "customCheck" + itemCount++);
    
            document.getElementById("list-group").innerHTML += listHtml;
    
            document.getElementById("newToDoItemBox").value = "";
    
            toDoListGrp.toDoListGrpFnc();
    
            return false;
        } else {
            alert("Lütfen yapılacak iş maddesini giriniz!");
        }
    }
}

filterSH = {
    filterFnc: function (params) {
        const slctItem = params;

        if (slctItem.value == 0) {
            for (let i = 0; i < toDoListItem.length; i++) {
                const item = toDoListItem[i];
                item.classList.remove("showLi")
                item.classList.contains("active") ? item.className += " showLi" : item.className += " hideLi";
            }
        }
        else if (slctItem.value == 1) {
            for (let i = 0; i < toDoListItem.length; i++) {
                const item = toDoListItem[i];
                item.classList.remove("showLi")
                item.classList.contains("active") ? item.className += " hideLi" : item.className += " showLi";
            }
        }
        else {
            for (let i = 0; i < toDoListItem.length; i++) {
                const item = toDoListItem[i];

                item.classList.remove("hideLi");
                item.classList.remove("showLi")
            }
        }
    }
}



var checkboxValues = JSON.parse(localStorage.getItem('checkboxValues')) || {},
    $checkboxes = $("#list-group :checkbox");

//Notice the logical OR operator (||) which returns the value of its second operand, if the first is falsy
// var checkboxValues = JSON.parse(localStorage.getItem('checkboxValues');
// if (checkboxValues === null){
//   checkboxValues = {};
// }

function setLocalStorage() {

    // for (let i = 0; i < toDoListChck.length; i++) {
    //     const item = toDoListChck[i];

    //     localStorage.setItem("ozkan", item.checked);

    //     console.log(localStorage.getItem('ozkan'));

    // }

    $checkboxes.on("change", function () {
        $checkboxes.each(function () {
            checkboxValues[this.id] = this.checked;
        });

        localStorage.setItem("checkboxValues", JSON.stringify(checkboxValues));
    });
}



toDoListGrp.toDoListGrpFnc();


function getLocalStorage() {
    $.each(checkboxValues, function (key, value) {
        $("#" + key).prop('checked', value);

        if (value) {
            $("#" + key).parents("li.list-group-item").addClass(" active");
        }

    });

    // setTimeout(() => {
    // toDoListGrp.toDoListGrpFnc();
        
    // }, 100);
}

getLocalStorage();