window.onload = function() {
    let menuBar = document.getElementById("menu-bar");
    let menuTitles = menuBar.getElementsByClassName("menu-title");
    for (let i = 0; i < menuTitles.length; i++) {
        let ele = menuTitles[i];
        ele.parentElement.removeChild(ele);  
    }
    let rightButtons = menuBar.getElementsByClassName("right-buttons");
    for (let i = 0; i < rightButtons.length; i++) {
        let ele = rightButtons[i];
        ele.parentElement.removeChild(ele);
    }
    document.getElementById('theme-toggle').remove();
};