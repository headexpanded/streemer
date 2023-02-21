// Some basic js to handle the footer modal on the Streemer home page

const modal = document.querySelector("#footerModal");
const aboutModal = document.querySelector("#aboutModal");
const contactModal = document.querySelector("#contactModal");
const tandcModal = document.querySelector("#tandcModal");
const closeModal = document.querySelector("#closeModal");

aboutModal.addEventListener("click", () => {
    modal.showModal();
});

contactModal.addEventListener("click", () => {
    modal.showModal();
});

tandcModal.addEventListener("click", () => {
    modal.showModal();
});

closeModal.addEventListener("click", () => {
    modal.close();
});
