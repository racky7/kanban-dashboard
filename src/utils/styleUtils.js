
import {PiCellSignalLowFill, PiCellSignalMediumFill, PiCellSignalFullFill, PiDotsThreeBold} from "react-icons/pi"
import {BsFillExclamationSquareFill, BsFillCheckCircleFill, BsCircleHalf, BsCircle} from "react-icons/bs"

export const PriorityIcons = {
    "Low": PiCellSignalLowFill,
    "Medium": PiCellSignalMediumFill,
    "High": PiCellSignalFullFill,
    "Urgent": BsFillExclamationSquareFill,
    "No Priority": PiDotsThreeBold
}

export const StatusIcons = {
    "Todo": BsCircle,
    "In progress": BsCircleHalf,
    "Backlog": BsFillCheckCircleFill
}

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
  }