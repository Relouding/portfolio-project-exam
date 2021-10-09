const commentContainer = document.querySelector(".container-comments");

const baseUrl = "https://wordpress.relouding.eu/wp-json/wp/v2/comments?post=" + id;

console.log(baseUrl);

async function getBlogComments(url){
    const response = await fetch(url);
    const comments = await response.json();

    console.log(comments);

    comments.forEach(function(comment){
      commentContainer.innerHTML += `
        <div class="blog-comments">
        <div>${comment.author_name}:</div>
        <div><p>${comment.content.rendered}</p></div>
        <div><p>&#9998; ${new Date(comment.date).toLocaleString()}</p></div>
        </div>
        `
      })
    }


getBlogComments(baseUrl);
