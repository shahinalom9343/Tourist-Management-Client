const Team = () => {
  return (
    <section className="border-2 rounded-xl py-6 dark:bg-gray-100 dark:text-gray-800">
      <div className="container flex flex-col items-center justify-center p-4 mx-auto space-y-4 sm:p-10">
        <h1 className="text-4xl text-teal-500 font-bold leading-none text-center sm:text-5xl">
          Our team
        </h1>
        <p className="max-w-3xl text-center dark:text-gray-600">
          At Explore Asia, we are driven by a diverse and talented team of
          professionals who are passionate about guiding you to travel our
          SouthEast Asia region. Together,Our team is united by a shared
          commitment to you, and we are dedicated to try your comfortable and
          safe travelling.
        </p>
        <div className="flex flex-row flex-wrap-reverse justify-center">
          <div className="flex flex-col justify-center m-8 text-center">
            <img
              alt=""
              className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
              src="https://source.unsplash.com/100x100/?portrait?5"
            />
            <p className="text-xl font-semibold leading-tight">
              Mosarraf Hosain
            </p>
            <p className="dark:text-gray-600">Web developer</p>
          </div>
          <div className="flex flex-col justify-center m-8 text-center">
            <img
              alt=""
              className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
              src="https://source.unsplash.com/100x100/?portrait?1"
            />
            <p className="text-xl font-semibold leading-tight">
              Arham Shafayat
            </p>
            <p className="dark:text-gray-600">Managing Director</p>
          </div>
          <div className="flex flex-col justify-center m-8 text-center">
            <img
              alt=""
              className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
              src="https://source.unsplash.com/100x100/?portrait?2"
            />
            <p className="text-xl font-semibold leading-tight">Tanvir Aktar</p>
            <p className="dark:text-gray-600">Visual Designer</p>
          </div>
          <div className="flex flex-col justify-center m-8 text-center">
            <img
              alt=""
              className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
              src="https://source.unsplash.com/100x100/?portrait?3"
            />
            <p className="text-xl font-semibold leading-tight">Shihab Uddin</p>
            <p className="dark:text-gray-600">Guide Director</p>
          </div>
          <div className="flex flex-col justify-center m-8 text-center">
            <img
              alt=""
              className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
              src="https://source.unsplash.com/100x100/?portrait?4"
            />
            <p className="text-xl font-semibold leading-tight">Asraf Ali</p>
            <p className="dark:text-gray-600">Chief of Technical support</p>
          </div>

          <div className="flex flex-col justify-center m-8 text-center">
            <img
              alt=""
              className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
              src="https://source.unsplash.com/100x100/?portrait?0"
            />
            <p className="text-xl font-semibold leading-tight">
              Md. Shahin Alom
            </p>
            <p className="dark:text-gray-600">CEO & CTO</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
