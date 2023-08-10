let navEl = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navEl.classList.add("nav-scrolled");
  } else if (window.scrollY < 150) {
    navEl.classList.remove("nav-scrolled");
  }
});

// Search
const searchInput = document.querySelector('input[type="search"]');
const boxes = document.querySelectorAll(".box");

searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value.toLowerCase().trim();

  boxes.forEach((box) => {
    const title = box
      .querySelector(".boxed-bottom-text p")
      .textContent.toLowerCase();

    if (title.includes(searchTerm)) {
      box.style.display = "block";
    } else {
      box.style.display = "none";
    }
  });
});

// Json

let storeData = [];

window.onload = () => {
  fetch("/json/plant_category.json")
    .then((response) => response.json())
    .then((res) => {
      storeData = res.data;
      console.log("store data", storeData);

      loadCards()
    })
    .catch((error) => {
      console.error("Error fetching JSON data:", error);
    });

    
  };
 

const learnMoreButton = document.querySelector(".learn-div");
const modalTitle = document.querySelector(".modal-title");
const modalImage = document.querySelector(".modal-image");
const modalBody = document.querySelector(".modal-body");


const boxesWrapper = document.querySelector(".boxs-wrapper");





function openStoreModal(id) {
  modalTitle.textContent = storeData[id].name;
  modalImage.src = storeData[id].image;
  modalImage.alt = storeData[id].name;

  modalBody.innerHTML = `
        <p><strong>Category</strong>: ${storeData[id]?.category}</p>
        <p><strong>Botanical Name</strong>: ${storeData[id]?.botanicalName}</p>
        <p><strong>Price</strong>: ${storeData[id]?.price}</p>
        <p><strong>Light</strong>: ${storeData[id].details.light}</p>
        <p><strong>Water</strong>: ${storeData[id].details.water}</p>
        <p><strong>Size</strong>: ${storeData[id].details.size}</p>
        <p><strong>Blooms</strong>: ${storeData[id].details.blooms}</p>
      `;
}

openStoreModal(0);


