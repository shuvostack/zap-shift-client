import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import bannerImg1 from "../../../assets/banner/banner1.png";
import bannerImg2 from "../../../assets/banner/banner2.png";
import bannerImg3 from "../../../assets/banner/banner3.png";
import { LuArrowUpRight } from "react-icons/lu";

const Banner = () => {
  return (
    <Carousel autoPlay={true} infiniteLoop={true}>
      <div className="">
        <img src={bannerImg1} />

        {/* <div className="">
          <p className="">
            Enjoy fast, reliable parcel delivery with real-time tracking and
            zero hassle. From personal packages to business shipments — we
            deliver on time, every time.
          </p>

          <div className="flex">
            <a className="btn bg-primary rounded-lg">Track Your Parcel</a>
            <div className="h-10 w-10 flex items-center justify-center text-primary bg-[#1f1f1f] rounded-full">
              <LuArrowUpRight size={25} />
            </div>
            <a className="btn rounded-lg">Be A Rider</a>
          </div>
        </div> */}
      </div>
      <div>
        <img src={bannerImg2} />
      </div>
      <div>
        <img src={bannerImg3} />
      </div>
    </Carousel>
  );
};

export default Banner;
