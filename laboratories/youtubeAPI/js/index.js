let init = () => {
    submitHandler();
}

let submitHandler = () => {
    let searchInput = document.querySelector("#search_bar");
    let submitBtn = document.querySelector("form > button[type='submit']");

    submitBtn.addEventListener("click", (event) => {
        event.preventDefault();
        if(searchInput.value.trim() !== "") {
            fetchVideo(searchInput.value);
        }
    });
}

init();