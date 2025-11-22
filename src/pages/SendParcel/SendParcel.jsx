import React from "react";
import { useForm, useWatch } from "react-hook-form";
import { useLoaderData } from "react-router";

const SendParcel = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const serviceCenters = useLoaderData();

  const regionsDuplicate = serviceCenters.map((c) => c.region);
  const regions = [...new Set(regionsDuplicate)];
  // explore useMemo useCallback
  const senderRegion = useWatch({ control: control, name: "senderRegion" });
  const receiverRegion = useWatch({ control: control, name: "receiverRegion" });

  const districtsByRegion = (region) => {
    if (!region) return []; // prevent undefined
    const regionDistricts = serviceCenters.filter((c) => c.region === region);
    return regionDistricts.map((d) => d.district);
  };

  const handleSendParcel = (data) => {
    console.log(data);
    const isDocument = data.parcelType === "document";
    const isSameDistrict =
      data.senderDistrict?.trim().toLowerCase() ===
      data.receiverDistrict?.trim().toLowerCase();
    const parcelWeight = parseFloat(data.parcelWeight);

    let cost = 0;
    if (isDocument) {
      cost = isSameDistrict ? 60 : 80;
    } else {
      if (parcelWeight < 3) {
        cost = isSameDistrict ? 110 : 150;
      } else {
        const minCharge = isSameDistrict ? 110 : 150;
        const extraWeight = parcelWeight - 3;
        const extraCharge = isSameDistrict
          ? extraWeight * 40
          : extraWeight * 40 + 40;
        cost = minCharge + extraCharge;
      }
    }
    console.log("cost", cost);
  };

  return (
    <div
      className="max-w-7xl mx-auto px-4 py-10 bg-white my-10 rounded-2xl
    "
    >
      <form
        onSubmit={handleSubmit(handleSendParcel)}
        className="max-w-6xl mx-auto"
      >
        {/* Title */}
        <h1 className="text-3xl font-bold text-[#073B3A]">Send A Parcel</h1>

        {/* Subtitle */}
        <p className="mt-2 text-[#073B3A] font-medium">
          Enter your parcel details
        </p>

        {/* Document / Not Document */}
        <div className="flex items-center gap-6 mt-6">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              value="document"
              {...register("parcelType")}
              className="radio radio-secondary"
              defaultChecked
            />
            <span className="text-[#073B3A] font-medium">Document</span>
          </label>

          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              value="non-document"
              {...register("parcelType")}
              className="radio radio-secondary"
            />
            <span className="text-[#073B3A] font-medium">Not-Document</span>
          </label>
        </div>

        {/* Parcel Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <fieldset>
            <label className="font-medium text-[#073B3A]">Parcel Name</label>
            <input
              type="text"
              {...register("parcelName")}
              placeholder="Parcel Name"
              className="input input-bordered w-full mt-1"
            />
          </fieldset>

          <fieldset>
            <label className="font-medium text-[#073B3A]">
              Parcel Weight (KG)
            </label>
            <input
              type="number"
              {...register("parcelWeight")}
              placeholder="Parcel Weight (KG)"
              className="input input-bordered w-full mt-1"
            />
          </fieldset>
        </div>

        {/* Sender & Receiver Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
          {/* Sender */}
          <div>
            <h3 className="text-[#073B3A] font-semibold text-lg mb-4">
              Sender Details
            </h3>

            <fieldset className="space-y-4">
              <input
                type="text"
                {...register("senderName")}
                placeholder="Sender Name"
                className="input input-bordered w-full"
              />

              <input
                type="text"
                {...register("senderEmail")}
                placeholder="Sender Email"
                className="input input-bordered w-full"
              />

              <input
                type="text"
                {...register("senderAddress")}
                placeholder="Sender Address"
                className="input input-bordered w-full"
              />

              <input
                type="text"
                {...register("senderPhoneNo")}
                placeholder="Sender Phone No"
                className="input input-bordered w-full"
              />

              {/* <input
                type="text"
                {...register('senderDistrict')}
                placeholder="Sender District"
                className="input input-bordered w-full"
              /> */}

              {/* sender region */}
              <select
                {...register("senderRegion")}
                defaultValue="Pick a Region"
                className="select select-bordered w-full"
              >
                <option disabled={true}>Select your Region</option>
                {regions.map((r, index) => (
                  <option key={index} value={r}>
                    {r}
                  </option>
                ))}
              </select>

              {/* sender district */}
              <select
                {...register("senderDistrict")}
                defaultValue="Pick a District"
                className="select select-bordered w-full"
              >
                <option disabled={true}>Pick a District</option>
                {districtsByRegion(senderRegion).map((r, index) => (
                  <option key={index} value={r}>
                    {r}
                  </option>
                ))}
              </select>

              <textarea
                placeholder="Pickup Instruction"
                className="textarea textarea-bordered w-full h-24"
              ></textarea>
            </fieldset>
          </div>

          {/* Receiver */}
          <div>
            <h3 className="text-[#073B3A] font-semibold text-lg mb-4">
              Receiver Details
            </h3>

            <fieldset className="space-y-4">
              <input
                type="text"
                {...register("receiverName")}
                placeholder="Receiver Name"
                className="input input-bordered w-full"
              />

              <input
                type="text"
                {...register("receiverEmail")}
                placeholder="Receiver Email"
                className="input input-bordered w-full"
              />

              <input
                type="text"
                {...register("receiverAddress")}
                placeholder="Receiver Address"
                className="input input-bordered w-full"
              />

              <input
                type="number"
                {...register("receiverContactNo")}
                placeholder="Receiver Contact No"
                className="input input-bordered w-full"
              />

              {/* <input
                type="text"
                {...register("receiverDistrict")}
                placeholder="Receiver District"
                className="input input-bordered w-full"
              /> */}

              {/* receiver region */}
              <select
                {...register("receiverRegion")}
                defaultValue="Pick a Region"
                className="select select-bordered w-full"
              >
                <option disabled={true}>Select your Region</option>
                {regions.map((r, index) => (
                  <option key={index} value={r}>
                    {r}
                  </option>
                ))}
              </select>

              {/* receiver District */}
              <select
                {...register("receiverDistrict")}
                defaultValue="Pick a District"
                className="select select-bordered w-full"
              >
                <option disabled={true}>Pick a District</option>
                {districtsByRegion(receiverRegion).map((d, index) => (
                  <option key={index} value={d}>
                    {d}
                  </option>
                ))}
              </select>

              <textarea
                placeholder="Delivery Instruction"
                className="textarea textarea-bordered w-full h-24"
              ></textarea>
            </fieldset>
          </div>
        </div>

        {/* Pickup Time */}
        <p className="text-sm text-[#073B3A] mt-6">
          * PickUp Time 4pm–7pm Approx.
        </p>

        {/* Button */}
        <div className="mt-8">
          <input
            type="submit"
            value="Proceed to Confirm Booking"
            className="btn w-full md:w-auto bg-[#C5F277] hover:bg-[#aee45f] text-[#073B3A] font-semibold px-8"
          ></input>
        </div>
      </form>
    </div>
  );
};

export default SendParcel;
