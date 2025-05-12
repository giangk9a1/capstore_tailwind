// Toggle menu
document.getElementById('menu-toggle').addEventListener('click', function () {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
});
// Toggle sub-dropdown in mobile menu
document.getElementById('mobile-pages-toggle').addEventListener('click', function () {
    const subDropdown = document.getElementById('mobile-sub-dropdown');
    subDropdown.classList.toggle('hidden');
});