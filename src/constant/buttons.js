// import icons
import { FiPhone } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import { IoChatbubbleOutline } from "react-icons/io5";

export const HeaderButtons = [
  {
    id: 1,
    label: "دیوار من",
    icon: <FiUser className="icon" />,
  },
  {
    id: 2,
    label: "چت",
    icon: <IoChatbubbleOutline className="icon" />,
  },
  {
    id: 3,
    label: "پشتیبانی",
    icon: <FiPhone className="icon" />,
  },
];
