import { useEffect, useRef, useState } from "react";
import { BsChevronDown, BsSliders2 } from "react-icons/bs";
import { Popover } from "react-tiny-popover";
import { ticketsState } from "../../../contexts/TicketsContext";

const TopArea = () => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const { state, dispatch } = ticketsState();
  const { groupBy, sortBy } = state;

  const handleGroupChange = ({target: {value}}) => {
    dispatch({ type: "SET_GROUPBY", payload: value})
    localStorage.setItem("groupBy", value)
  }

  const handleOrderChange = ({target: {value}}) => {
    dispatch({ type: "SET_SORTBY", payload: value })
    localStorage.setItem("orderBy", value)
  }

  useEffect(() => {
    dispatch({ type: "GROUP_TICKETS" });
  }, [state.groupBy]);

  useEffect(() => {
    if (sortBy === "title") {
      dispatch({ type: "SORT_BY_TITLE" });
    } else {
      dispatch({ type: "SORT_BY_PRIORITY" });
    }
  }, [state.groupBy, state.sortBy]);

  return (
    <>
      <Popover
        isOpen={isPopoverOpen}
        onClickOutside={() => setIsPopoverOpen(false)}
        content={
          <div className="pop-content">
            <div className="filter-area">
              <div>Grouping</div>
              <select
                value={groupBy}
                onChange={handleGroupChange}
                className="select-box"
              >
                <option value="status">Status</option>
                <option value="user">User</option>
                <option value="priority">Priority</option>
              </select>
            </div>
            <div className="filter-area">
              <div>Ordering</div>
              <select
                value={sortBy}
                onChange={handleOrderChange}
                className="select-box"
              >
                <option value="priority">Priority</option>
                <option value="title">Title</option>
              </select>
            </div>
          </div>
        }
      >
        <button
          className="pop-btn"
          onClick={() => setIsPopoverOpen(!isPopoverOpen)}
        >
          <BsSliders2 /> Display <BsChevronDown />
        </button>
      </Popover>
    </>
  );
};

export default TopArea;
