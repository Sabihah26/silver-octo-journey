import React from "react";

const GridCard = ({ label, value, rtl }) => {
  return (
    <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition">

      {/* ⭐ Arabic or main value FIRST */}
      <p
        className={`text-2xl font-bold ${
          rtl ? "text-right font-arabic" : "text-left"
        } mb-2`}
      >
        {value}
      </p>

      {/* ⭐ English label UNDERNEATH */}
      <p className="text-sm text-gray-600">
        {label}
      </p>

    </div>
  );
};

export default GridCard;
