/*=============== MIXITUP FILTER PORTFOLIO ===============*/
let mixerPortfolio = mixitup(".work__container", {
  selectors: {
    target: ".work__card",
  },
  animation: {
    duration: 300,
  },
});
/// active link
let activeLink = document.querySelectorAll(".work__filters span")
activeLink.forEach((dev)=>{
  dev.addEventListener("click",()=>{
    activeLink.forEach((dev)=>{
    dev.classList.remove("active-work");
    })
    dev.classList.add("active-work");
  });
})