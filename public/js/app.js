console.log("Client side js is loaded!");

const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const searchContent = document.querySelector("#search-content");
const msg1 = document.querySelector("#msg-1");
const msg2 = document.querySelector("#msg-2");
const errMsg = document.querySelector("#err-msg");

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const searchAddress = search.value;
  search.value = null;

  searchContent.textContent =
    "searched location: " +
    (searchAddress.trim().length === 0 ? "**blank**" : searchAddress);
  msg1.textContent = "Loading...";
  msg2.textContent = "";
  errMsg.textContent = "";

  fetch(`http://localhost:3000/weather?address=${searchAddress}`).then(
    (res) => {
      res.json().then((data) => {
        if (data.error) {
          msg1.textContent = "";
          msg2.textContent = "";
          errMsg.textContent = data.error;
        } else {
          msg1.textContent = data.location;
          msg2.textContent = data.forecast;
          errMsg.textContent = "";
        }
      });
    }
  );
});
