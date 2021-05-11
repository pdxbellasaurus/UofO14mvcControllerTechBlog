const commentFormHandler = async (event) => {
      
    // Collect values from the comment form
    const post_id = document.querySelector('input[name="post_id"]').value;
    const content = document.querySelector('textarea[id="comment"]').value.trim();
      
    if (content) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({ post_id, content }),
        headers: { 'Content-Type': 'application/json' }
      });

      if (response.ok) {
        // If successful, redirect the browser to the profile page
        document.location.reload();
      } else {
        console.log(response.statusText);
      }
    }
  };
  
    document.getElementById("post-submit").onclick = function() {commentFormHandler()};