function Calculator () {
    this.display = document.querySelector(".display");
    this.table = document.querySelector(".calculator");

    this.start = () => {
        this.clickButtons(); 
        this.pressEnter()
    };

    this.clearDisplay = () => this.display.value = "";

    this.backSpace = () => this.display.value = this.display.value.slice(0, -1);

    this.btnForDisplay = (value) => this.display.value += value;

    this.resultCounts = () => {
        let count = this.display.value;

        try {
            count = eval(count);
            this.display.value = count;
        } catch (error) {
            alert("Um erro aconteceu")
        }
    }

    this.pressEnter = () => {
        this.display.addEventListener("keypress", event => {
            if(event.keyCode === 13) this.resultCounts();
        })
    }

    this.clickButtons = () => {
        this.table.addEventListener("click", event => {
            const element = event.target;

            if (element.classList.contains("btn-num")) this.btnForDisplay(element.innerText);
            if (element.classList.contains("btn-clear")) this.clearDisplay();
            if (element.classList.contains("btn-del")) this.backSpace();
            if (element.classList.contains("btn-equal")) this.resultCounts();
        })
    }
}

const calculator = new Calculator();
calculator.start();