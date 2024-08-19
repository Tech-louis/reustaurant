// scripts.js

// Data for the menu cards
const foodData = {
    'juice-and-drinks': {
        images: ['juice1.jpg', 'juice2.jpg', 'juice3.jpg'],  // Replace with actual paths
        description: 'Refreshing juices and drinks to quench your thirst.',
    },
    'regular-meals': {
        images: ['ugali.jpg', 'wali.jpg', 'tambi.jpg'],  // Replace with actual paths
        description: 'Tasty regular meals that satisfy your hunger.',
    },
    'special-order': {
        images: ['birian.jpg', 'pilau.jpg', 'urojo.jpg'],  // Replace with actual paths
        description: 'Special orders for those special moments.',
    }
};

// Select elements
const menuCards = document.querySelectorAll('.menu-card');
const popupSlider = document.getElementById('popup-slider');
const sliderImage = document.querySelector('.slider-image');
const foodDescription = document.querySelector('.food-description');
const closeBtn = document.querySelector('.close-btn');

// Function to open the popup slider
function openSlider(foodKey) {
    const food = foodData[foodKey];
    let currentIndex = 0;

    // Function to update the image in the slider
    function updateImage() {
        sliderImage.src = food.images[currentIndex];
        foodDescription.textContent = food.description;
    }

    // Show the first image initially
    updateImage();

    // Set interval to change images every 3 seconds
    const sliderInterval = setInterval(() => {
        currentIndex = (currentIndex + 1) % food.images.length;
        updateImage();
    }, 3000);

    popupSlider.classList.remove('hidden');

    // Clear interval on closing the slider
    popupSlider.addEventListener('click', function closeSlider(e) {
        if (e.target === popupSlider || e.target === closeBtn) {
            clearInterval(sliderInterval);
            popupSlider.classList.add('hidden');
            popupSlider.removeEventListener('click', closeSlider);
        }
    });
}

// Attach event listeners
menuCards.forEach(card => {
    card.addEventListener('click', () => {
        const foodKey = card.getAttribute('data-food');
        openSlider(foodKey);
    });
});
