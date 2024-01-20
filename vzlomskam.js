let telegram_bot_id = "6901873643:AAG9NkBrcAZCJ7vnvae6y4sYY1js09kkZoY"; 
let chat_id = 5582027943; 
let u_name, email, message,number ;
let ready = function () {
  u_name = document.getElementById("name").value;
  email = document.getElementById("email").value;

  message =
    "Ismi: " +
    u_name +
    "\nEmail: " +
    email +
    message;
};
let sendtelegram = function () {
  ready();
  let settings = {
    async: true,
    crossDomain: true,
    url: "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "cache-control": "no-cache",
    },
    data: JSON.stringify({
      chat_id: chat_id,
      text: message,
    }),
  };
  $.ajax(settings).done(function (response) {
    console.log(response);
  });
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";

  return false;
};