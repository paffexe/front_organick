import React from "react";

import video from "../../assets/services_pg/video/service-uhd_3840_2160_25fps.mp4";

const VideoSection = () => {
  return (
    <div class="relative w-full h-[1073px] overflow-hidden mb-[122px]">
      <video
        class="absolute top-0 left-0 w-full h-full object-cover"
        src={video}
        autoPlay
        loop
        muted
      ></video>

      <div class="relative z-10 container flex items-center justify-center h-full">
        <div className=" text-customW text-center mx-auto ">
          <h1 class=" font-yellowtail text-[36px] leading-[100%] mb-[7px]">
            Organic Only
          </h1>
          <h2 className="font-roboto text-customW font-extrabold text-[50px] mb-6">
            Everyday Fresh & Clean
          </h2>
          <p className="font-openSans w-[670px] leading-[165%] text-[18px]">
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's standard dummy text ever since the
          </p>
        </div>
      </div>

      <div class="absolute inset-0 bg-black/30"></div>
    </div>
  );
};

export default VideoSection;
