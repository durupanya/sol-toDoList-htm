var toDoListItem = document.getElementsByClassName("list-group-item");
var toDoListGroup = document.getElementsByClassName("list-group");
var localStorageItem = "";

(function () {
    for (let i = 0; i < toDoListItem.length; i++) {
        const item = toDoListItem[i];
        const chkItem = item.firstElementChild.children[0];

        item.addEventListener("click", () => {
            item.classList.contains("active") ? item.classList.remove("active") : item.className += " active";
            item.classList.contains("active") ? chkItem.checked = true : chkItem.checked = false;

            setLocalStorage()
        });
    }
})();


var filterSH = {

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


function setLocalStorage() {

    for (let i = 0; i < toDoListGroup.length; i++) {
        const item = toDoListGroup[i];

        localStorageItem = item.innerHTML;
    }   

    localStorage.setItem("lastname", localStorageItem);
    console.log(localStorage.getItem("lastname"))
}

setLocalStorage();
