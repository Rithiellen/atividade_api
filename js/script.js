const API_KEY = 'd375ab60a7e2fe5608c1979d179bb51a'; 
const UPLOAD_URL = 'https://api.imgbb.com/1/upload'; 
const UPLOAD_FORM = document.getElementById('uploadForm');
const IMAGE_INPUT = document.getElementById('imageInput');
const GALLERY_CONTAINER = document.getElementById('imageGallery');

async function loadImages() {
  const images = JSON.parse(localStorage.getItem('imagesData')) || [];
  renderImages(images);
}

function renderImages(images) {
  GALLERY_CONTAINER.innerHTML = '';
  images.forEach((image) => {
    const imageCard = document.createElement('div');
    imageCard.classList.add('image-card');

    const imgElement = document.createElement('img');
    imgElement.src = image.url;  

    const removeBtn = document.createElement('button');
    removeBtn.classList.add('remove-btn');
    removeBtn.innerHTML = '×';
    removeBtn.onclick = () => deleteImage(image.url); 

    const favoriteBtn = document.createElement('button');
    favoriteBtn.classList.add('favorite-btn');
    favoriteBtn.innerHTML = image.favorite ? '❤️' : '🤍';  
    favoriteBtn.onclick = () => toggleFavorite(image.url);

    const captionInput = document.createElement('input');
    captionInput.type = 'text';
    captionInput.placeholder = 'Adicione uma legenda...';
    captionInput.value = image.caption || '';
    captionInput.oninput = () => updateCaption(image.url, captionInput.value);

    imageCard.appendChild(imgElement);
    imageCard.appendChild(favoriteBtn);
    imageCard.appendChild(captionInput);
    imageCard.appendChild(removeBtn);
    GALLERY_CONTAINER.appendChild(imageCard);
  });
}

UPLOAD_FORM.addEventListener('submit', async (e) => {
  e.preventDefault();
  const file = IMAGE_INPUT.files[0];
  if (file) {
    const formData = new FormData();
    formData.append('image', file);
    formData.append('key', API_KEY); 

    try {
      const response = await fetch(UPLOAD_URL, {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      
      if (data.success) {
        const imageUrl = data.data.url;
        const images = JSON.parse(localStorage.getItem('imagesData')) || [];
        images.push({ 
          url: imageUrl, 
          favorite: false,  
          caption: ''       
        });
        localStorage.setItem('imagesData', JSON.stringify(images));
        loadImages();  
      } else {
        alert('Erro ao fazer upload da imagem.');
      }
    } catch (error) {
      console.error('Erro ao adicionar imagem:', error);
    }
  } else {
    alert('Por favor, selecione uma imagem.');
  }
});

async function deleteImage(imageUrl) {
  if (confirm('Tem certeza que deseja remover esta imagem?')) {
    const images = JSON.parse(localStorage.getItem('imagesData')) || [];
    const updatedImages = images.filter(image => image.url !== imageUrl);
    localStorage.setItem('imagesData', JSON.stringify(updatedImages));
    loadImages(); 
  }
}

function toggleFavorite(imageUrl) {
  const images = JSON.parse(localStorage.getItem('imagesData')) || [];
  const image = images.find(img => img.url === imageUrl);
  if (image) {
    image.favorite = !image.favorite; 
    localStorage.setItem('imagesData', JSON.stringify(images));
    loadImages(); 
  }
}

function updateCaption(imageUrl, caption) {
  const images = JSON.parse(localStorage.getItem('imagesData')) || [];
  const image = images.find(img => img.url === imageUrl);
  if (image) {
    image.caption = caption; 
    localStorage.setItem('imagesData', JSON.stringify(images));
  }
}

loadImages();