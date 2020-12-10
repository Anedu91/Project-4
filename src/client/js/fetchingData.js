const getData = async (url) => {
  const res = await fetch(url);
  try {
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
const getSentimental = async (url, key, text) => {
  const res = await fetch(`${url}?key=${key}&of=sjson&txt=${text}&lang=en`);
  try {
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
const updateUI = (data) => {
  document.querySelector("#agreement").innerText = data.agreement;
  document.querySelector("#confidence").innerText = data.confidence;
  document.querySelector("#irony").innerText = data.irony;
};
const loading = (isLoading) => {
  const loader = document.querySelector(".loading");
  if (isLoading) {
    loader.style.cssText = "display:grid;";
  } else {
    loader.style.cssText = "display:none;";
  }
};

export { getData, getSentimental, updateUI, loading };
