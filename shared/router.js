import HeaderComponent    from '../shared/components/header.js';
import FooterComponent    from '../shared/components/footer.js';
import Utils              from '../shared/utils.js';
import Routes             from './routes.js';

const Router = async () => {

  console.log('router called');

    const header = document.getElementById('header');
    const content = document.getElementById('content');
    const footer = document.getElementById('footer');

    let request = Utils.parseUrl();
    console.log(request);
    let parsedURL = (request.resource ? '/' + request.resource : '')
    
    header.innerHTML = '';
    footer.innerHTML = '';
    if (parsedURL !== '/login') {
      console.log('inside header');
      await HeaderComponent.registerEvents();
      header.innerHTML = await HeaderComponent.render();
      await HeaderComponent.componentDidMount();
      footer.innerHTML = await FooterComponent.render();
      await FooterComponent.componentDidMount();
    }

    let page = Routes[parsedURL];  
    content.innerHTML = await page.render();      
    await page.componentDidMount();           
}

console.log('router invoked');

export default Router;