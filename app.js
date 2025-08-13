let imageBox = document.getElementById("imgBox");
let qrImg = document.getElementById("qrImg");
let qrText = document.getElementById("qr-text");
let generateButton = document.querySelector("button");

imageBox.style.display = "none";

function QrGenerate() {
  let qrValue = qrText.value;
  if (qrValue === "") {
    alert("Please enter a URL or text to generate QR code");
    return;
  }
  let url ="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +qrValue;
  qrImg.src = url;
  imageBox.style.display = "block";
    qrText.value = "";
}

generateButton.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    QrGenerate();
  }
});
generateButton.addEventListener("click", QrGenerate);
