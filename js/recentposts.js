const recentPostsUrl = "https://wordpress.relouding.eu/wp-json/wp/v2/posts?per_page=4"
const recentContainer = document.querySelector(".container-recent");

async function getRecentPosts(url){
    try {
        const response = await fetch(url);
        const posts = await response.json();

        console.log(posts);

    posts.forEach(function(post){
        recentContainer.innerHTML += `
        <div class="recent-posts">
        <a href="blogspecific.html?id=${post.id}"><img class="animation" src="${post.better_featured_image.source_url}"></a>
        </div>
        `
      })
    }

    catch(error) {
        console.log(error);
        recentContainer.innerHTML = message("error", error);
    }
}

getRecentPosts(recentPostsUrl);