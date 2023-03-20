import { observer } from "mobx-react-lite";
import React from "react";
import { Link } from "react-router-dom";
import './styles/HomePage.scss'


function HomePage() {

  return (
    <section className="home-page text-light">
        <div className="container-fluid d-flex align-items-center justify-content-center mt-5 top-element">
          <div className="row d-flex align-items-center justify-content-center">

            <h1 className="text-center text-break col-12 mx-2 px-xxl-5 px-xl-5 px-2 mt-3 text-shadow cta-text"> 
              Mastering the art of presentable information with front-end engineering and development.
            </h1> 

          <Link to={'portfolio'} className="btn bg-primary col-xxl-2 col-5 my-3 py-3 text-light cta-button cta-text">Learn More</Link>
          </div>
        </div>
        <div className="container-fluid gutter-sm">
          <div className="row d-flex justify-content-center mt-5">
            <h2 className="text-center mt-5 col-12 d-block">
              Core Practices
            </h2>
          </div>
          <div className="row d-flex justify-content-around mt-5">
            <div className="px-0 mx-2 col-xxl-5 col-xl-5 col-md-5 col-9 my-5 d-block shadow-lg">
                  <h3 className="p-3 mb-0 bg-secondary rounded-top">
                    Design & Accessibility <br/>Driven Products
                  </h3>
                  <div className="bg-light px-0 mx-0 rounded-bottom p-2 text-dark">
                      <ul className="mt-2 p-2 ms-3">
                        <li>
                          Accessibility standards driven by <a rel="noreferrer" className="text-primary" target="_blank" href="https://www.a11yproject.com/">A11y</a>.
                        </li>
                        <li>
                         Proven capability in translating design with history of using <a rel="noreferrer" className="text-primary" target="_blank" href="https://www.adobe.com/products/xd/learn/get-started/what-is-adobe-xd-used-for.html">Adobe XD</a><br/> and <a rel="noreferrer" className="text-primary" target="_blank" href="https://www.figma.com/">Figma</a>.
                        </li>
                        <li>
                          Educated and practiced in SEO with tools including <a rel="noreferrer" className="text-primary" target="_blank" href="https://developer.chrome.com/docs/lighthouse/overview/">Google Lighthouse</a> and <a rel="noreferrer" className="text-primary" target="_blank" href="https://www.browserstack.com/">BrowserStack</a>. 
                        </li>
                      </ul>
                  </div>
            </div>
            <div className="px-0 mx-2 col-xxl-5 col-xl-5 col-md-5 col-9 my-5 shadow-lg">
                  <h3 className="p-3 mb-0 card-top bg-secondary rounded-top">
                  Architecture & Data <br />Organization 
                  </h3>
                  <div className="bg-light px-0 mx-0 rounded-bottom p-2 text-dark">
                      <ul className="mt-2 p-2 ms-3">
                       <li>
                          <a rel="noreferrer" className="text-primary" target="_blank" href="https://pvha.hashnode.dev/mvcs-architecture">MVC+S Software Model</a> for both front-end and back-end.
                       </li>
                       <li>
                          Best practices in writing and maintaining <a rel="noreferrer" className="text-primary" target="_blank" href="https://workat.tech/machine-coding/tutorial/introduction-clean-code-software-design-principles-nwu4qqc63e09">clean code</a> using tools such as the <a className="text-primary" target="_blank" href="https://www.bmc.com/blogs/solid-design-principles/#:~:text=SOLID%20is%20an%20acronym%20that,some%20important%20benefits%20for%20developers.">SOLID principles.</a>
                       </li>
                       <li>
                          Well versed in putting together libraries primarily in Javascript and C# using <a rel="noreferrer" className="text-primary" target="_blank" href="https://www.npmjs.com/">Node Package Manager</a>, <a rel="noreferrer" className="text-primary" target="_blank" href="https://yarnpkg.com/">Yarn</a>, <a rel="noreferrer" className="text-primary" target="_blank" href="https://www.nuget.org/packages">Nuget</a>, and <a rel="noreferrer" className="text-primary" target="_blank" href="https://learn.microsoft.com/en-us/powershell/">Powershell</a>
                       </li>
                      </ul>
                  </div>
            </div>
          </div> 
          </div>
      
      
          <div className="container-fluid gutter-sm">
            <div className="row d-flex justify-content-around mt-5 tools">
              <h2 className="text-center my-5 col-12 d-block pt-5">
                Tools currently in use or previously used
              </h2>
                    <a class="col-xxl-4 col-xl-4 col-md-4 col-12 my-3 mx-1 mt-xxl-5 mt-xl-5 mt-3" href="https://getbootstrap.com" target="_blank" rel="noreferrer"> 
                    <center>
                    <img class="img-fluid" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" height="80" width="80" alt="bootstrap"/>
                    </center>
                    </a> 
                    
                    <a class="col-xxl-4 col-xl-4 col-md-4 col-12 my-3 mx-1 mt-xxl-5 mt-xl-5 mt-3" href="https://www.w3schools.com/cs/" target="_blank" rel="noreferrer"> 
                    <center>
                    <img class="img-fluid" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg" height="80" width="80" alt="csharp"/> 
                    </center>
                    </a> 
                    <a class="col-xxl-4 col-xl-4 col-md-4 col-12 my-3 mx-1" href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> 
                    <center>
                    <img class="img-fluid" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" height="80" width="80" alt="css3"/> 
                    </center>
                    </a> 

                    <a class="col-xxl-4 col-xl-4 col-md-4 col-12 my-3 mx-1" href="https://www.djangoproject.com/" target="_blank" rel="noreferrer"> 
                    <center>
                    <img class="img-fluid" src="https://cdn.worldvectorlogo.com/logos/django.svg" height="80" width="80" alt="django"/> 
                    </center>
                   
                    </a> 

                    <a class="col-xxl-4 col-xl-4 col-md-4 col-12 my-3 mx-1" href="https://www.docker.com/" target="_blank" rel="noreferrer"> 
                    <center>
                    <img class="img-fluid" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg" height="80" width="80" alt="docker"/> 
                    </center>
                  
                    </a> 

                    <a class="col-xxl-4 col-xl-4 col-md-4 col-12 my-3 mx-1" href="https://dotnet.microsoft.com/" target="_blank" rel="noreferrer"> 
                    <center>
                    <img class="img-fluid" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/dot-net/dot-net-original-wordmark.svg" height="80" width="80" alt="dotnet"/> 
                    </center>
                   
                    </a> 

                    <a class="col-xxl-4 col-xl-4 col-md-4 col-12 my-3 mx-1" href="https://expressjs.com" target="_blank" rel="noreferrer"> 
                    <center>
                    <img class="img-fluid" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" height="80" width="80" alt="express"/> 
                    </center>
                   
                    </a> 

                    <a class="col-xxl-4 col-xl-4 col-md-4 col-12 my-3 mx-1" href="https://www.figma.com/" target="_blank" rel="noreferrer"> 
                    <center>
                    <img class="img-fluid" src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" height="80" width="80" alt="figma"/> 
                    </center>
                   
                    </a> 

                    <a class="col-xxl-4 col-xl-4 col-md-4 col-12 my-3 mx-1" href="https://git-scm.com/" target="_blank" rel="noreferrer"> 
                    <center>
                    <img class="img-fluid" src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" height="80" width="80" alt="git"/> 
                    </center>
                 
                    </a> 

                    <a class="col-xxl-4 col-xl-4 col-md-4 col-12 my-3 mx-1" href="https://graphql.org" target="_blank" rel="noreferrer"> 
                    <center>
                    <img class="img-fluid" src="https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg" height="80" width="80" alt="graphql"/> 
                    </center>
                 
                    </a> 

                    <a class="col-xxl-4 col-xl-4 col-md-4 col-12 my-3 mx-1" href="https://heroku.com" target="_blank" rel="noreferrer"> 
                    <center>
                    <img class="img-fluid" src="https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg" height="80" width="80" alt="heroku"/> 
                    </center>
                
                    </a> 

                    <a class="col-xxl-4 col-xl-4 col-md-4 col-12 my-3 mx-1" href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> 
                    <center>
                    <img class="img-fluid" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" height="80" width="80" alt="html5"/> 
                    </center>
                 
                    </a> 

                    <a class="col-xxl-4 col-xl-4 col-md-4 col-12 my-3 mx-1" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> 
                    <center>
                    <img class="img-fluid" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" height="80" width="80" alt="javascript"/> 
                    </center>
               
                    </a> 

                    <a class="col-xxl-4 col-xl-4 col-md-4 col-12 my-3 mx-1" href="https://www.mongodb.com/" target="_blank" rel="noreferrer"> 
                    <center>
                    <img class="img-fluid" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" height="80" width="80" alt="mongodb"/> 
                    </center>
             
                    </a> 

                    <a class="col-xxl-4 col-xl-4 col-md-4 col-12 my-3 mx-1" href="https://www.mysql.com/" target="_blank" rel="noreferrer"> 
                    <center>
                    <img class="img-fluid" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" height="80" width="80" alt="mysql"/> 
                    </center>
              
                    </a> 

                    <a class="col-xxl-4 col-xl-4 col-md-4 col-12 my-3 mx-1" href="https://nextjs.org/" target="_blank" rel="noreferrer"> 
                    <center>
                    <img class="img-fluid" src="https://cdn.worldvectorlogo.com/logos/nextjs-2.svg" height="80" width="80" alt="nextjs"/> 
                    </center>
               
                    </a> 

                    <a class="col-xxl-4 col-xl-4 col-md-4 col-12 my-3 mx-1" href="https://nodejs.org" target="_blank" rel="noreferrer"> 
                    <center>
                    <img class="img-fluid" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" height="80" width="80" alt="nodejs"/> 
                    </center>
              
                    </a> 

                    <a class="col-xxl-4 col-xl-4 col-md-4 col-12 my-3 mx-1" href="https://www.php.net" target="_blank" rel="noreferrer"> 
                    <center>
                    <img class="img-fluid" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg" height="80" width="80" alt="php"/> 
                    </center>
             
                    </a> 

                    <a class="col-xxl-4 col-xl-4 col-md-4 col-12 my-3 mx-1" href="https://www.postgresql.org" target="_blank" rel="noreferrer"> 
                    <center>
                    <img class="img-fluid" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" height="80" width="80" alt="postgresql"/> 
                    </center>
                
                    </a> 

                    <a class="col-xxl-4 col-xl-4 col-md-4 col-12 my-3 mx-1" href="https://www.python.org" target="_blank" rel="noreferrer"> 
                    <center>
                    <img class="img-fluid" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" height="80" width="80" alt="python"/> 
                    </center>
                  
                    </a> 

                    <a class="col-xxl-4 col-xl-4 col-md-4 col-12 my-3 mx-1" href="https://reactjs.org/" target="_blank" rel="noreferrer"> 
                    <center>
                    <img class="img-fluid" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" height="80" width="80" alt="react"/> 
                    </center>
                
                    </a> 

                    <a class="col-xxl-4 col-xl-4 col-md-4 col-12 my-3 mx-1" href="https://sass-lang.com" target="_blank" rel="noreferrer"> 
                    <center>
                    <img class="img-fluid" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" height="80" width="80" alt="sass"/> 
                    </center>
                  
                    </a> 

                    <a class="col-xxl-4 col-xl-4 col-md-4 col-12 my-3 mx-1" href="https://svelte.dev" target="_blank" rel="noreferrer"> 
                    <center>
                    <img class="img-fluid" src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg" height="80" width="80" alt="svelte"/> 
                    </center>
                   
                    </a> 

                    <a class="col-xxl-4 col-xl-4 col-md-4 col-12 my-3 mx-1" href="https://tailwindcss.com/" target="_blank" rel="noreferrer"> 
                    <center>
                    <img class="img-fluid" src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" height="80" width="80" alt="tailwind"/> 
                    </center>
                
                    </a> 

                    <a class="col-xxl-4 col-xl-4 col-md-4 col-12 my-3 mx-1" href="https://vuejs.org/" target="_blank" rel="noreferrer"> 
                    <center>
                    <img class="img-fluid" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original-wordmark.svg" height="80" width="80" alt="vuejs"/> 
                    </center>
   
                    </a> 

                    <a class="col-xxl-4 col-xl-4 col-md-4 col-12 my-3 mx-1" href="https://www.adobe.com/products/xd.html" target="_blank" rel="noreferrer"> 
                    <center>
                    <img class="img-fluid" src="https://cdn.worldvectorlogo.com/logos/adobe-xd.svg" height="80" width="80" alt="xd"/> 
                    </center>

                    </a>
            </div>
          </div>
        
        <div className="container-fluid d-flex align-items-center justify-content-center mt-5 top-element">
          <div className="row d-flex align-items-center justify-content-center parallax">

            <h1 className="text-center text-break col-12 mx-2 px-xxl-5 px-xl-5 px-2 text-shadow cta-text"> 
              Interested in connecting?
            </h1> 

          <Link to={'contact'} className="btn bg-primary col-xxl-2 col-5 my-5 py-3 text-light cta-button cta-text">Get in contact</Link>
          </div>
        </div>
    </section>
  )
}

export default observer(HomePage)
