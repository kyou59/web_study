const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/dog-tongue.jpg") {
    myImage.setAttribute("src", "images/dog-tongue2.jpg");
  } else {
    myImage.setAttribute("src", "images/dog-tongue.jpg");
  }
};
