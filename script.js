fetch('https://fakestoreapi.com/products')
  .then((response) => response.json())
  .then((json) => renderCards(json));

const renderCards = (posts) => {
  const wrap = document.querySelector('.wrap');

  posts.forEach((post) => {
    wrap.innerHTML += `
         <div class="card">
            <img src=${post.image} alt="">          
            <h3>${post.title}</h3>
            <p>${post.description}</p>
        </div>
        `;
  });

  const searchInput = document.querySelector('.search');

  searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase()
    const filteredPosts = posts.filter(post => post.title.toLowerCase().includes(query))

    wrap.innerHTML = ''

    filteredPosts.forEach((post) => {
        wrap.innerHTML += `
             <div class="card">
                <img src=${post.image} alt="">          
                <h3>${post.title}</h3>
                <p>${post.description}</p>
            </div>
            `;
      });
  });
};
