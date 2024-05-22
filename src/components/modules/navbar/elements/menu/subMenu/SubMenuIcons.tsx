import InformationButton from "../../buttons/InformationButton";
import { LuPhone } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa";
import { BiVideoRecording } from "react-icons/bi";
import { IoGiftOutline } from "react-icons/io5";
import { CiCreditCard1 } from "react-icons/ci";

import "./SubMenuIcons.scss";
const SubMenuIcons = () => {
  const onClickPhone = () => {};
  return (
    <div className="sub-menu-icons">
      <InformationButton
        text="2298-3777"
        icon={<LuPhone className="icon" />}
        onClick={onClickPhone}
      />
      <InformationButton
        text="Compra por Whatsapp"
        icon={<FaWhatsapp className="icon" />}
        onClick={onClickPhone}
      />
      <InformationButton
        text="Live shopping"
        icon={<BiVideoRecording className="icon" />}
        onClick={onClickPhone}
      />
      <InformationButton
        text="Clubes"
        icon={<IoGiftOutline className="icon" />}
        onClick={onClickPhone}
      />
      <InformationButton
        text="CrediSiman"
        icon={<CiCreditCard1 className="icon" />}
        onClick={onClickPhone}
      />
    </div>
  );
};

export default SubMenuIcons;
