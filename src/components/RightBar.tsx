"use client";

import { Leva } from "leva";
import { getPrice } from "@/constants/price-map";
import { useControlsContext } from "@/contexts/ControlsProvider";

export default function RightBar() {
  const { controls } = useControlsContext();

  const calculateTotalPrice = () => {
    const prices = [
      getPrice("doorType", controls.doorType),
      getPrice("doorColor", controls.doorColor),
      getPrice("windowType", controls.windowType),
      getPrice("windowColor", controls.windowColor),
      getPrice("wallsType", controls.wallsType),
      getPrice("wallsColor", controls.wallsColor),
      getPrice("roofType", controls.roofType),
      getPrice("roofColor", controls.roofColor),
    ];

    return prices.reduce((total, price) => total + (price || 0), 0);
  };

  const totalPrice = calculateTotalPrice();

  return (
    <div>
      <Leva fill />
      <div className="flex justify-between items-center px-4 py-2">
        <span>
          Quotation for: <span className=" font-bold">{controls.Model}</span>
        </span>
      </div>

      <table className="min-w-full border-collapse">
        <thead>
          <tr>
            <th className="border px-4 py-2 text-left">Component</th>
            <th className="border px-4 py-2 text-left">Selection</th>
            <th className="border px-4 py-2 text-left">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">Door Type</td>
            <td className="border px-4 py-2">{controls.doorType || "N/A"}</td>
            <td className="border px-4 py-2">
              ${getPrice("doorType", controls.doorType) || "N/A"}
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Door Color</td>
            <td className="border px-4 py-2">{controls.doorColor || "N/A"}</td>
            <td className="border px-4 py-2">
              ${getPrice("doorColor", controls.doorColor) || "N/A"}
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Window Type</td>
            <td className="border px-4 py-2">{controls.windowType || "N/A"}</td>
            <td className="border px-4 py-2">
              ${getPrice("windowType", controls.windowType) || "N/A"}
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Window Color</td>
            <td className="border px-4 py-2">
              {controls.windowColor || "N/A"}
            </td>
            <td className="border px-4 py-2">
              ${getPrice("windowColor", controls.windowColor) || "N/A"}
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Wall Type</td>
            <td className="border px-4 py-2">{controls.wallsType || "N/A"}</td>
            <td className="border px-4 py-2">
              ${getPrice("wallsType", controls.wallsType) || "N/A"}
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Wall Color</td>
            <td className="border px-4 py-2">{controls.wallsColor || "N/A"}</td>
            <td className="border px-4 py-2">
              ${getPrice("wallsColor", controls.wallsColor) || "N/A"}
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Roof Type</td>
            <td className="border px-4 py-2">{controls.roofType || "N/A"}</td>
            <td className="border px-4 py-2">
              ${getPrice("roofType", controls.roofType) || "N/A"}
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Roof Color</td>
            <td className="border px-4 py-2">{controls.roofColor || "N/A"}</td>
            <td className="border px-4 py-2">
              ${getPrice("roofColor", controls.roofColor) || "N/A"}
            </td>
          </tr>
          <tr>
            <td colSpan={3} className="border-t-2 border-gray-500"></td>
          </tr>
          <tr>
            <td className="border px-4 py-2"></td>
            <td className="border px-4 py-2 font-bold">Total Price:</td>
            <td className="border px-4 py-2 font-bold">${totalPrice}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
