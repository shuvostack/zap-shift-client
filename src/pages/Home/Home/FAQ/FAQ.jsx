import React from "react";
import { LuArrowUpRight } from "react-icons/lu";

const FAQ = () => {
  return (
    <section class="w-full max-w-3xl mx-auto">
      <div class="text-center mb-10">
        <h2 class="text-3xl md:text-4xl font-bold text-secondary mb-4">
          Frequently Asked Question (FAQ)
        </h2>
        <p class="text-gray-500 max-w-2xl mx-auto text-sm md:text-base">
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce pain, and strengthen your body
          with ease!
        </p>
      </div>

      <div class="flex flex-col gap-4">
        <div
          tabIndex={0}
          className="collapse collapse-arrow bg-base-100 border-base-300 border"
        >
          <div className="collapse-title font-semibold">
            How does this posture corrector work?
          </div>
          <div className="collapse-content text-sm">
            A posture corrector works by providing support and gentle alignment
            to your shoulders, back, and spine, encouraging you to maintain
            proper posture throughout the day. Here’s how it typically
            functions: A posture corrector works by providing support and gentle
            alignment to your shoulders.
          </div>
        </div>

        <div class="collapse collapse-arrow bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
          <div
            tabIndex={0}
            className="collapse collapse-arrow bg-base-100 border-base-300 border"
          >
            <div className="collapse-title font-semibold">
              How do I create an account?
            </div>
            <div className="collapse-content text-sm">
              Click the "Sign Up" button in the top right corner and follow the
              registration process.
            </div>
          </div>
          <div class="collapse-content text-gray-600">
            <p>
              Yes, it is designed to be adjustable for various body types and
              ages.
            </p>
          </div>
        </div>

        <div
          tabIndex={0}
          className="collapse collapse-arrow bg-base-100 border-base-300 border"
        >
          <div className="collapse-title font-semibold">
            How do I create an account?
          </div>
          <div className="collapse-content text-sm">
            Click the "Sign Up" button in the top right corner and follow the
            registration process.
          </div>
        </div>

        <div
          tabIndex={0}
          className="collapse collapse-arrow bg-base-100 border-base-300 border"
        >
          <div className="collapse-title font-semibold">
            How do I create an account?
          </div>
          <div className="collapse-content text-sm">
            Click the "Sign Up" button in the top right corner and follow the
            registration process.
          </div>
        </div>

        <div
          tabIndex={0}
          className="collapse collapse-arrow bg-base-100 border-base-300 border"
        >
          <div className="collapse-title font-semibold">
            How do I create an account?
          </div>
          <div className="collapse-content text-sm">
            Click the "Sign Up" button in the top right corner and follow the
            registration process.
          </div>
        </div>
      </div>
      <div className="flex justify-center my-10">
        <a className="btn bg-primary rounded-lg">See More FAQ's</a>
        <div className="h-10 w-10 flex items-center justify-center text-primary bg-[#1f1f1f] rounded-full">
          <LuArrowUpRight size={25} />
        </div>
      </div>
    </section>
  );
};

export default FAQ;
