import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <div className="grid h-screen place-items-center">
        <div className="mb-20">
          <h1 className="text-6xl font-bold text-blue-500 text-center">
            KtoPrzyjedzie
          </h1>
          <h3 className="text-3xl font-medium text-center mt-7 text-gray-700 p-5">
            Dowiedz się
            <span className="text-blue-500"> kto </span>
            dziś
            <span className="text-blue-500"> przyjedzie </span>
          </h3>
          <a href="login" className="m-5">
            <div className="text-2xl mt-8 mx-4 py-4 px-4 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 text-center">
              Zaloguj się!
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;
