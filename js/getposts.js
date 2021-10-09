const baseUrl = "https://wordpress.relouding.eu/wp-json/wp/v2/posts?per_page=10"
const postContainer = document.querySelector(".container-posts");
const perPage = document.querySelector(".per-page-container");


async function getBlogPosts(url){
    try {
        const response = await fetch(url);
        const posts = await response.json();

        console.log(posts);

    posts.forEach(function(post){
        postContainer.innerHTML += `
        <div class="blog-posts overflow animation">
        <div><h2>${post.title.rendered}</h2></div>
        <div><p>${post.content.rendered}</p></div>
        <div><a href="blogspecific.html?id=${post.id}">read more</a>
        </div>
        `
      })
    }

    catch(error) {
        console.log(error);
        postContainer.innerHTML = message("error", error);
    }
}

getBlogPosts(baseUrl);

    perPage.onclick = function(){
        const secondUrl = "https://wordpress.relouding.eu/wp-json/wp/v2/posts" + "?per_page=99";
        postContainer.innerHTML = "";
        perPage.innerHTML = "";
        getBlogPosts(secondUrl);
}
