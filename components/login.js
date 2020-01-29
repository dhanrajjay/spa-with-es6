let LoginComponent = {
    render: async () => {
      return `<div class="container">
        <form class="form-signin">
          <img class="mb-4" src="/docs/4.3/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72">
          <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
          <label for="email" class="sr-only">Email address</label>
          <input type="email" id="email" class="form-control" placeholder="Email address" required="" autofocus="">
          <label for="password" class="sr-only">Password</label>
          <input type="password" id="password" class="form-control" placeholder="Password" required="">
          <div class="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me"> Remember me
            </label>
          </div>
          <button class="btn btn-lg btn-primary btn-block" type="submit" id="submit_btn">Sign in</button>              
      </form>
      </div>`;
    },
    componentDidMount: async () => {
        document.getElementById("submit_btn").addEventListener ("click",  () => {
            let email       = document.getElementById("email");
            let pass        = document.getElementById("password");
            // router navigation
            window.location.href = window.location.origin + '/#/';
        })
    }
}

export default LoginComponent;