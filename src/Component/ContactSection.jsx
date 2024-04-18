import contact from "../assets/contact-image.svg";
const ContactSection = () => {
  return (
    <div className=" my-10">
        <div>
          <h1 className="text-3xl lg:text-5xl text-center font-bold my-10">Contact Section</h1>
        </div>
      <div className="grid grid-cols-1 gap-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 bg-gray-100 text-gray-800">
        <div className="flex flex-col justify-between px-5">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold leading-tight lg:text-5xl">
              Let's talk!
            </h2>
            <div className="text-gray-600">
              Vivamus in nisl metus? Phasellus.
            </div>
          </div>
          <img
            src={contact}
            alt="Contact section svg"
            className="p-6 h-52 md:h-64"
          />
        </div>
        <form noValidate="" className="space-y-6 px-5">
          <div>
            <label htmlFor="name" className="text-sm">
              Full name
            </label>
            <input
              id="name"
              type="text"
              placeholder=""
              className="w-full p-3 rounded bg-gray-100"
            />
          </div>
          <div>
            <label htmlFor="email" className="text-sm">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full p-3 rounded bg-gray-100"
            />
          </div>
          <div>
            <label htmlFor="message" className="text-sm">
              Message
            </label>
            <textarea
              id="message"
              rows="3"
              className="w-full p-3 rounded bg-gray-100"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-violet-600 text-gray-50"
          >
            Let's Connect
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
