import React, { useState } from "react";
import { assets } from "../assets/assets";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "0f11d3d2-5aeb-4d9d-9ce6-d50247b4967b");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      toast.success("Form Submitted Successfully!", { position: "bottom-right" });
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error("Submission Failed!", { position: "bottom-right" });
      setResult(data.message);
    }
  };

  return (
    <div
      className="flex flex-col items-center justify-center 
    container mx-auto sm:p-14 md:px-20 lg:px-32 w-full overflow-hidden"
      id="Contact"
    >
      <div className="flex text-center items-center mt-3">
        <h1 className="text-3xl">
          Contact{" "}
          <span className="text-2xl block underline-offset-4 decoration-1 font-light">
            FOR MORE DETAILS
          </span>
          <p className="text-sm">Our experts will reach you!</p>
        </h1>
      </div>
      <form onSubmit={onSubmit}>
        <div className="flex md:flex-row sm:flex-col w-full gap-4 min-h-[100px]">
          <div className="rounded flex-1 text-center mt-10 mr-20">
            <img src={assets.brand_img} alt="contact" />
          </div>
          <div className="shadow-2xl rounded p-4 flex-1 text-center mt-10">
            <div className="w-full text-left">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                className="w-full border shadow-2xl rounded py-3 px-4 mt-2 mb-4"
                required
              />
            </div>
            <div className="w-full text-left">
              <input
                type="text"
                name="address"
                placeholder="Address"
                className="w-full border shadow-2xl rounded py-3 px-4 mt-2 mb-4"
                required
              />
            </div>
            <div className="w-full text-left">
              <textarea
                name="message"
                placeholder="Message"
                className="w-full h-36 border shadow-2xl rounded py-3 px-4 mt-2 mb-4"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-600 font-semibold p-3 px-7 text-white rounded resize-none"
            >
              {result ? result : "Send Message"}
            </button>
            <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
