import React, { useState } from "react";
import Lottie from "react-lottie";
import * as animationData from "./wating.json";
import { useIsDevelopment } from "hooks";

const Wating = () => {
  const isDevelopment = useIsDevelopment();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="d-flex align-items-center flex-column">
      <Lottie
        options={defaultOptions}
        height={400}
        width={400}
        style={{
          marginBottom: -40,
        }}
      />
      <h5 className="mt-0 pt-0" data-selenium-id={isDevelopment ? "please wait" : undefined}>
        لطفا کمی صبر کنید تا شروع شود
      </h5>
    </div>
  );
};
export default Wating;
