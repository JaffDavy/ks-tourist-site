export default function Main() {
  return (
    <div className="py-10 flex flex-col justify-center gap-8 border border-gray-300 rounded-lg mb-20 w-fit max-w-[1024px] mx-auto p-10">
      <h1 className="text-4xl">Contact us</h1>
      <div className="flex flex-row gap-5">
        <div>
          <h3>First Name</h3>
          <input
            type="text"
            placeholder="Input your First Name In Here"
            className="w-full md:w-100 bg-white p-3 rounded-lg border border-gray-300 flex-grow"
          />
        </div>
        <div>
          <h3>Last Name</h3>
          <input
            type="text"
            placeholder="Input your Last Name In Here"
            className="w-full md:w-100 bg-white p-3 rounded-lg border border-gray-300 flex-grow"
          />
        </div>
      </div>
      <div>
        <h3>Email Address</h3>
        <input
          type="text"
          placeholder="Input your Email Address In Here"
          className="w-full md:w-205 bg-white p-3 rounded-lg border border-gray-300 grow"
        />
      </div>
      <div>
        <h3>Phone Number</h3>
        <input
          type="text"
          placeholder="Input your Phone Number In Here"
          className="w-full md:w-205 bg-white p-3 rounded-lg border border-gray-300 grow"
        />
      </div>
      <div class="mb-4">
        <label for="message" class="block text-gray-700 text-sm font-bold mb-2">
          Your Message
        </label>
        <textarea
          id="message"
          name="message"
          rows="4"
          placeholder="Write a message..."
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-gray-300 resize-y"
        ></textarea>
      </div>
      <button className="bg-[#c7923E] p-5 text-white rounded-2xl w-40">
        Submit
      </button>
    </div>
  );
}
