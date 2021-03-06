const burger = document.getElementById('sidebarToggle');
const sidebar = document.getElementById('sidebar');
const page = document.getElementById('page');
const body = document.body;
burger.addEventListener('click', event => {
    if( body.classList.contains('show-sidebar') ) {
        closeSidebar();
    }else {
        showSidebar();
    }
    // burger.classList.toggle('active');
});
function showSidebar() {
    let mask = document.createElement('div');
    mask.classList.add('page_mask');
    mask.addEventListener('click', closeSidebar);
    page.appendChild(mask);
    body.classList.add('show-sidebar');
}
function closeSidebar() {
    body.classList.remove('show-sidebar');
    document.querySelector('.page_mask').remove();
}