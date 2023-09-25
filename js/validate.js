const formulario = document.querySelector("#formulario");
const destinatario = document.querySelector(".destinatario");
const asunto = document.querySelector(".asunto");
const cuerpo = document.querySelector(".cuerpo");

formulario.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(event.target.value);
});

const validateForm = () => {};

validateForm();
