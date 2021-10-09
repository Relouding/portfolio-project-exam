const firstPage = "https://wordpress.relouding.eu/wp-json/wp/v2/posts?per_page=99"
const postContainer = document.querySelector(".slide-container");

async function getBlogPosts(url){
    try {
        const response = await fetch(url);
        const posts = await response.json();

        console.log(posts);

        posts.forEach(function(post) {
          if(post.id == 71){
          postContainer.innerHTML += `
          <div class="slides fade" style="display: block;">
          <a href="blogspecific.html?id=${post.id}"><img src="${post.better_featured_image.source_url}" alt="${post.title.rendered}"></a>
          <div class="text">${post.title.rendered}</div>
          </div>
          <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
          <a class="next" onclick="plusSlides(1)">&#10095;</a>
          `
          }else{
          postContainer.innerHTML += `
          <div class="slides fade">
          <a href="blogspecific.html?id=${post.id}"><img src="${post.better_featured_image.source_url}"></a>
          <div class="text">${post.title.rendered}</div>
          </div>
          <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
          <a class="next" onclick="plusSlides(1)">&#10095;</a>
          `
          }
          })
        }

    catch(error) {
        console.log(error);
        postContainer.innerHTML = message("error", error);
    }
}

getBlogPosts(firstPage);



var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}