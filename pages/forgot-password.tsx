import React from "react";

const ForgotPassword = () => {
  return (
    <>
      <div className="bg-white ">
        <div className="flex justify-center h-screen">
          <div className="flex max-w-md pl-6 pr-6 mt-16 mx-auto lg:w-2/6">
            <div className="flex-1">
              <div className="text-center">
                <h2 className="text-6xl font-bold text-blue-500 text-center">
                  KtoPrzyjedzie
                </h2>

                <p className="text-3xl font-medium text-center mt-7 text-gray-700 p-5">
                  Przypomnij hasło!
                </p>
              </div>

              <div className="mt-8">
                <form>
                  <div>
                    <label className="block mb-2 text-lg text-gray-600 ">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="example@example.com"
                      className="block w-full h-14 px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md     focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div className="mt-6">
                    <button className="w-full text-2xl mt-8 py-4 px-4 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400">
                      Przypomnij hasło!
                    </button>
                  </div>
                </form>

                <p className="mt-6 text-sm text-center text-gray-400">
                  Pamiętasz hasło?{" "}
                  <a
                    href="login"
                    className="text-blue-500 focus:outline-none focus:underline hover:underline"
                  >
                    Zaloguj się!
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
