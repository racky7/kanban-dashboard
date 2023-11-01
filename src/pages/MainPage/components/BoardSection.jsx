import { useCallback } from "react";
import { ticketsState } from "../../../contexts/TicketsContext";
import {
  IconColors,
  PriorityIcons,
  StatusIcons,
} from "../../../utils/styleUtils";
import Card from "../../../components/CardComponent/Card";
import IconComponent from "../../../components/IconComponent/IconComponent";
import UserAvatar from "../../../components/UserAvatar";
import { BiPlus } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";

const BoardSection = () => {
  const { state } = ticketsState();
  const { users, priorities, groupBy: currentGroup, groupedData } = state;

  const getBoardTitle = useCallback(
    (item_key) => {
      switch (currentGroup) {
        case "user":
          return users[item_key].name;
        case "priority":
          return priorities[item_key];
        default:
          return item_key;
      }
    },
    [groupedData]
  );

  const getBoardHeaderIcon = useCallback(
    (item_key) => {
      switch (currentGroup) {
        case "priority":
          return (
            <IconComponent name={priorities[item_key]} icons={PriorityIcons} />
          );
        case "status":
          return <IconComponent name={item_key} icons={StatusIcons} />;
        case "user":
          return <UserAvatar user={users[item_key]} />;
        default:
          return "";
      }
    },
    [groupedData]
  );

  return (
    <>
      {Object.keys(groupedData)?.map((item_key, idx) => (
        <div className="board-section" key={item_key + idx}>
          <div className="board-section-header">
            <div className="board-section-header-left">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  color: IconColors[item_key] ?? "",
                }}
              >
                {getBoardHeaderIcon(item_key)}
              </div>
              <div className="board-section-header-title">
                {getBoardTitle(item_key)}
              </div>
              <div>{groupedData[item_key].length}</div>
            </div>
            <div className="board-section-header-right">
              <BiPlus size="20"/>
              <BsThreeDots />
            </div>
          </div>
          <div className="board-section-tickets">
            {groupedData[item_key].map((ticket, idx) => (
              <Card
                key={ticket.id + idx}
                currentGroup={currentGroup}
                priorities={priorities}
                users={users}
                ticket={ticket}
              />
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default BoardSection;
