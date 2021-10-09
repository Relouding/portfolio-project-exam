const detailContainer = document.querySelector(".container-posts");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);


const url = "https://wordpress.relouding.eu/wp-json/wp/v2/posts/" + id;

console.log(url);

async function fetchPost() {

    try {
        const response = await fetch(url);
        const post = await response.json();

        console.log(post);

        createHtml(post);
      
    }
    catch(error) {
        console.log(error);
        detailContainer.innerHTML = message("there is an error", error);
    }

}

fetchPost();

function createHtml(post) {
    document.title = `${post.title.rendered}`;
    detailContainer.innerHTML = `
        <div class="blog-posts">
        <div><h1>${post.title.rendered}</h1></div>
        <img id="id-image" class="animation" src="${post.better_featured_image.source_url}" alt="${post.title.rendered}">
        <div><p>${post.content.rendered}</p></div>
        <p>&#9998; ${new Date(post.date).toLocaleString()}</p>
        </div>
    `;
    clickScreenshot();
}

var modal = document.getElementById("modal-id");

function clickScreenshot() {
var img = document.getElementById("id-image");
var modalImg = document.getElementById("image-id");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
};
window.addEventListener("click", function (img) {
    if (img.target.id == "modal-id") {
      modal.style.display = "none";
    }
  });
}