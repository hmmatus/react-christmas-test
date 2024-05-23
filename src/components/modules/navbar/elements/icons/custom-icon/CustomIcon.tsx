import "./CustomIcon.scss";
type CustomIconProps = {
  onClick: () => void;
  unreadNumberNotifications: number;
  icon: JSX.Element;
  className?: string;
};
const CustomIcon = ({
  onClick,
  icon,
  unreadNumberNotifications,
  className = "",
}: CustomIconProps) => {
  return (
    <button className={`custom-icon ${className}`} onClick={onClick}>
      {icon}
      {unreadNumberNotifications > 0 && (
        <span className="notification">{unreadNumberNotifications}</span>
      )}
    </button>
  );
};

export default CustomIcon;
