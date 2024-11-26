import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { GrTwitter } from "react-icons/gr";
import { GrInstagram } from "react-icons/gr";
const FindUsOn = () => {
  return (
    <div>
      <h2 className="text-xl font-bold my-3">Find Us On</h2>
      <div className="join join-vertical rounded-sm flex *:bg-base-100 border">
        <button className="btn join-item justify-start text-lg"><FaFacebookSquare className="fill-[#1877F2]"></FaFacebookSquare>Facebook</button>
        <button className="btn justify-start join-item text-lg"><GrTwitter className="fill-cyan-400"></GrTwitter>Twitter</button>
        <button className="btn join-item justify-start text-lg"><GrInstagram className="fill-[#833AB4]"></GrInstagram>Instagram</button>
      </div>
    </div>
  );
};

export default FindUsOn;
