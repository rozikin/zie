import React from "react";
import { Icon } from "@mui/material";
import { FaUserCircle } from "react-icons/fa";

interface AvatarProps {
  src?: string | null | undefined;
}

const Avatar: React.FC<AvatarProps> = ({ src }) => {
  if (src) {
    <img src={src} alt="avatar" className="rounded-full height=30 width=30 " />;
  }
  return (
    <div>
      <FaUserCircle size={24} />
    </div>
  );
};

export default Avatar;
