import React from "react";

interface PassionCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const PassionCard = ({ icon, title, description }: PassionCardProps) => {
  return (
    <div className="w-full flex flex-col items-center gap-8">
      <span className="h-[180px] w-[180px] rounded-full flex items-center justify-center border-2 text-[64px]">
        {icon}
      </span>
      <h2 className="uppercase">{title}</h2>
      <p className="text-center">{description}</p>
    </div>
  );
};

export default PassionCard;
