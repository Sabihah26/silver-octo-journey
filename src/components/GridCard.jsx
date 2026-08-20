import React from "react";

const GridCard = ({ label, value, rtl }) => {
  return (
    <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition">
      {/* Label */}
      <p className="text-sm text-gray-600 mb-1">{label}</p>

      {/* Value (Arabic or English) */}
      <p
        className={`text-xl font-semibold ${
          rtl ? "text-right font-arabic" : "text-left"
        }`}
      >
        {value}
      </p>
    </div>
  );
};

export default GridCard;

