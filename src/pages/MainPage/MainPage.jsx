import { useEffect } from "react";
import TopArea from "./components/TopArea";
import { ticketsState } from "../../contexts/TicketsContext";
import BoardSection from "./components/BoardSection";
import "./MainPage.css";

const API_URL = "https://api.quicksell.co/v1/internal/frontend-assignment";

const MainPage = () => {
  const { state, dispatch } = ticketsState();

  const fetchTickets = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      dispatch({ type: "ADD_TICKETS_AND_USERS", payload: data });
      dispatch({ type: "GROUP_TICKETS" });
      if (state.sortBy === "title") dispatch({ type: "SORT_BY_TITLE" });
      else dispatch({ type: "SORT_BY_PRIORITY" });
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    fetchTickets();
  }, []);

  return (
    <div className="main-area">
      <div className="top-area">
        <TopArea />
      </div>
      <div className="board-area">
        <BoardSection />
      </div>
    </div>
  );
};

export default MainPage;
