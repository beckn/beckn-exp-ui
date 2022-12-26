import React from "react";

interface titlePropModal {
  titleText: string;
  className?: string;
}

const Title: React.FC<titlePropModal> = ({
  titleText,
  className,
}: titlePropModal) => {
  return (
    <div className="Title">
      <div className={className}>{titleText}</div>
    </div>
  );
};

export default Title;
