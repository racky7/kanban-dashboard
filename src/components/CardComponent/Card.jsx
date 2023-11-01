import IconComponent from "../IconComponent/IconComponent";
import { PriorityIcons, StatusIcons } from "../../utils/styleUtils";
import UserAvatar from "../UserAvatar";
import "./Card.css";

const Card = ({ ticket, currentGroup, priorities, users }) => {
  const {id, status, title, priority, tag, userId} = ticket
  return (
    <div className="card-main">
      <div className="card-header">
        <div className="card-id">{id}</div>

        {currentGroup!=="user" && <div className="card-user"><UserAvatar user={users[userId]}/></div>}
      </div>

      <div className="card-title">
        {currentGroup !== "status" && (
          <div>
            {" "}
            <IconComponent name={status} icons={StatusIcons} />
          </div>
        )}
        <div>{title.substring(0,65)+(title.length>65?"...":"")}</div>
      </div>

      <div className="card-footer">
        {currentGroup !== "priority" && (
          <div>
            {" "}
            <IconComponent
              name={priorities[priority]}
              icons={PriorityIcons}
            />
          </div>
        )}

        {tag?.map((name, idx) => (
          <div key={name + idx} className="card-tag">
            {name}{" "}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;