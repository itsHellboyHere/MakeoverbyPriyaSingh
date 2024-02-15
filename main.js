const galleryImages = [
    {
        imageUrl: "Images/img1.jpg"
    },
    {
        imageUrl: "Images/img2.jpeg"
    },
    {
        imageUrl: "Images/img3.jpeg"
    },
    {
        imageUrl: "Images/img4.jpeg"
    },
    {
        imageUrl: "Images/img5.jpeg"
    },
    {
        imageUrl: "Images/img6.jpeg"
    },
    {
        imageUrl: "Images/img7.jpeg"
    },
    {
        imageUrl: "Images/img8.jpg"
    },
    
]
const gallerySection = document.getElementById('gallery-section');
// function to create HTML gallery card.
function createGallery() {
    galleryImages.map((image) => {
        let galleryCard = document.createElement('div');
        galleryCard.classList.add('box');

        let galleryImage = document.createElement('img');
        galleryImage.src = image.imageUrl;
        galleryCard.appendChild(galleryImage);
        gallerySection.appendChild(galleryCard);
    })
};

createGallery();