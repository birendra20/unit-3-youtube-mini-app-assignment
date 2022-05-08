function navbar() {
  return `<nav id="nav-bar">
    <div class="first-box">
      <button class="icon-btn"><a href="/index.html"><i class="fas fa-bars"></i></a></button>
      <button class="icon-btn">
        <img
          class="icon"
          src="data:image/png;base64,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"
          alt="Youtube Icon"
        />
      </button>
    </div>

    <div class="second-box">
      <input type="text" id="video" placeholder="Search..." />
      <button class="icon-btn search" onclick="searchVideo()">
        <i class="fa fa-search"></i>
      </button>
    </div>
    <div class="icon-bars">
      <button class="icon-btn"><i class="fa fa-microphone"></i></button>
      <button class="icon-btn"><i class="fas fa-video"></i></button>
      <button class="icon-btn"><i class="fas fa-bell"></i></button>
      <button class="icon-btn"><i class="fas fa-th"></i></button>
      <button class="icon-btn user"><i class="fas fa-user-alt"></i></button>
    </div>
    <div id="login_page">
        <button><a href="./signin.html">Login</a></button>
        <button><a href="./signup.html">Create</a></button>
      </div>
  </nav>`;
}

export default navbar;
