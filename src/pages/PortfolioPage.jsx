import { observer } from "mobx-react-lite";
import React from "react";
import { Link } from "react-router-dom";
import Login from "../components/Login";

function PortfolioPage() {

  return (
    <section className="portfolio-page">
    
         <div className="row w-100 d-flex bg-white rounded shadow-lg p-4 align-items-center justify-content-center mt-5 mx-0 px-0 top-element child-page">
            <h2 className="text-center bg-white p-2 text-dark text-break col-12 mx-2 px-xxl-5 px-xl-5 px-2 text-shadow cta-text"> 
            <span className="shadow-text">Portfolio</span> 
            </h2> 
          </div>
     
        <div className="container-fluid gutter-sm">
          <div className="row d-flex justify-content-center mt-5">
            <span></span>
            <div className="col-xxl-8 col-xl-8 col-lg-8 col-11 bg-secondary mt-5 rounded-top shadow">
              <h2 className="my-4 text-center text-dark shadow-text">Tools in Practice: Projects past and present</h2>
            </div>
            <div className="col-xxl-8 col-xl-8 col-lg-8 col-11 bg-light rounded-bottom px-3 shadow-lg">
              <ul>
                <li>
                  This Wesbite - Site is built on React.js.
                  <br/> 
          
                  <code>Stack: React.js, Vite, Sweetalert2, React-mobx, React-mobx-lite, Axios, Boostrap 5, SCSS, and React router. </code>
                  <br/> 
                  <br/>
                </li>
                <li>
                  <a className="text-primary" referrer="noreferrer" target="_blank" href="https://github.com/havenfricke/keepr">Keepr</a> - A full stack web application closely resembling the functionality of Pinterest with authorization capabilities, public and private content capabilties in the api logic, and profile editing.
                  <br/> 
           
                  <code>Stack: Vite, Eslint, Node.js, bcw-auth0-provider, Auth0, C#, Sweetalerts2, Axios, ASP.NET, Dapper, Vue.js, Vue Router, SCSS, MDI Icons, and Bootstrap 5.</code>
                  <br/> 
                  <br/> 
                </li>
                <li>
                  <a className="text-primary" referrer="noreferrer" target="_blank" href="https://github.com/havenfricke/PlanIt">PlanIt</a> - A full stack web application built for project management with Scrum. Authorization capabilities. Functionality includes the creation of new projects and within those projects users can be added or removed. New sprints, tasks, and notes can be added to each project.
                  <br/> 
             
                  <code>Stack: Vite, Eslint, Node.js, bcw-auth0-provider, Auth0, JavaScript, Sweetalerts2, Axios, Express.js, Dapper, Vue.js, Vue Router, SCSS, MDI Icons, and Bootstrap 5.</code>
                  <br/> 
                  <br/> 
                </li>
                <li>
                  <a className="text-primary" referrer="noreferrer" target="_blank" href="https://github.com/havenfricke/Tower">Tower</a> - A full stack web application that allows users to sign up, post an event, rsvp to other users events, and cancel events. Authorization capabilities. The app includes the functionality of no longer allowing users to rsvp and event if it is sold out and the ability to view all events that you have rsvp'd to.
                  <br/> 
            
                  <code>Stack: Vite, Eslint, Node.js, bcw-auth0-provider, Auth0, JavaScript Sweetalerts2, Axios, Express.js, Dapper, Vue.js, Vue Router, SCSS, MDI Icons, and Bootstrap 5.</code>
                  <br/> 
                  <br/> 
                </li>
                <li>
                  <a className="text-primary" referrer="noreferrer" target="_blank" href="https://github.com/havenfricke/hot-dang-homes-course">Next Headless WordPress</a> - A course taken to learn Next/React while simultaneously putting Next into testing for 116 & West to make progress on new products. (Unfinished)
                  <br/> 
          
                  <code>Stack: Apollo, React/Next, FontAwesome, GraphQL, Eslint, Tailwind CSS, uuid, and WordPress with Advanced Custom Fields/GraphiQL.</code>
                  <br/> 
                  <br/> 
                </li>
                <li>
                  <a className="text-primary" referrer="noreferrer" target="_blank" href="https://github.com/havenfricke/Svelte-Django-FullStack-Application-Starter">Svelte-Django App</a> - A project taken on to learn Sveltekit/Python/Django and better understand server-side rendering (SSR). This is a starter application with no functionality currently integrated.
                  <br/> 
            
                  <code>Stack: SvelteKit, Django, Django REST Framework.</code>
                  <br/> 
                  <br/> 
                </li>
                <li>
                  <a className="text-primary" referrer="noreferrer" target="_blank" href="http://kendallspokesmasters.com/">Kendall Spokesmasters </a>- A micro site built for the advertisement campaign done for Kendall Automotive: Kendall Spokemasters. 
                  <br/> 
         
                  <code>Stack: WordPress, Advanced Custom Fields, Gravity Forms, and Bootstrap 5.</code>
                  <br/> 
                  <br/> 
                </li>
                <li>
                 <a className="text-primary" referrer="noreferrer" target="_blank" href="https://moffetcostg.wpengine.com/">Moffet Energy Modeling</a> - A standard static website for business as a part of client work with 116 & West.
                  <br/> 
            
                  <code>Stack: WordPress, Advanced Custom Fields, Gravity Forms, and Bootstrap 5.</code>
                  <br/> 
                  <br/>
                </li>
                <li>
                  <a className="text-primary" referrer="noreferrer" target="_blank" href="https://thehouseofdesign.com/">The House of Design</a> - Site built with Hubspot CRM built in. A standard static website for business as a part of client work with 116 & West. 
                  <br/> 
              
                  <code>Stack: WordPress, Advanced Custom Fields, Gravity Forms, and Bootstrap 5.</code>
                  <br/> 
                  <br/>
                </li>
                <li>
                  <a className="text-primary" referrer="noreferrer" target="_blank" href="https://116andwest.com/">116 & West</a> - Entire site was not built by me but major areas of the site were designed and developed by me in assistance of 116 & West going through an aqusition of Klundt Hosmer including the Home Page, Work Pages, Careers, About Us, and Contact.
                  <br/> 
              
                  <code>Stack: WordPress, Advanced Custom Fields, Gravity Forms, and Bootstrap 5.</code>
                  <br/> 
                  <br/>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container-fluid gutter-sm">
          <div className="row d-flex justify-content-center">
            <span></span>
            <div className="col-xxl-8 col-xl-8 col-lg-8 col-11 bg-secondary mt-5 rounded-top shadow">
              <h2 className="my-4 text-center text-dark shadow-text">Other Projects</h2>
            </div>
            <div className="col-xxl-8 col-xl-8 col-lg-8 col-11 bg-light rounded-bottom px-3 mb-5 shadow-lg">
              <ul>
                <li>
                  <a className="text-primary" referrer="noreferrer" target="_blank" href="https://github.com/havenfricke/imageScraper">ImageScraper</a> - A tool built with puppeteer.js that takes in a url, ensures the viewport is at maximum width, and scrapes the page for all of it's images with respective filenames. 
                  <br/>
                  <code>Stack: Puppeteer</code>
                  <br/>
                  <br/>
                  <a className="text-primary" referrer="noreferrer" target="_blank" href="https://github.com/havenfricke/before-.after-slider/blob/main/index.html">Before/After Slider</a> - A component that allows two images to overlay each other and reveal or hide as the user slides the ui to the left and right. Built for before / after images of home renovations.
                  <br />
                  <code>Stack: HTML, CSS, Javascript</code>
                  <br />
                  <br />
                  <a className="text-primary" referrer="noreferrer" target="_blank" href="https://github.com/havenfricke/Lazy-Loader/blob/main/index.html">Lazy Loader</a> - A small set of code that adds a transitional element to compenents entering a viewport. The code can be altered to fade in, slide up, slide from the side, etc.
                  <br />
                  <code>Stack: HTML, CSS, Javascript</code>
                  <br />
                  <br />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container-fluid d-flex align-items-center justify-content-center mt-5 top-element">
          <div className="row d-flex align-items-center justify-content-center parallax p-3 bg-white shadow rounded">

            <h1 className="text-center text-break col-12 mx-2 my-4 px-xxl-5 px-xl-5 px-2 shadow-text cta-text text-dark pt-3"> 
              Curious about more? <br/>
              <Link to={'/demo'} className="btn bg-primary col-xxl-6 col-7 my-4 py-3 text-light cta-button cta-text">View Demonstrations</Link>
            </h1> 

         
          </div>
        </div>
    </section>
  )
}

export default observer(PortfolioPage)