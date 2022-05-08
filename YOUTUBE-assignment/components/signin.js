function signIn() {
  return `<div id="main">
    <form id="login_user">
      <h2>Login</h2>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRagBe9FuW5njkukzkarxnXuTPOceRj-EFUPA&usqp=CAU" alt="">
      <label for="">Username</label>
      <input type="text" id="username-login" placeholder="UserName" required/>
      <label for="">Password</label>
      <input type="password" id="password-login" placeholder="Password" required/>

      <input type="submit" value="SUBMIT" />
      <div id="option">OR</div>
      <a id="foot" href="./signup.html">Create your account</a>
    </form>
  </div>`;
}

async function login() {
  let login_data = {
    username: document.getElementById("username-login").value,
    password: document.getElementById("password-login").value,
  };

  login_data = JSON.stringify(login_data);

  let login_url = `https://masai-api-mocker.herokuapp.com/auth/login`;

  let response = await fetch(login_url, {
    method: "POST",
    body: login_data,
    headers: {
      "Content-Type": "application/json",
    },
  });

  let data = await response.json();
  console.log("Data: ", data);

  let username = document.getElementById("username-login").value;

  getUser(username, data.token);
}

async function getUser(username, token) {
  let api = `https://masai-api-mocker.herokuapp.com/user/${username}`;

  let res = await fetch(api, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  let data = await res.json();
  window.location.href = "index.html";
  console.log("data: ", data);
}

//exporting three functions
export { signIn, login, getUser };
