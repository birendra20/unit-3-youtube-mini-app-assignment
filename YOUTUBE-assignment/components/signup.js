function signup() {
  return `<div id="main">
    <form id="formDetails">
      <h2>Create Account</h2>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRagBe9FuW5njkukzkarxnXuTPOceRj-EFUPA&usqp=CAU" alt="">
      <label for="">Name</label>
      <input type="text" id="name" placeholder="Name" required/>
      <label for="">Email</label>
      <input type="email" id="email" placeholder="Email" required />

      <label for="">Username</label>
      <input type="text" id="username" placeholder="UserName" required/>
      <label for="">Password</label>
      <input type="password" id="password" placeholder="Password" required />

      <label for="">Mobile No. </label>
      <input type="number" id="mobile" placeholder="Mobile" required/>
      <label for="">Description</label>
      <input type="text" id="description" placeholder="Description" />

      <input type="submit" value="SUBMIT" />
      <div id="option">OR</div>
      <a id="foot" href="./signin.html">Go to Login Page</a>
    </form>
  </div>`;
}

async function Register() {
  // e.preventDefault();
  try {
    var register_data = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
      username: document.getElementById("username").value,
      mobile: document.getElementById("mobile").value,
      description: document.getElementById("description").value,
    };

    register_data = JSON.stringify(register_data);

    console.log(register_data);
  } catch (err) {
    console.log("error: ", err);
  }

  let reg_api = `https://masai-api-mocker.herokuapp.com/auth/register`;

  let response = await fetch(reg_api, {
    method: "POST",

    body: register_data,

    headers: {
      "Content-Type": "application/json",
    },
  });

  let data = await response.json();
  window.location.href = "signin.html";
  return data;

  //   console.log("data: ", data);
}

//exporting both the functions
export { signup, Register };
