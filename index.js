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
window.addEventListener('scroll', function () {
    const header = document.getElementById('header');
    const headerButton = document.querySelector('.header-button');
    const headerLinks = document.querySelectorAll('.header-link');
    if (window.scrollY > 0) {
        header.classList.add('bg-white', 'py-4');
        header.classList.remove('text-gray-600', 'py-7');
        headerButton.classList.add('bg-blue-600');
        headerButton.classList.remove('bg-white/15');
        headerLinks.forEach(link => link.classList.remove('text-white'));
    } else {
        header.classList.remove('bg-white', 'py-4');
        header.classList.add('text-gray-600', 'py-7');
        headerButton.classList.remove('bg-blue-600');
        headerButton.classList.add('bg-white/15');
        headerLinks.forEach(link => link.classList.add('text-white'));
    }
});