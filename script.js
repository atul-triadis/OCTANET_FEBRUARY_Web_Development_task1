
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function animateIfVisible() {
    const features = document.querySelectorAll('.feature');
    const accessories = document.querySelectorAll('.accessory');
    
    features.forEach(feature => {
        if (isInViewport(feature)) {
            feature.classList.add('animated');
        }
    });

    accessories.forEach(accessory => {
        if (isInViewport(accessory)) {
            accessory.classList.add('animated');
        }
    });
}

window.addEventListener('scroll', animateIfVisible);

document.addEventListener('DOMContentLoaded', animateIfVisible);
