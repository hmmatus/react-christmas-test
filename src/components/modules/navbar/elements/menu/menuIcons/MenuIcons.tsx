import { useState } from "react";
import CustomIcon from "../../icons/custom-icon/CustomIcon";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";

import "./MenuIcons.scss";

const MenuIcons = () => {
  const [data] = useState({
    liked: {
      unreadNumberNotifications: 1,
    },
  });
  const onClickHeart = () => {};
  const onClickUser = () => {};
  const onClickCart = () => {};
  return (
    <div className="menu-icons">
      <CustomIcon
        className="icon-container"
        onClick={onClickUser}
        unreadNumberNotifications={data.liked.unreadNumberNotifications}
        icon={
          data.liked.unreadNumberNotifications > 0 ? (
            <FaHeart className="icon" />
          ) : (
            <FaRegHeart className="icon" />
          )
        }
      />
      <FaRegUserCircle
        className="icon-container icon hidden-icon"
        onClick={onClickHeart}
      />
      <CustomIcon
        className="icon-container"
        onClick={onClickCart}
        unreadNumberNotifications={data.liked.unreadNumberNotifications}
        icon={
          data.liked.unreadNumberNotifications > 0 ? (
            <FaShoppingCart className="icon" />
          ) : (
            <IoCartOutline className="icon" />
          )
        }
      />
    </div>
  );
};

export default MenuIcons;
