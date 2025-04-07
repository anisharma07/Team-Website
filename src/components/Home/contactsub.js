"use client";
import React, { useState } from "react";

const Contact = () => {
  const initValues = { name: "", email: "", message: "" };
  const initState = { isLoading: false, error: "", values: initValues };

  const [state, setState] = useState(initState);
  const [touched, setTouched] = useState({});

  const { values, isLoading, error } = state;

  const onBlur = ({ target }) =>
    setTouched((prev) => ({ ...prev, [target.name]: true }));

  const handleChange = ({ target }) => {
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));
  };

  const onSubmit = async () => {
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));
    try {
      // Assume sendContactForm is your API function
      await sendContactForm(values);
      setTouched({});
      setState(initState);
      alert("Message sent.");
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error.message,
      }));
      alert("Error! Please try again.");
    }
  };

  return (
    <div className="flex flex-row justify-center items-center h-screen w-[100vw] p-3 m-3">
      <div
        className="bg-slate-500 bg-opacity-30 rounded-2xl flex text-center justify-center h-[100%] items-center text-[5rem] londrina-font shadow-2xl w-[45%] sm:hidden "
        style={{
          textShadow:
            "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #0ff, 0 0 40px #0ff, 0 0 50px #0ff, 0 0 60px #0ff, 0 0 70px #0ff",
        }}
      >
        Get <br /> IN Touch
      </div>
      <section
        id="contact"
        className="h-[100%] w-[50%] sm:w-[90%] text-white aldrich-font"
      >
        <div className=" mx-auto mt-12 ">
          <div className="max-w-md mx-auto mt-5">
            <h2 className="text-4xl font-bold">Contact</h2>
            <div className="mb-5">
              <label htmlFor="name" className="block mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                className={`border rounded px-3 py-2 w-full text-black ${
                  touched.name && !values.name ? "border-red-300" : ""
                }`}
                value={values.name}
                onChange={handleChange}
                onBlur={onBlur}
              />
              {touched.name && !values.name && (
                <span className="text-red-500">Required</span>
              )}
            </div>
            <div className="mb-5">
              <label htmlFor="email" className="block mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className={`border rounded px-3 py-2 w-full text-black ${
                  touched.email && !values.email ? "border-red-300" : ""
                }`}
                value={values.email}
                onChange={handleChange}
                onBlur={onBlur}
              />
              {touched.email && !values.email && (
                <span className="text-red-500">Required</span>
              )}
            </div>
            <div className="mb-5">
              <label htmlFor="message" className="block mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Enter your message"
                className={`border rounded px-3 py-2 w-full text-black ${
                  touched.message && !values.message ? "border-red-300" : ""
                }`}
                value={values.message}
                onChange={handleChange}
                onBlur={onBlur}
              />
              {touched.message && !values.message && (
                <span className="text-red-500">Required</span>
              )}
            </div>
            <button
              className="border-2
            border-blue-500  text-blue-500 px-4 py-2 rounded disabled:border-gray-400 disabled:text-gray-600"
              disabled={!values.name || !values.email || !values.message}
              onClick={onSubmit}
            >
              {isLoading ? "Loading..." : "Submit"}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
