import React from "react";

interface PassionCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const PassionCard = ({ icon, title, description }: PassionCardProps) => {
  return (
    <div className="w-full flex flex-col items-center gap-4 md:gap-6 lg:gap-8 transition-all duration-200">
      <span className="h-[180px] w-[180px] rounded-full flex items-center justify-center border-2 text-[64px]">
        {icon}
      </span>
      <h3 className="uppercase heading-3">{title}</h3>
      <p className="w-full paragraph text-center">{description}</p>
    </div>
  );
};

export default PassionCard;
