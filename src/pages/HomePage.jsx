import { observer } from "mobx-react-lite";
import React from "react";
import { Link } from "react-router-dom";
import './styles/HomePage.scss'



function HomePage() {


  return (
    <section className="home-page text-light">
        <div className="container-fluid d-flex align-items-center justify-content-between mt-5 top-element shadow-lg">
          <div className="row d-flex align-items-center justify-content-center bg-white shadow">

            <div className="col-12 col-lg-3 col-xl-3 col-xxl-3">

              <div className="home-image img-fluid"></div>

            </div>

            <h1 className="fs-2 text-start text-break col-12 col-lg-6 col-xl-6 col-xxl-6 mx-2 px-xxl-5 px-xl-5 px-2 mt-3 text-dark cta-text rounded p-3"> 
              The art of presentable information and intuitively engineered data with full-stack software development.<br/>
              <Link to={'portfolio'} className="btn bg-primary col-xxl-3 col-12 my-3 py-3 text-light cta-button cta-text">Learn More</Link>
            </h1> 

          </div>
        </div>
        <div className="container-fluid gutter-sm">
          <div className="row d-flex justify-content-center mt-5 px-xl-5 px-lg-5 px-0">
            <p className="text-start text-dark px-5 my-5">
              <b className="border-bottom border-dark pb-1">Full Stack Software Developer | Front-End Centric</b>
              <br />
              <br />
              <br />
            Hello, my name is <a class="text-primary" href="https://www.linkedin.com/in/haven-fricke/">Haven</a>. 
            <br />
            <br />
            I have found over the years through my own studies, experiences, projects, and conversations that what I enjoy most in my work is creative engineering. 
            <br />
            <br />
            Whether it be engineering through problems during operations in the military, solving an algorithm to create new features in development, general research and development, or engineering sound in the studio for fun - I’m here for the inspiration needed to find the solution and produce the best outcome. 
            <br />
            <br />
            The tech industry is constantly changing. Simultaneously, continued education is a privilege to me. There is always something new to learn or keep up on. We have so much information at our fingertips because of our technology. It is possible in today's age to teach yourself something new every day. 
            <br />
            <br />
            I feel obligated to learn as much as I can this being the case. Continued education is required to adapt to real world problems, and I am here for it.
            </p>
            <h2 className="text-center text-dark shadow-text mt-5 col-12 d-block">
              Core Practices
            </h2>
          </div>
          <div className="row d-flex justify-content-around mt-5">
            <div className="px-0 mx-2 col-xxl-7 col-xl-7 col-md-10 col-10 my-5 mx-5 px-0">
                  <h3 className="p-3 mb-0 bg-light rounded-top">
                    <span className="shadow-text text-dark">Design & Accessibility Driven Products</span>
                  </h3>
                  <div className="bg-white px-0 mx-0 rounded-bottom p-2 text-dark shadow-lg bg-body-bg">
                      <ul className="mt-2 p-2 ms-3">
                        <li>
                          Accessibility standards driven by <a rel="noreferrer" className="text-primary" target="_blank" href="https://www.a11yproject.com/">A11y</a>.
                        </li>
                        <li>
                         Proven capability in translating design with history of using <a rel="noreferrer" className="text-primary" target="_blank" href="https://www.adobe.com/products/xd/learn/get-started/what-is-adobe-xd-used-for.html">Adobe XD</a> and <a rel="noreferrer" className="text-primary" target="_blank" href="https://www.figma.com/">Figma</a>.
                        </li>
                        <li>
                          Educated and practiced in SEO with tools including <a rel="noreferrer" className="text-primary" target="_blank" href="https://developer.chrome.com/docs/lighthouse/overview/">Google Lighthouse</a> and <a rel="noreferrer" className="text-primary" target="_blank" href="https://www.browserstack.com/">BrowserStack</a>. 
                        </li>
                      </ul>
                  </div>
            </div>
            <div className="px-0 mx-2 col-xxl-7 col-xl-7 col-md-10 col-10 my-5 mx-5 px-0">
                  <h3 className="p-3 mb-0 card-top bg-light rounded-top">
                  <span className="shadow-text text-dark">Architecture & Data Organization</span> 
                  </h3>
                  <div className="bg-white px-0 mx-0 rounded-bottom p-2 text-dark shadow-lg bg-body-bg">
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
      
      
          <div className="container-fluid gutter-sm mt-5 pt-5 px-5">
            <div className="row d-flex justify-content-around mt-5 tools shadow-lg rounded bg-dark text-light px-lg-5 px-xl-5 px-xxl-5 px-0 pb-xl-5 pb-xxl-5 pb-lg-5 px-0 skill-blocks">
              <div className="text-center my-5 col-12 d-block py-3 px-5">
              <h2 className="shadow-text">
                Tools currently in use or previously used
              </h2>
              </div>
             
                    <a className="col-xxl-2 col-xl-2 col-md-2 col-4" href="https://getbootstrap.com" target="_blank" rel="noreferrer"> 
                    <center>
                    <img className="img-fluid tool-img" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" height="80" width="80" alt="bootstrap"/>
                    </center>
                    </a> 
                    
                    <a className="col-xxl-2 col-xl-2 col-md-2 col-4 " href="https://www.w3schools.com/cs/" target="_blank" rel="noreferrer"> 
                    <center>
                    <img className="img-fluid tool-img" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg" height="80" width="80" alt="csharp"/> 
                    </center>
                    </a> 
                    <a className="col-xxl-2 col-xl-2 col-md-2 col-4" href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> 
                    <center>
                    <img className="img-fluid tool-img" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" height="80" width="80" alt="css3"/> 
                    </center>
                    </a> 

                    <a className="col-xxl-2 col-xl-2 col-md-2 col-4" href="https://www.djangoproject.com/" target="_blank" rel="noreferrer"> 
                    <center>
                    <img className="img-fluid tool-img" src="https://cdn.worldvectorlogo.com/logos/django.svg" height="80" width="80" alt="django"/> 
                    </center>
                   
                    </a> 

                    <a className="col-xxl-2 col-xl-2 col-md-2 col-4" href="https://www.docker.com/" target="_blank" rel="noreferrer"> 
                    <center>
                    <img className="img-fluid tool-img" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg" height="80" width="80" alt="docker"/> 
                    </center>
                  
                    </a> 

                    <a className="col-xxl-2 col-xl-2 col-md-2 col-4" href="https://dotnet.microsoft.com/" target="_blank" rel="noreferrer"> 
                    <center>
                    <img className="img-fluid tool-img" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/dot-net/dot-net-original-wordmark.svg" height="80" width="80" alt="dotnet"/> 
                    </center>
                   
                    </a> 

                    <a className="col-xxl-2 col-xl-2 col-md-2 col-4" href="https://expressjs.com" target="_blank" rel="noreferrer"> 
                    <center>
                    <img className="img-fluid tool-img" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" height="80" width="80" alt="express"/> 
                    </center>
                   
                    </a> 

                    <a className="col-xxl-2 col-xl-2 col-md-2 col-4" href="https://www.figma.com/" target="_blank" rel="noreferrer"> 
                    <center>
                    <img className="img-fluid tool-img" src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" height="80" width="80" alt="figma"/> 
                    </center>
                   
                    </a> 

                    <a className="col-xxl-2 col-xl-2 col-md-2 col-4" href="https://git-scm.com/" target="_blank" rel="noreferrer"> 
                    <center>
                    <img className="img-fluid tool-img" src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" height="80" width="80" alt="git"/> 
                    </center>
                 
                    </a> 

                    <a className="col-xxl-2 col-xl-2 col-md-2 col-4" href="https://graphql.org" target="_blank" rel="noreferrer"> 
                    <center>
                    <img className="img-fluid tool-img" src="https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg" height="80" width="80" alt="graphql"/> 
                    </center>
                 
                    </a> 

                    <a className="col-xxl-2 col-xl-2 col-md-2 col-4" href="https://heroku.com" target="_blank" rel="noreferrer"> 
                    <center>
                    <img className="img-fluid tool-img" src="https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg" height="80" width="80" alt="heroku"/> 
                    </center>
                
                    </a> 

                    <a className="col-xxl-2 col-xl-2 col-md-2 col-4" href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> 
                    <center>
                    <img className="img-fluid tool-img" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" height="80" width="80" alt="html5"/> 
                    </center>
                 
                    </a> 

                    <a className="col-xxl-2 col-xl-2 col-md-2 col-4" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> 
                    <center>
                    <img className="img-fluid tool-img" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" height="80" width="80" alt="javascript"/> 
                    </center>
               
                    </a> 

                    <a className="col-xxl-2 col-xl-2 col-md-2 col-4" href="https://www.mongodb.com/" target="_blank" rel="noreferrer"> 
                    <center>
                    <img className="img-fluid tool-img" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" height="80" width="80" alt="mongodb"/> 
                    </center>
             
                    </a> 

                    <a className="col-xxl-2 col-xl-2 col-md-2 col-4" href="https://www.mysql.com/" target="_blank" rel="noreferrer"> 
                    <center>
                    <img className="img-fluid tool-img" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" height="80" width="80" alt="mysql"/> 
                    </center>
              
                    </a> 

                    <a className="col-xxl-2 col-xl-2 col-md-2 col-4" href="https://nextjs.org/" target="_blank" rel="noreferrer"> 
                    <center>
                    <img className="img-fluid tool-img" src="https://cdn.worldvectorlogo.com/logos/nextjs-2.svg" height="80" width="80" alt="nextjs"/> 
                    </center>
               
                    </a> 

                    <a className="col-xxl-2 col-xl-2 col-md-2 col-4" href="https://nodejs.org" target="_blank" rel="noreferrer"> 
                    <center>
                    <img className="img-fluid tool-img" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" height="80" width="80" alt="nodejs"/> 
                    </center>
              
                    </a> 

                    <a className="col-xxl-2 col-xl-2 col-md-2 col-4" href="https://www.php.net" target="_blank" rel="noreferrer"> 
                    <center>
                    <img className="img-fluid tool-img" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg" height="80" width="80" alt="php"/> 
                    </center>
             
                    </a> 

                    <a className="col-xxl-2 col-xl-2 col-md-2 col-4" href="https://www.postgresql.org" target="_blank" rel="noreferrer"> 
                    <center>
                    <img className="img-fluid tool-img" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" height="80" width="80" alt="postgresql"/> 
                    </center>
                
                    </a> 

                    <a className="col-xxl-2 col-xl-2 col-md-2 col-4" href="https://www.python.org" target="_blank" rel="noreferrer"> 
                    <center>
                    <img className="img-fluid tool-img" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" height="80" width="80" alt="python"/> 
                    </center>
                  
                    </a> 

                    <a className="col-xxl-2 col-xl-2 col-md-2 col-4" href="https://reactjs.org/" target="_blank" rel="noreferrer"> 
                    <center>
                    <img className="img-fluid tool-img" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" height="80" width="80" alt="react"/> 
                    </center>
                
                    </a> 

                    <a className="col-xxl-2 col-xl-2 col-md-2 col-4" href="https://sass-lang.com" target="_blank" rel="noreferrer"> 
                    <center>
                    <img className="img-fluid tool-img" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" height="80" width="80" alt="sass"/> 
                    </center>
                  
                    </a> 

                    <a className="col-xxl-2 col-xl-2 col-md-2 col-4" href="https://svelte.dev" target="_blank" rel="noreferrer"> 
                    <center>
                    <img className="img-fluid tool-img" src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg" height="80" width="80" alt="svelte"/> 
                    </center>
                   
                    </a> 

                    <a className="col-xxl-2 col-xl-2 col-md-2 col-4" href="https://tailwindcss.com/" target="_blank" rel="noreferrer"> 
                    <center>
                    <img className="img-fluid tool-img" src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" height="80" width="80" alt="tailwind"/> 
                    </center>
                
                    </a> 

                    <a className="col-xxl-2 col-xl-2 col-md-2 col-4" href="https://vuejs.org/" target="_blank" rel="noreferrer"> 
                    <center>
                    <img className="img-fluid tool-img" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original-wordmark.svg" height="80" width="80" alt="vuejs"/> 
                    </center>
   
                    </a> 

                    <a className="col-xxl-2 col-xl-2 col-md-2 col-4" href="https://www.adobe.com/products/xd.html" target="_blank" rel="noreferrer"> 
                    <center>
                    <img className="img-fluid tool-img" src="https://cdn.worldvectorlogo.com/logos/adobe-xd.svg" height="80" width="80" alt="xd"/> 
                    </center>

                    </a>
                    <a className="col-xxl-2 col-xl-2 col-md-2 col-4" href="https://wordpress.com/" target="_blank" rel="noreferrer"> 
                    <center>
                    <img className="img-fluid tool-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/WordPress_blue_logo.svg/2048px-WordPress_blue_logo.svg.png" height="80" width="80" alt="blank"/> 
                    </center>
   
                    </a> 

                    <a className="col-xxl-2 col-xl-2 col-md-2 col-4" href="" target="_blank" rel="noreferrer"> 
                    <center>
                    {/* <img className="img-fluid tool-img" src="" height="80" width="80" alt="blank"/>  */}
                    </center>

                    </a>
                    <a className="col-xxl-2 col-xl-2 col-md-2 col-4" href="" target="_blank" rel="noreferrer"> 
                    <center>
                    {/* <img className="img-fluid tool-img" src="" height="80" width="80" alt="blank"/>  */}
                    </center>
   
                    </a> 

                    <a className="col-xxl-2 col-xl-2 col-md-2 col-4" href="" target="_blank" rel="noreferrer"> 
                    <center>
                    {/* <img className="img-fluid tool-img" src="" height="80" width="80" alt="blank"/>  */}
                    </center>

                    </a>
            </div>
          </div>
        
        <div className="container-fluid d-flex align-items-center justify-content-center mt-5 top-element">
          <div className="row d-flex align-items-center justify-content-center p-0 bg-white shadow rounded">

            <h1 className="text-center text-break col-12 mx-2 my-4 px-xxl-5 px-xl-5 px-2 shadow-text cta-text text-dark pt-3"> 
              Interested in connecting?
              <Link to={'contact'} className="btn bg-primary col-xxl-4 col-6 my-4 py-3 text-light cta-button cta-text">Get in contact</Link>
            </h1> 

         
          </div>
        </div>
    </section>
  )
}

export default observer(HomePage)
