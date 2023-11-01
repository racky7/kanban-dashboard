import { createContext, useContext, useReducer } from "react";
import { getRandomColor } from "../utils/styleUtils";

const priorityMap = {
  0: "No Priority",
  1: "Low",
  2: "Medium",
  3: "High",
  4: "Urgent",
};

const mapUsers = (userData) => {
  const usersMap = {};
  userData.forEach((user) => {
    usersMap[user.id] = { ...user, profileColor: getRandomColor() };
  });
  return usersMap;
};

const handleGroupByTickets = (groupByKey, tickets) => {
  console.log('group by key', groupByKey)
  const data = {};
  if (groupByKey === "user") groupByKey = "userId";
  tickets.forEach((ticket) => {
    const type_key = ticket[groupByKey];
    if (!data[type_key]) {
      data[type_key] = [];
    }
    data[type_key].push(ticket);
  });

  return { ...data };
};

const ticketsReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TICKETS_AND_USERS": {
      let { tickets, users } = action.payload;
      console.log('addding..', action.payload)
      return {
        ...state,
        tickets: tickets,
        users: { ...mapUsers(users) },
      };
    }
    case "GROUP_TICKETS": {
      return {
        ...state,
        groupedData: handleGroupByTickets(
          state.groupBy,
          state.tickets
        ),
      };
    }
    case "SORT_BY_PRIORITY": {
      let sortedData = {};
      Object.keys(state.groupedData).forEach((data_key) => {
        sortedData[data_key] = state.groupedData[data_key].sort(
          (a, b) => b.priority - a.priority
        );
      });
      return {
        ...state,
        groupedData: sortedData,
      };
    }
    case "SORT_BY_TITLE": {
      let sortedData = {};
      Object.keys(state.groupedData).forEach((data_key) => {
        sortedData[data_key] = state.groupedData[data_key].sort((a, b) =>
          a.title.localeCompare(b.title)
        );
      });
      return {
        ...state,
        groupedData: sortedData,
      };
    }
    case "SET_GROUPBY": 
      return {...state, groupBy: action.payload}
    case "SET_SORTBY":
      return {...state, sortBy: action.payload}
    default:
      break;
  }
};

const initialValues = {
  groupBy: "status",
  sortBy: "priority",
  tickets: [],
  users: [],
  priorities: priorityMap,
  groupedData: {},
};

const ticketsContext = createContext(initialValues);

export const TicketsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ticketsReducer, initialValues);
  return (
    <ticketsContext.Provider value={{ state, dispatch }}>
      {children}
    </ticketsContext.Provider>
  );
};

export const ticketsState = () => useContext(ticketsContext);
