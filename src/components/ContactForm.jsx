import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles/Form.scss"

const FORM_ENDPOINT = "https://public.herotofu.com/v1/2ad99c70-c422-11ed-8273-e194a2f79bca"; // TODO - fill on the later step

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <div className="mt-5 pt-5 text-center">
        <div className="fs-1 text-light">Thank you!</div>
        <div className="fs-4 text-light">We'll be in touch soon.</div>
        <Link className="text-light bg-primary btn mt-3" to={'/'}>Go back to homepage</Link>
      </div>
    );
  }

  return (
    <div className="row d-flex justify-content-center form">
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-12">
        <form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
      target="_blank"
    >
      <div className="mb-3 mt-5 pt-5">
        <input
          type="text"
          placeholder="Your name"
          name="name"
          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
        />
      </div>
      <div className="mb-3 pt-0">
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
        />
      </div>
      <div className="mb-3 pt-0">
        <textarea
          placeholder="Your message"
          name="message"
          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
        />
      </div>
      <div className="mb-3 pt-0">
        <button
          className="btn bg-primary"
          type="submit"
        >
          Send a message
        </button>
      </div>
    </form>
    </div>
    </div>
    
    
  );
};

export default observer(ContactForm);