const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModel = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

const openModal = () => {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
}

for (let i = 0; i < btnsOpenModal.length; i++) {
    btnsOpenModal[i].addEventListener("click", openModal);
};

const closeModel = () => {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}

btnCloseModel.addEventListener("click", closeModel);

overlay.addEventListener("click", closeModel);

document.addEventListener("keydown", event => {
    if(event.key === "Escape" && !modal.classList.contains("hidden")) closeModel();
});
