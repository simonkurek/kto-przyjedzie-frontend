import { NextPage } from "next/types";
import { useState } from "react";
import NameHeader from "../../components/name-header";
import Subtitle from "../../components/subtitle";

const Login: NextPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    console.log(email, password);
    setEmail("");
    setPassword("");
    setError("jd test");
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div className="bg-white ">
        {error && (
          <div className="flex w-full max-w-sm mx-auto mt-10 overflow-hidden bg-white rounded-lg shadow-md">
            <div className="flex items-center justify-center w-12 bg-red-500">
              <svg
                className="w-6 h-6 text-white fill-current"
                viewBox="0 0 40 40"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z" />
              </svg>
            </div>

            <div className="px-4 py-2 -mx-3">
              <div className="mx-3">
                <span className="font-semibold text-red-500 ">Błąd</span>
                <p className="text-sm text-gray-600 ">{error}</p>
              </div>
            </div>
          </div>
        )}
        <div className="flex justify-center h-screen">
          <div className="flex max-w-md pl-6 pr-6 mt-16 mx-auto lg:w-2/6">
            <div className="flex-1">
              <div className="text-center">
                <NameHeader />
                <Subtitle text={"Zaloguj się!"} />
              </div>

              <div className="mt-8">
                <div>
                  <label className="block mb-2 text-lg text-gray-600 ">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="example@example.com"
                    className="block w-full h-14 px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md     focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div className="mt-6">
                  <div className="flex justify-between mb-2">
                    <label className="text-lg text-gray-600">Hasło</label>
                    <a
                      href="/auth/forgot-password"
                      className="text-sm text-gray-400 focus:text-blue-500 hover:text-blue-500 hover:underline"
                    >
                      Zapomniałeś hasła?
                    </a>
                  </div>

                  <input
                    type="password"
                    name="password"
                    id="password"
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Hasło"
                    className="block w-full h-14 px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md   focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div className="mt-6">
                  <button
                    onClick={handleLogin}
                    className="w-full text-2xl mt-8 py-4 px-4 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400"
                  >
                    Zaloguj się!
                  </button>
                </div>

                <p className="mt-6 text-sm text-center text-gray-400">
                  Nie masz konta?{" "}
                  <a
                    href="/auth/signup"
                    className="text-blue-500 focus:outline-none focus:underline hover:underline"
                  >
                    Zarejestruj się!
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

export default Login;
