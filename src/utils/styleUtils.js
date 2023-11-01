import {
  PiCellSignalLowFill,
  PiCellSignalMediumFill,
  PiCellSignalFullFill,
  PiDotsThreeBold,
} from "react-icons/pi";
import {
  BsFillExclamationSquareFill,
  BsFillCheckCircleFill,
  BsCircleHalf,
  BsCircle,
} from "react-icons/bs";
import { MdPendingActions } from "react-icons/md";

export const PriorityIcons = {
  Low: PiCellSignalLowFill,
  Medium: PiCellSignalMediumFill,
  High: PiCellSignalFullFill,
  Urgent: BsFillExclamationSquareFill,
  "No Priority": PiDotsThreeBold,
};

export const StatusIcons = {
  "Todo": BsCircle,
  "In progress": BsCircleHalf,
  "Backlog": MdPendingActions,
};

export const IconColors = {
  "Todo": "#FF851B",
  "In progress": "#0074D9",
  "Backlog": "#85144b",
  "0": "#6C7076",
  "1": "#6C7076",
  "2": "#6C7076",
  "3": "#6C7076",
  "4": "#FB7741"
};



export const getRandomColor = () => {
  const colors = [
    "#0074D9", // Blue
    "#FF4136", // Red
    "#FF851B", // Orange
    "#FFDC00", // Yellow
    "#B10DC9", // Purple
    "#85144b", // Maroon
    "#F012BE", // Pink
    "#39CCCC", // Teal
    "#AAAAAA", // Gray
  ];

  const randomIndex = Math.floor(Math.random() * colors.length);

  return colors[randomIndex];
};
