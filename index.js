const loginMenuBtn = document.getElementById('loginMenuBtn');
const loginMenuContent = document.getElementById('loginMenu');
const loginMenuOverlay = document.getElementById('loginOverlay');
const closeLoginMenuBtn = document.getElementById('closeLoginMenuBtn');
const menuToggle = document.getElementById("mobileMenuToggle");
const menuContent = document.getElementById("menuContent");
const closeMenu = document.getElementById("closeBtn");
const accordions = document.getElementsByClassName("accordion");
const accordContent = document.getElementsByClassName('accordContent');
const desktopMenu = document.getElementById('menuNavItem');
const desktopMenuContent = document.getElementById("desktopMenuContent");

desktopMenu.addEventListener('click', () => {

    if(desktopMenuContent.style.maxHeight == 0){
        console.log('if ran');
        desktopMenu.style.color = "#4284fb";
        desktopMenuContent.style.border = "solid 1px #bebebe";
        desktopMenuContent.style.maxHeight = "100%"; 
    }else{
        console.log('else ran');
        desktopMenu.style.color = "#38393c";
        desktopMenuContent.style.border = "hidden";
        desktopMenuContent.style.maxHeight = 0;
        desktopMenuColumn.style.maxHeight = 0;
    }
})
loginMenuBtn.addEventListener('click', () => {

    if(loginMenuContent.style.maxWidth){
        loginMenuContent.style.maxWidth = "0";
        loginMenuOverlay.style.maxWidth = "0";
        loginMenuBtn.style.color = "#38393c";
    }else{
        loginMenuContent.style.maxWidth = "250px";
        loginMenuOverlay.style.maxWidth = "100vw";
        loginMenuBtn.style.color = "#4284fb";
    }
})
closeLoginMenuBtn.addEventListener('click', () => {
    loginMenuContent.style.maxWidth = "0";
    loginMenuOverlay.style.maxWidth = "0";
    loginMenuBtn.style.color = "#38393c";

})
loginMenuOverlay.addEventListener('click', () => {
    loginMenuContent.style.maxWidth = "0";
    loginMenuOverlay.style.maxWidth = "0";
    loginMenuBtn.style.color = "#38393c";
})
menuToggle.addEventListener('click', function(e) {
    let content = e.target.nextElementSibling;

    console.log(e.target);
    if(content.classList == "menuContent") {
        content.classList =  "menuContent is-open";
    }else{
        content.classList = "menuContent";
    }
})
closeMenu.addEventListener('click', () => {
    menuContent.classList = "menuContent";
});
for( let i=0; i < accordions.length; i++){
    accordions[i].onclick = function(){

        var content = this.nextElementSibling;
        if (content.style.maxHeight){
            content.style.maxHeight = null;
            this.style.color = "#38393c";
            this.style.backgroundColor = "#fefefe";
            this.classList.toggle('is-open');
        }else{
            content.style.maxHeight = content.scrollHeight + "px";
            this.style.color = "#4284fb";
            this.style.backgroundColor = "#f8f9fc";
            this.classList.toggle('is-open');
        }
    }
}
