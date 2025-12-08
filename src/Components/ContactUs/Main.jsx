import React from "react";

export default function Main() {
  return (
    <div className="py-10 flex flex-col justify-center gap-8 border border-gray-300 rounded-lg mb-20 w-full max-w-4xl mx-auto p-4 md:p-10">
      <h1 className="text-3xl md:text-4xl font-bold">Contact us</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <h3>First Name</h3>
          <input
            type="text"
            placeholder="Input your First Name In Here"
            className="w-full bg-white p-3 rounded-lg border border-gray-300"
          />
        </div>
        <div>
          <h3>Last Name</h3>
          <input
            type="text"
            placeholder="Input your Last Name In Here"
            className="w-full bg-white p-3 rounded-lg border border-gray-300"
          />
        </div>
      </div>

      <div>
        <h3>Email Address</h3>
        <input
          type="text"
          placeholder="Input your Email Address In Here"
          className="w-full bg-white p-3 rounded-lg border border-gray-300"
        />
      </div>
      <div>
        <h3>Phone Number</h3>
        <input
          type="text"
          placeholder="Input your Phone Number In Here"
          className="w-full bg-white p-3 rounded-lg border border-gray-300"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="message"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Your Message
        </label>
        <textarea
          id="message"
          name="message"
          rows="4"
          placeholder="Write a message..."
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-gray-300 resize-y"
        ></textarea>
      </div>

      <button className="bg-[#c7923E] p-5 text-white rounded-2xl w-full md:w-40 hover:bg-[#a57b34] transition duration-300">
        Submit
      </button>
    </div>
  );
}
