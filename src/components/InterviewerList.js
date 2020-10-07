// Our InterviewerList takes in three props:

// interviewers:array - an array of objects containing the information of each interviewer
// interviewer:number - the id of an interviewer
// setInterviewer:function - a function that accepts an interviewer id



import React from "react";
import "components/InterviewerList.scss"
import InterviewerListItem from "./InterviewerListItem";
import propTypes from "prop-types";

function InterviewerList(props) {
  const { interviewers, onChange } = props
  const interviewerGroup = interviewers.map(interviewer => {
    return (
      <InterviewerListItem
      key={interviewer.id}
      name={interviewer.name}
      avatar={interviewer.avatar}
      selected={interviewer.id === props.value}
      setInterviewer={event => onChange(interviewer.id)}
    /> 
    )
  });                                         
  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">{interviewerGroup}</ul>
    </section>
  ) 
};

InterviewerList.propTypes = {
  interviewers: propTypes.array.isRequired
};

export default InterviewerList;