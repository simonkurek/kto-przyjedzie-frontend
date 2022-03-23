import React from "react";
import NameHeader from "../../components/name-header";
import Ride from "../../components/ride";
import Subtitle from "../../components/subtitle";

const Dashboard = () => {
  return (
    <div className="h-screen">
      <div className="container mx-auto pt-10 max-w-3xl">
        <NameHeader />
        <Subtitle text="21.03 - 25.03" />
        <div className="py-8">
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Kto
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Kiedy
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <Ride
                    name={"Szymon"}
                    date={"poniedziałek"}
                    status={"zaplanowane"}
                  />
                  <Ride
                    name={"Marcin"}
                    date={"wtorek"}
                    status={"zaplanowane"}
                  />
                  <Ride name={"Szymon"} date={"środa"} status={"zaplanowane"} />
                  <Ride
                    name={"Marcin"}
                    date={"czwartek"}
                    status={"zaplanowane"}
                  />
                  <Ride
                    name={"Szymon"}
                    date={"piątek"}
                    status={"zaplanowane"}
                  />
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
