let navEl = document.querySelector('.navbar')

window.addEventListener('scroll',()=>{
    if(window.scrollY > 50){
navEl.classList.add('nav-scrolled')
    }
    else if(window.scrollY<150){
        navEl.classList.remove('nav-scrolled')
    }
})
// Add an event listener to the "Learn More" button
const learnMoreButton = document.querySelector('.learn-div');
const modalTitle = document.querySelector('.modal-title');
const modalImage = document.querySelector('.modal-image');
const modalBody = document.querySelector('.modal-body');

learnMoreButton.addEventListener('click', () => {
  fetch('json\plant_category.json') 
    .then(response => response.json())
    .then(data => {
      // Populate modal content with data from the JSON
      modalTitle.textContent = data.name;
      modalImage.src = data.image; // Set the image source
      modalImage.alt = data.name; // Set the alt attribute for accessibility

      modalBody.innerHTML = `
        <p><strong>Category</strong>: ${data.category}</p>
        <p><strong>Botanical Name</strong>: ${data.botanicalName}</p>
        <p><strong>Price</strong>: ${data.price}</p>
        <p><strong>Light</strong>: ${data.details.light}</p>
        <p><strong>Water</strong>: ${data.details.water}</p>
        <p><strong>Size</strong>: ${data.details.size}</p>
        <p><strong>Blooms</strong>: ${data.details.blooms}</p>
        
      `;
    })
    .catch(error => {
      console.error('Error fetching JSON data:', error);
    });
});
