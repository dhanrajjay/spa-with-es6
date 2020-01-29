let HeaderComponent = {    
    registerEvents: async () => {
      this.returnDashboard = function() {        
        window.location.href = window.location.origin + '/#/dashboard';
      }
      this.returnToLogin = function() {        
        window.location.href = window.location.origin + '/#/login';
      }            
    },
    render: async () => {      
      return `<nav class="navbar navbar-expand-sm navbar-dark bg-dark">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbarXs">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="navbar-collapse collapse" id="collapsingNavbarXs">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Service Now
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <a class="dropdown-item" href="#">Problem</a>
                    <a class="dropdown-item" href="#">Incident</a>
                  </div>
                </li>    
                <li class="nav-item">                    
                    <a class="nav-link hand-cursor" 
                    onclick="(${this.returnDashboard})()" id="correlation">Correlation</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" 
                    onclick="(${this.returnToLogin})()" 
                    id="logout">Logout</a>
                </li>
            </ul>
        </div>
      </nav>`;        
    },
    componentDidMount: async () => {       
      // function getElementById(id) {
      //   return document.getElementById(id);
      // }
      // getElementById("correlation").addEventListener ("click",  () => {  
      //   this.returnDashboard();
      // })
      // getElementById("logout").addEventListener ("click",  () => {            
      //   this.returnToLogin();
      // })
    }

}

export default HeaderComponent;