import { Helmet } from "react-helmet-async";
import Countries from "../Components/Countries";

const HomePage = () => {
  return (
    <div>
      <Helmet>
        <title>Tourist | Home</title>
      </Helmet>
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
