const successContainer = document.querySelector(".success")


const success = () => {

    successContainer.innerHTML = `<div class="success">your survey has been submitted</div>
                                    <div class="logout"><a href="index.html">logout</a></div>`

}

success()