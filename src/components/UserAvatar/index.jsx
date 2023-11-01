import { BsFillCircleFill } from "react-icons/bs";
import "./UserAvatar.css";

const UserAvatar = ({ user }) => {
  const { name = "", profileColor="", available=false } = user;
  function getInitials(name) {
    const words = name.split(" ");
    let initials = "";

    for (let i = 0; i < words.length; i++) {
      initials += words[i].charAt(0);
    }

    return initials.toUpperCase();
  }

  return (
    <div className="avatar-container">
      <div className="avatar-main" style={{ backgroundColor: profileColor }}>
        {getInitials(name)}
      </div>
      <div className="status-icon">
        <BsFillCircleFill size="8" color={available ? "#01B246" : "#BEC2C7"} />
      </div>
    </div>
  );
};

export default UserAvatar;
