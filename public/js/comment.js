const commentFormHandler = async (event) => {
      
    // Collect values from the comment form
    const postId = document.querySelector('input[name="postId"]').value;
    const content = document.querySelector('textarea[id="comment"]').value.trim();
      
    if (content) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({ postId, content }),
        headers: { 'Content-Type': 'application/json' },
        
      });
      console.log(response);
      if (response.ok) {
        // If successful, redirect the browser to the profile page
        document.location.reload();
      } else {
        console.log(response.statusText);
      }
    }
  };
  

//   window.onload = function() {
//     var testing = document.getElementById("post-submit");
//     testing.addEventListener("click", commentFormHandler);
// }
  document
    .getElementById('post-submit')
    .addEventListener('submit', commentFormHandler);