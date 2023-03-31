import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import ContactForm from "../components/ContactForm";
import './styles/HomePage.scss'

function ContactPage(){


// useEffect(() => {
    // if (document) {
      // const stylesheet = document.createElement("link");
      // stylesheet.rel = "stylesheet";
      // stylesheet.href = "https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css";

      // document.head.appendChild(stylesheet);
    
  // }, []);

  return (
    <div className="container-fluid mx-0 px-0">
          <div className="row w-100 d-flex bg-white rounded shadow-lg p-4 align-items-center justify-content-center mt-5 mx-0 px-0 top-element child-page">
            <h1 className="text-center bg-white p-2 text-dark text-break col-12 mx-2 px-xxl-5 px-xl-5 px-2 text-shadow cta-text"> 
            <span className="shadow-text">Contact</span> 
            </h1> 
          </div>
        <div className="py-6 container-fluid">
          <ContactForm />
        </div>
    </div>
  );
}
// }

export default observer(ContactPage);
