import { handleSubmit } from "./js/handleSubmit";
import "./scss/main.scss";

const form = document.querySelector("#form");

form.addEventListener("submit", handleSubmit);
