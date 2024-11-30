import Image from "next/image";
import Link from "next/link";
import React from "react";

interface SocialCardProps {
  socialLink: string;
  icon: string;
}

const SocialCard = ({ socialLink, icon }: SocialCardProps) => {
  return (
    <Link href={socialLink}>
      <Image src={icon} alt="social-link" width={36} height={36} />
    </Link>
  );
};

export default SocialCard;
