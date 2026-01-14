import React from "react";

export const users =[
    {username:"admin", password:"1234"},
    {username:"user", password:"1234"},
    {username:"guest", password:"1234"},
    
]


function Login() {
  return (
    <>
      <div>
        Kullanıcı adınızı giriniz: 
        <input type="text" />
      </div>
      <div>
        Şifrenizi giriniz: 
        <input type="password" />
      </div>
      <button>Log in</button>
    </>
  );
}

export default Login;
