import { Helmet } from "react-helmet-async";
import Countries from "../Components/Countries";
import Banner from "../Components/Banner";

const HomePage = () => {
  return (
    <div>
      <Helmet>
        <title>Explore Asia | Home</title>
      </Helmet>
      <Banner></Banner>
      <div className="mx-auto text-center my-10 space-y-4 ">
        <h1 className="text-5xl">Ctegories By Countries</h1>
        <div className="bg-pink-100 px-10">
          <Countries></Countries>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
