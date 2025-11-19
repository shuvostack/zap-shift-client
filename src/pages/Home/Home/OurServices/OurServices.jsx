import React from "react";
import { motion } from "motion/react"
import { FcServices } from "react-icons/fc";
import { BiWorld } from "react-icons/bi";
import { AiOutlineSolution } from "react-icons/ai";
import { GiMoneyStack } from "react-icons/gi";
import { MdOutlineHomeRepairService } from "react-icons/md";
import { TbTruckReturn } from "react-icons/tb";
import { CiDeliveryTruck } from "react-icons/ci";

const OurServices = () => {
  const info = [
    {
      id: 1,
      title: "Express  & Standard Delivery",
      desc: "We deliver parcels within 24-72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4-6 hours from pick-up to drop-off.",
      icon: <CiDeliveryTruck size={50} />,
    },
    {
      id: 2,
      title: "Nationwide Delivery",
      desc: "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48-72 hours.",
      icon: <BiWorld size={50} />,
    },
    {
      id: 3,
      title: "Fulfillment Solution",
      desc: "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
      icon: <AiOutlineSolution size={50} />,
    },
    {
      id: 4,
      title: "Cash on Home Delivery",
      desc: "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
      icon: <GiMoneyStack size={50} />,
    },
    {
      id: 5,
      title: "Corporate Service / Contract In Logistics",
      desc: "Customized corporate services which includes warehouse and inventory management support.",
      icon: <MdOutlineHomeRepairService size={50} />,
    },
    {
      id: 6,
      title: "Parcel Return",
      desc: "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
      icon: <TbTruckReturn size={50} />,
    },
  ];

  return (
    <section className="bg-secondary py-20 rounded-xl p-8">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl text-white font-bold mb-6 "
        >
          Our Services
        </motion.h2>
        <p className="text-gray-300 mb-14 max-w-2xl mx-auto">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.
        </p>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {info.map((i) => (
            <motion.div
              key={i.id}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="card bg-base-200 shadow-md rounded-2xl py-10 px-6 flex flex-col items-center hover:bg-primary"
            >
              <div
                className={`w-20 h-20 flex items-center justify-center rounded-full ${i.color} mb-6 text-secondary`}
              >
                {i.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-base-content">
                {i.title}
              </h3>
              <p className="text-gray-500 text-sm">{i.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
