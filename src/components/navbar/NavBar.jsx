import { AiFillStar, AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import {CgWebsite }from "react-icons/cg"
import "./navbar.scss";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
const NavBar = () => {
  const location = useLocation();
  const [active, setActive] = useState("/");
  useEffect(() => {
    setActive(location.pathname);
  }, [location]);

  return (
    <nav>
      {NavItems.map((item) => {
        return (
          <Link
            key={item.id}
            to={item.link}
            className={`link ${active == item.link ? "active" : ""}`}
          >
            {item.icon}
          </Link>
        );
      })}
    </nav>
  );
};

export default NavBar;
const NavItems = [
  {
    id: 1,
    link: "/",
    icon: <AiOutlineHome size={20} />,
  },
  {
    id: 2,
    link: "/about",
    icon: <AiOutlineUser size={20} />,
  },
  {
    id: 3,
    link: "/skills",
    // icon: <BiBook size={20} />,
    icon: <AiFillStar size={20} />,
  },
  {
    id: 4,
    link: "/portfolio",
    // icon: <RiServiceLine size={20} />,
    icon: <CgWebsite size={20} />,
  },
  {
    id: 5,
    link: "/contact",
    icon: <BiMessageSquareDetail size={20} />,
  },
];
