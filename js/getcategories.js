const categoryUrl = "https://wordpress.relouding.eu/wp-json/wp/v2/posts?categories=16"
const categoryContainer = document.querySelector(".container-category");

async function getCategoryPosts(url){
    try {
        const response = await fetch(url);
        const posts = await response.json();

        console.log(posts);

        posts.forEach(function(post){
            categoryContainer.innerHTML += `
            <div class="category-posts">
            <p>${post.title.rendered}</p>
            <a href="blogspecific.html?id=${post.id}"><img class="animation" src="${post.better_featured_image.source_url}"></a>
            </div>
            `
          })
        }
    
        catch(error) {
            console.log(error);
            categoryContainer.innerHTML = message("error", error);
        }
    }

getCategoryPosts(categoryUrl);
