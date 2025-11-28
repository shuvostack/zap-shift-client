import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: payments = [] } = useQuery({
    queryKey: ["payments", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments?email=${user.email}`);
      return res.data;
    },
  });

  return (
    <div className="p-6 bg-white rounded-xl shadow-sm">
      <h2 className="text-3xl font-bold mb-6 text-secondary">Payment History</h2>

      {/* Table */}
      <div className="overflow-x-auto rounded-lg">
        <table className="w-full text-left">
          <thead className="bg-gray-100 text-gray-700 text-sm">
            <tr>
              <th className="p-4 font-medium w-[18%]">Parcel Info</th>
              <th className="p-4 font-medium w-[20%]">Transaction Id</th>
              <th className="p-4 font-medium w-[15%]">Payment Info</th>
              <th className="p-4 font-medium w-[30%]">Paid Time</th>
              <th className="p-4 font-medium w-[12%]">Action</th>
            </tr>
          </thead>

          <tbody>
            {payments.map((payment, index) => {
              const parcel = payment.parcel || {}; // optional chaining safety

              return (
                <tr
                  key={payment._id}
                  className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                >
                  {/* Parcel Info */}
                  <td className="p-4 align-top">
                    <p className="font-medium">MacBook Air M4</p>
                  </td>


                  {/* Recipient Info */}
                  {/* <td className="p-4">
                    <p className="font-semibold">{parcel.customerEmail}</p>
                    <p className="text-sm text-gray-600 leading-snug">
                      {parcel.receiverAddress}
                    </p>
                    {parcel.receiverPhone && (
                      <p className="text-sm text-gray-600">
                        {parcel.receiverPhone}
                      </p>
                    )}
                  </td> */}

                  {/* Transaction Id */}
                  <td className="p-4">
                    <div className="px-3 py-1 bg-gray-100 rounded-md inline-block">
                      {payment.transactionId || parcel.trackingId || "—"}
                    </div>
                  </td>

                  {/* Payment Info */}
                  <td className="p-4">
                    <p>
                      ৳ {payment.amount}{" "}
                      <span className="text-sm text-gray-500">(Paid)</span>
                    </p>
                  </td>

                  {/* Paid Time */}
                  <td className="p-4 align-top">
                    <p className="font-medium">{payment.paidAt}</p>
                  </td>

                  {/* Action */}
                  <td className="p-4">
                    <button className="btn btn-primary px-4 py-1.5 rounded-md border text-gray-700 hover:bg-gray-100 transition">
                      View
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
