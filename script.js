let thumbnail = document.querySelectorAll(".thumbnail");
let mainImage = document.getElementById(main - img);

for (let i = 0; i < thumbnail.length; i++) {
  thumbnail[i].addEventListener("click", function () {
    mainImage.src = this.src;
  });
}
