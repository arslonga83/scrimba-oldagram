const posts = [
  {
      name: "Vincent van Gogh",
      username: "vincey1853",
      location: "Zundert, Netherlands",
      avatar: "images/avatar-vangogh.jpg",
      post: "images/post-vangogh.jpg",
      comment: "just took a few mushrooms lol",
      likes: 21
  },
  {
      name: "Gustave Courbet",
      username: "gus1819",
      location: "Ornans, France",
      avatar: "images/avatar-courbet.jpg",
      post: "images/post-courbet.jpg",
      comment: "i'm feelin a bit stressed tbh",
      likes: 4
  },
      {
      name: "Joseph Ducreux",
      username: "jd1735",
      location: "Paris, France",
      avatar: "images/avatar-ducreux.jpg",
      post: "images/post-ducreux.jpg",
      comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
      likes: 152
  }
]

const mainSection = document.querySelector("#main-section")

function renderPosts() {
  mainSection.innerHTML = ''
  for (let i = 0; i < posts.length; i++) {
    mainSection.innerHTML += `
      <section class="post">
      <div class="post-header">
        <img class="user-icon" src=${posts[i].avatar} alt="user avatar">
        <div>
          <h4>${posts[i].name}</h4>
          <p>${posts[i].location}</p>
        </div>
      </div>
      <img class="post-img" src=${posts[i].post} alt="selfie of user">
      <div class="post-footer">
        <div class="icons">
          <img class="like-btn" src="./images/icon-heart.png" alt="heart icon">
          <img src="./images/icon-comment.png" alt="speech bubble">
          <img src="./images/icon-dm.png" alt="envelope icon">
        </div>
        <h4 class="likes">${posts[i].likes} likes</h4>
        <p><span class="username">${posts[i].username}</span> ${posts[i].comment}</p>
      </div>
    </section>
  
    `
  }
}

function likeBtn() {
  const buttons = document.querySelectorAll('.like-btn');
  const likes = document.querySelectorAll('.likes');
  
  for (let i = 0; i < buttons.length; i++) {
    let liked = false;
    buttons[i].addEventListener('click', () => {
      if (!liked) {
        buttons[i].src = "./images/heart.png";
        posts[i].likes += 1;
        liked = true;
      } else {
        buttons[i].src = "./images/icon-heart.png";
        posts[i].likes -= 1;
        liked = false;
      }
      likes[i].textContent = `${posts[i].likes} likes`;
    })
  }
}

renderPosts()
likeBtn()