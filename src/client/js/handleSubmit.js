import { getData, getSentimental, updateUI, loading } from "./fetchingData";
function handleSubmit(e) {
  e.preventDefault();
  loading(true);
  let formText = document.querySelector("#text");
  if (formText.value === "") {
    formText.classList.add("form__danger");
    document.querySelector(".danger").innerText = "Required";
  } else {
    formText.classList.remove("form__danger");
    document.querySelector(".danger").innerText = "";
  }

  getData("http://localhost:8080/getKey")
    .then((data) =>
      getSentimental(
        "https://api.meaningcloud.com/sentiment-2.1",
        data.key,
        formText.value
      )
    )
    .then((data) => updateUI(data))
    .then(() => loading(false));
}

export { handleSubmit };
