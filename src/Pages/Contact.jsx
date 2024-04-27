import { Helmet } from "react-helmet-async";

const Contact = () => {
  return (
    <div className="grid max-w-screen-xl my-4 grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-100 dark:text-gray-800">
      <Helmet>
        <title>Explore Asia | Contact</title>
      </Helmet>
      <div className="flex flex-col justify-between">
        <div className="py-6 md:py-0 md:px-6">
          <h1 className="text-4xl font-bold text-blue-600 mb-4">
            Contact with Us
          </h1>

          <div className="space-y-4">
            <p className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 mr-2 sm:mr-6"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span>Library Bazar, Pabna,Bangladesh</span>
            </p>
            <p className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 mr-2 sm:mr-6"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
              </svg>
              <span>+8801738672464</span>
            </p>
            <p className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 mr-2 sm:mr-6"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
              <span>cuet.shahin.eee12@gmail.com</span>
            </p>
          </div>
        </div>
        <img
          src="https://i.ibb.co/Bq4cKCB/contact-us-2993000-960-720.jpg"
          alt=""
          className="p-6"
        />
      </div>
      <div className="border-2 p-2 rounded-lg">
        <p className="pt-2 pb-4 font-bold text-xl text-center text-green-600">
          Fill in the form to start a conversation
        </p>
        <div className=" rounded-xl">
          <form noValidate="" className="space-y-6 p-4">
            <label htmlFor="name" className="text-lg">
              Full name
            </label>
            <input
              id="name"
              type="text"
              placeholder=""
              className="w-full p-3 rounded border-2 shadow-lg dark:bg-gray-100"
            />

            <div>
              <label htmlFor="email" className="text-lg">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full p-3 rounded shadow-lg border-2 dark:bg-gray-100"
              />
            </div>
            <div>
              <label htmlFor="message" className="text-lg">
                Message
              </label>
              <textarea
                id="message"
                rows="3"
                className="w-full p-3 rounded border-2 shadow-lg dark:bg-gray-100"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-3 text-sm font-bold tracking-wide uppercase rounded dark:bg-violet-600 dark:text-gray-50"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
