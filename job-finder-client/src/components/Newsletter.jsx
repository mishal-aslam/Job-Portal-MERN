import React from "react";
import { FaEnvelopeOpenText , FaRocket} from "react-icons/fa6";

const Newsletter = () => {
  return (
    <div>
      <div>
        <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
          <FaEnvelopeOpenText />
          Email me for Jobs
        </h3>
        <p className="text-primary/75 text-base mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit Facere
          accusamus modi neque.
        </p>
        <div className="w-full space-y-4">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your Email"
            className="w-full block py-2 pl-3 border focus:outline-none"
          />
          <input
            type="submit"
            value={"subscribe"}
            className="w-full block py-2 pl-3 border bg-blue rounded-sm cursor-pointer font-semibold hover:text-blue hover:bg-white hover:border-1 hover:border-blue hover:duration-700"
          />
        </div>
      </div>

{/* second div  */}
      <div className="mt-20">
        <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
          <FaRocket />
         But Noticed Faster
        </h3>
        <p className="text-primary/75 text-base mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit Facere
          accusamus modi neque.
        </p>
        <div className="w-full space-y-4">
          <input
            type="submit"
            value={"Upload Your Resume"}
            className="w-full block py-2 pl-3 border bg-blue rounded-sm cursor-pointer font-semibold hover:text-blue hover:bg-white hover:border-1 hover:border-blue hover:duration-700"
          />
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
