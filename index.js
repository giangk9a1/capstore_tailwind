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


const slidesContainer = document.getElementById('slidesContainer');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const indicatorDots = document.querySelectorAll('[data-slide]');
const slideCount = 3;
let currentIndex = 0;

// Update slider position
function updateSlider() {
    slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;

    // Update indicator dots
    indicatorDots.forEach((dot, index) => {
        if (index === currentIndex) {
            dot.classList.remove('bg-gray-300');
            dot.classList.add('bg-blue-600');
        } else {
            dot.classList.remove('bg-blue-600');
            dot.classList.add('bg-gray-300');
        }
    });
}

// Previous slide
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slideCount) % slideCount;
    updateSlider();
});

// Next slide
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slideCount;
    updateSlider();
});

// Click on indicator dots
indicatorDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        updateSlider();
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    // Gán hiệu ứng ban đầu
    portfolioItems.forEach(item => {
        item.classList.add('transition-all', 'duration-500', 'ease-in-out', 'opacity-100', 'scale-100');
        item.style.display = 'block';
    });

    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Update button styles
            filterButtons.forEach(btn => {
                btn.classList.remove('bg-blue-600', 'text-white');
                btn.classList.add('text-gray-600');
            });
            this.classList.add('bg-blue-600', 'text-white');
            this.classList.remove('text-gray-600');

            const filterValue = this.getAttribute('data-filter');

            portfolioItems.forEach(item => {
                const categories = item.getAttribute('data-category').split(' ');
                const match = filterValue === 'all' || categories.includes(filterValue);

                if (!match) {
                    // Ẩn trước
                    item.classList.remove('opacity-100', 'scale-100');
                    item.classList.add('opacity-0', 'scale-95');
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 450); // Delay hide
                }
            });

            // Sau khi item cũ ẩn xong, mới show item mới (delay 450ms)
            setTimeout(() => {
                portfolioItems.forEach(item => {
                    const categories = item.getAttribute('data-category').split(' ');
                    const match = filterValue === 'all' || categories.includes(filterValue);

                    if (match) {
                        item.style.display = 'block';
                        setTimeout(() => {
                            item.classList.remove('opacity-0', 'scale-95');
                            item.classList.add('opacity-100', 'scale-100');
                        }, 10); // Cho reflow
                    }
                });
            }, 450);
        });
    });

});

AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true, // chỉ animate 1 lần
});
