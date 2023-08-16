import React from "react";
import classNames from "classnames";

const CropText = ({ text }) => {
  const croppedText = text.length > 30 ? `${text.slice(0, 20)}...` : text;
  return (
    <div className={classNames("overflow-hidden", "whitespace-pre-wrap")}>
      {croppedText}
    </div>
  );
};

export default CropText;
