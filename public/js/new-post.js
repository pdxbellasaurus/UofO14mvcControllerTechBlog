const postFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#post-title').value.trim();
    const post_body = document.querySelector('#post-content').value.trim();
      
    if (title && post_body) {
   const response = await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({ title, post_body }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
    };

  document
  .querySelector('.post-form')
  .addEventListener('submit', postFormHandler);