function createCalculator() {
    return {
        display: document.querySelector(".display"),
        table: document.querySelector(".calculator"),

        start: function () { this.clickButtons(); this.pressEnter(); },

        clearDisplay: function () { this.display.value = ""; },

        backSpace: function () { this.display.value = this.display.value.slice(0, -1); },

        pressEnter: function() {
            this.display.addEventListener("keypress", event => {
                if(event.keyCode === 13) {
                    this.resultCounts();
                }
            });
        },

        resultCounts: function () {
            let count = this.display.value;

            try {
                count = eval(count);

                this.display.value = count;
            } catch (error) {
                alert("Um erro aconteceu");
            }
        },

        clickButtons: function () {
            this.table.addEventListener("click", event => {
                const element = event.target;

                if (element.classList.contains("btn-num")) this.btnForDisplay(element.innerText);

                if (element.classList.contains("btn-clear")) this.clearDisplay();

                if (element.classList.contains("btn-del")) this.backSpace();

                if (element.classList.contains("btn-equal")) this.resultCounts();

            });
        },

        btnForDisplay: function (value) {
            this.display.value += value;
        },
    }
}

const calculator = createCalculator();
calculator.start();