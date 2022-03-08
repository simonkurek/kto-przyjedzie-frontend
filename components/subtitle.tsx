import React from "react";

type Props = {
  text: string;
};

const Subtitle = ({ text }: Props) => {
  return (
    <p className="text-2xl font-medium text-center mt-7 text-gray-700 p-5">
      {text}
    </p>
  );
};

export default Subtitle;
