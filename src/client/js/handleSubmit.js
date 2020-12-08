function handleSubmit(e) {
  e.preventDefault();

  let formText = document.querySelector("#text");

  if (formText.value === "") {
    formText.classList.add("form__danger");
    document.querySelector(".danger").innerText = "Required";
  } else {
    formText.classList.remove("form__danger");
    document.querySelector(".danger").innerText = "";
  }

  postData("http://localhost:3000/addText", { text: formText.value });
}

const postData = async (url = "", data = {}) => {
  const response = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
  try {
    const newData = await response.json();
    return newData;
  } catch (error) {
    console.log(error);
  }
};

export { handleSubmit };
