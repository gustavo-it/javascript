class ValidationForm {
    constructor() {
        this.form = document.querySelector(".form");
        this.name = this.form.querySelector(".name");
        this.lastName = this.form.querySelector(".lastname");
        this.cpf = this.form.querySelector(".cpf");
        this.passwordOne = this.form.querySelector(".password");
        this.passwordTwo = this.form.querySelector(".repeat-password");

        this.events();
    }

    events () {
        this.form.addEventListener("submit", event => {
            this.handleSubmit(event);
        });
    }

    handleSubmit (event) {
        event.preventDefault();
        this.isValidFields();
    }

    isValidFields () {
        let valid = true;

        for (let field of this.form.querySelectorAll(".valid")) {
            if (!field.value) {
                this.createError(field, "message");
            };
        }
    }

    createError (field, message) {
        const div = document.createElement("div");
        div.innerHTML = message;
        div.classList.add("error-text");
        field.appendChield();
    }

}

const registerForm = new ValidationForm();
