let checkItem = (element) => {
    if(element.classList.contains("line-trough")) {
        element.classList.remove("line-trough");
    } else {
        element.classList.add("line-trough");
    }
}

let deleteItem = (element) => {
    element.remove();
}

let addItem = (value) => {
    let liNode = document.createElement("li");
    liNode.innerHTML =
        `<div class="item">
            <label>
                ${value}
            </label>
            <div>
                <button class="btn check">check</button>
                <button class="btn delete">delete</button>
            </div>
        </div>`; 
    
    let listContainer = document.getElementsByTagName("ul")[0];
    listContainer.appendChild(liNode);

    liNode.addEventListener("click", (event) => {
        
        if( event.target.matches( '.check' ) ) {
            checkItem(event.currentTarget.getElementsByTagName("label")[0]);
        } else if( event.target.matches( '.delete' ) ) {
            deleteItem(event.currentTarget);
        }
    })
}

let addHandleEventButton = () => {
    let addItemBtn = document.querySelector("form > button");
    let textField = document.querySelector("form > input");

    addItemBtn.addEventListener('click',( event ) => {
        event.preventDefault();
        let textValue = textField.value;
        if(textValue != "") {
            addItem(textValue);
            textField.value = "";
        }
    });
}

let init = () => {
    addHandleEventButton();
}

init();