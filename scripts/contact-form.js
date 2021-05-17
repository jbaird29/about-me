const submitBtn = document.getElementById("submit-btn");

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const nameEl = document.getElementById("name");
    const emailEl = document.getElementById("email");
    const messageEl = document.getElementById("message");
    const inputs = [nameEl, emailEl, messageEl];
    const formPrompt = document.getElementById("form-prompt");
    if (!nameEl.checkValidity() || !emailEl.checkValidity() || !messageEl.checkValidity()) {
        formPrompt.innerHTML = "&#x274C; Please properly fill out all the fields!";
        inputs.forEach((input) => input.classList.add("validate"));
        return false;
    }
    inputs.forEach((input) => input.classList.remove("validate"));

    const spinner = document.getElementById("submitting-form");
    spinner.classList.add("submitting-form-active");
    const body = { name: nameEl.value, email: emailEl.value, message: messageEl.value };
    fetch("https://jtl29qvpsd.execute-api.us-east-1.amazonaws.com/default/catchWebsiteMessage", {
        method: "POST",
        mode: "no-cors",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    })
        .then((response) => (response.ok ? response.json() : new Error()))
        .then((data) => {
            spinner.classList.remove("submitting-form-active");
            inputs.forEach((input) => (input.value = ""));
            formPrompt.innerHTML = "&#x1F64C; Thanks! You'll receive a confirmation email shortly.";
        })
        .catch((err) => {
            console.log(err);
            spinner.classList.remove("submitting-form-active");
            inputs.forEach((input) => (input.value = ""));
            formPrompt.innerHTML = "&#x274C; Sorry, an error occurred. Please send me an email instead.";
        });
});
