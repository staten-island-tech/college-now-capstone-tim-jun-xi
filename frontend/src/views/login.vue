<template>
    <div class="about">
      <div class="logincard">
        <form>
  <div class="form-group">
    <input type="text" class="form-control" id="firstName" name="firstName" placeholder="Username" required />
    <label class="form-control-label" for="firstName"></label>
  </div>
  <div class="form-group">
    <input type="text" class="form-control" id="lastName" name="lastName" placeholder="Password" required />
    <label class="form-control-label" for="lastName"></label>
  </div>
    </form>
        <h1 class="login">This is a Login page</h1>
      </div>
    </div>
  </template>
  
  <style scoped>
  @media (min-width: 1024px) {
    .about {
      min-height: 100vh;
      display: flex;
      align-items: center;
      text-align: center;
    }
  }

  .logincard{
    background-color: green;
    padding: 20px;
    border-radius: 10px;

  }

  .login{

  }

  .form-group {
  position: relative;
  min-height: 3.5em;
}

input.form-control {
  height: 3em;
  position: absolute;
  top: 0;
  left: 0;
}

label.form-control-label {
  position: absolute;
  font-size: .8em;
  top: 0;
  left: 5px;
  text-transform: uppercase;
}
  
  </style>
  