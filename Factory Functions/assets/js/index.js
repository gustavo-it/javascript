function createCalculator() {
    return {
        display: document.querySelector(".display"),
        table: document.querySelector(".calculator"),

        start: function() {
            alert("Iniciado")
            
        },

        clickButtons: function() {
            this.table.addEventListener("click", event => {
                const element = event.target;

                if(element.classList.contains("btn-num")) {
                    this.btnForDisplay();
                }
            })
        },

        btnForDisplay: function() {
            
        },
    }
}

const calculator = createCalculator();
calculator.start();