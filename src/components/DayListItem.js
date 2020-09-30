import React from "react";
import classNames from "classnames";
import "components/DayListItem.scss";

const formatSpots = function(spots) {
  if (spots === 0) {
    return "all booked up!";
  }
  if (spots === 1) {
    return "one spot remaining!";
  }
  if (spots > 1) {
    return `${spots} spots remaining`;
  }
}

export default function DayListItem(props) {
  const day = classNames("day-list__item", {
    "day-list__item--selected": props.selected,
    "day-list__item--full": props.spots === 0
  })
  return (
    <li className={day} onClick={() => props.setDay(props.name)}>
      <h2 className="text--regular">{props.name}</h2> 
      <h3 className="text--light">{formatSpots(props.spots)}</h3>
    </li>
  );
}