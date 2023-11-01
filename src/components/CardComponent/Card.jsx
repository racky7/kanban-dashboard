import IconComponent from "../IconComponent/IconComponent";
import { IconColors, PriorityIcons, StatusIcons } from "../../utils/styleUtils";
import UserAvatar from "../UserAvatar";
import "./Card.css";
import { BsFillCircleFill } from "react-icons/bs";

const Card = ({ ticket, currentGroup, priorities, users }) => {
  const { id, status, title, priority, tag, userId } = ticket;
  return (
    <div className="card-main">
      <div className="card-header">
        <div className="card-id">{id}</div>

        {currentGroup !== "user" && (
          <div className="card-user">
            <UserAvatar user={users[userId]} />
          </div>
        )}
      </div>

      <div className="card-title">
        {currentGroup !== "status" && (
          <div>
            <div style={{ color: IconColors[status] }}>
              <IconComponent name={status} icons={StatusIcons} />
            </div>
          </div>
        )}
        <div>{title.substring(0, 65) + (title.length > 65 ? "..." : "")}</div>
      </div>

      <div className="card-footer">
        {currentGroup !== "priority" && (
          <div className="card-footer-icon">
            <div style={{ color: IconColors[priority] }}>
              <IconComponent
                name={priorities[priority]}
                icons={PriorityIcons}
              />
            </div>
          </div>
        )}

        {tag?.map((name, idx) => (
          <div key={name + idx} className="card-tag">
             <BsFillCircleFill size="10" color="#BEC2C7" />{" "}
            {name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
