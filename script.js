document.addEventListener("DOMContentLoaded", function() {
  const cards = document.querySelectorAll("#card");

  for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", function() {
      const video = this.querySelector("video");
      const src = video.getAttribute("src");

      const title = this.querySelector("#card_title").innerText;
      const desc = this.querySelector("#card_desc").innerText;

      const link_txt = this.querySelector("#link");

      if(link_txt)
      {
        const link = link_txt.innerText;
        localStorage.setItem("link", link);
      }

      localStorage.setItem("title", title);
      localStorage.setItem("desc", desc);

      localStorage.setItem("videoSrc", src);

      window.location.href = "player.html";
    });
  }
});
