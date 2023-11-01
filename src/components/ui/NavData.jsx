import { FaHome, FaMapMarkerAlt } from "react-icons/fa";
import { FaSailboat } from "react-icons/fa6";
import { BsPeopleFill } from "react-icons/bs";
import { ImBubbles } from "react-icons/im";
import { MdDynamicFeed, MdPermMedia } from "react-icons/md";
import { BiSolidDonateHeart } from "react-icons/bi";
import { AiFillPieChart, AiFillControl } from "react-icons/ai";

export const navigation = [
  {
    name: "dashboard",
    href: "/",
    icon: FaHome,
    current: false,
    heading: false,
    isAdmin: false,
  },
  {
    name: "users",
    href: "/users",
    icon: BsPeopleFill,
    current: false,
    heading: false,
    isAdmin: false,
  },
  {
    name: "posts",
    href: "/posts",
    icon: MdDynamicFeed,
    current: false,
    heading: true,
    isAdmin: false,
  },
  {
    name: "yachts",
    href: "/yachts",
    icon: FaSailboat,
    current: false,
    heading: true,
    isAdmin: false,
  },
  {
    name: "groups",
    href: "/groups",
    icon: ImBubbles,
    current: false,
    heading: true,
    isAdmin: false,
  },
  {
    name: "media",
    href: "/media",
    icon: MdPermMedia,
    current: false,
    heading: true,
    isAdmin: false,
  },
  {
    name: "routes",
    href: "/routes",
    icon: FaMapMarkerAlt,
    current: false,
    heading: true,
    isAdmin: false,
  },
  {
    name: "donations",
    href: "/donations",
    icon: BiSolidDonateHeart,
    current: false,
    heading: true,
    isAdmin: false,
  },
  {
    name: "analytics",
    href: "/analytics",
    icon: AiFillPieChart,
    current: false,
    heading: true,
    isAdmin: true,
  },
  {
    name: "system",
    href: "/system",
    icon: AiFillControl,
    current: false,
    heading: true,
    isAdmin: true,
  },
];
