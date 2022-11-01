
if (typeof window !== 'undefined') {
  try {
    let upbtn = document.getElementById("back-to-top");
    let Header = document.getElementsByClassName("header");

    window.onscroll = () => {
      if (document.body.scrollTop > 30 ||
        document.documentElement.scrollTop > 30
      ) {
        upbtn.style.display = "block";
        Header[0].classList.add("header__scrolled")
      } else { 
        upbtn.style.display = "none"
        Header[0].classList.remove("header__scrolled")
      }
    };

    upbtn.addEventListener("click", () => {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    });
  } catch (error) { }
}
