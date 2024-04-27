import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <div>
      <Helmet>
        <title>Explore Asia | About</title>
      </Helmet>
      <section className="dark:bg-gray-100 dark:text-gray-800">
        <div className="flex flex-col md:flex-row justify-between md:gap-20 md:my-10">
          <div className="text-5xl md:text-start text-red-400 text-center my-2">
            Our Benifits
          </div>
          <div className="text-justify">
            It's important to note that China also offers a wealth of
            attractions and experiences for tourists, including its rich
            history, iconic landmarks like the Great Wall and the Terracotta
            Army, vibrant cities like Beijing and Shanghai, and picturesque
            landscapes such as the Zhangjiajie National Forest Park. The choice
            between Southeast Asia and China ultimately depends on individual
            preferences, interests, and the specific experiences one seeks
            during their travels. Many travelers are drawn to the opportunity to
            explore a variety of cultures within a relatively small geographic
            area.Booking a tour with us can offer you convenience and peace of
            mind. We handle all the logistics, including transportation,
            accommodation, and activities, allowing you to relax and enjoy your
            vacation without worrying about the details.
          </div>
        </div>
        <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
          <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
            Frequently Asked Questions?
          </h2>
          <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
            <div>
              <h3 className="font-semibold">
                Why Your Choose SouthEast Asia for travel?
              </h3>
              <p className="mt-1 dark:text-gray-600">
                Southeast Asia is known for its rich cultural diversity. The
                region is home to numerous countries, including Thailand,
                Vietnam, Cambodia, Indonesia, and Malaysia, each with its unique
                traditions, cuisines, and historical sites.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">
                How are these Region environment and people?
              </h3>
              <p className="mt-1 dark:text-gray-600">
                The people of Southeast Asia are known for their warmth,
                friendliness, and hospitality. Whether you're interacting with
                locals in bustling cities or remote villages, you're likely to
                encounter genuine kindness and generosity.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">
                Can I Affordable with my Costing?
              </h3>
              <p className="mt-1 dark:text-gray-600">
                Compared to some parts of China, Southeast Asia is generally
                considered more affordable for travelers. Accommodation,
                transportation, and food costs can be relatively lower, making
                it an attractive destination for budget-conscious travelers.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
