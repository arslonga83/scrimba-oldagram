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
  mainSection.innerHTML += `
  <section class="post">
  <div class="post-header">
    <img class="user-icon" src="./images/avatar-vangogh.jpg" alt="van gogh headshot">
    <div>
      <h4>Vincent van Gogh</h4>
      <p>Zudert, Netherlands</p>
    </div>
  </div>
  <img class="post-img" src="./images/post-vangogh.jpg" alt="van gogh portrait">
  <div class="post-footer">
    <div class="icons">
      <img src="./images/icon-heart.png" alt="heart icon">
      <img src="./images/icon-comment.png" alt="speech bubble">
      <img src="./images/icon-dm.png" alt="envelope icon">
    </div>
    <h4>21,492 likes</h4>
    <p><span>vincey1853</span> just took a few mushrooms lol</p>
  </div>
</section>
  
  `
}

renderPosts()