function ShowNavbar() {
    const sidebar = document.querySelector('.JSNav');

    if (sidebar) {
        sidebar.style.display = 'flex';
    } else {
        console.error('Element with class JSNav not found');
    }
}






 function hide() {
    const sidebarTwo =     document.querySelector('.JSNav');
    sidebarTwo.className += " hide";

}