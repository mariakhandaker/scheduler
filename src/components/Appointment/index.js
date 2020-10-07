import React from "react";
import "./styles.scss";
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import Confirm from "./Confirm";
import Status from "./Status";
import Error from "./Error";
import Form from "./Form";

import useVisualMode from "hooks/useVisualMode";
import "./styles.scss";

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const SAVING = "SAVING";
const EDIT = "EDIT";
const CONFIRM = "CONFIRM";
const DELETING = "DELETING";
const ERROR_SAVE = "ERROR_SAVE"
const ERROR_DELETE = "ERROR_DELETE"


export default function Appointment(props) {
  const { time, interview, interviewers } = props;
  const { mode, transition, back } = useVisualMode(
    (interview) ? SHOW : EMPTY
  )
  function save(name, interviewer) {
    let interview = {
      student: name,
      interviewer
    }
    transition(SAVING);
    props.bookInterview(props.id, interview)
    .then(() => transition(SHOW))
    .catch(error => transition(ERROR_SAVE))
  }
  
  function deleteInterview() {
    transition(DELETING);
    props.cancelInterview(props.id)
    .then(() => transition(EMPTY))
    .catch(error => transition(ERROR_DELETE)) 
  }
  return (
    <article className="appointment"> 
      <Header time={time}/>
      {mode === EMPTY && 
        <Empty 
          onAdd={() => transition(CREATE)} 
        />}
      {mode === SHOW && interview && (
          <Show
            student={interview.student}
            interviewer={interview.interviewer}
            onDelete={() => transition(CONFIRM)}
            onEdit={() => transition(EDIT)}
          /> )}
      {mode === CREATE && (
        <Form
          interviewers={interviewers}
          onSave={save}
          onCancel={back}
          />
      )}
      {mode === SAVING && <Status message="Saving..." />}
      {mode === EDIT && interview && (
        <Form 
          name={interview.student}
          interviewer={interview.interviewer}
          interviewers={interviewers}
          onSave={save}
          onCancel={back}
        />
      )}
      {mode === CONFIRM && (
        <Confirm 
          message="Are you sure you want to delete this interview?"
          onConfirm={deleteInterview}
          onCancel={back}
        />
      )}
      {mode === DELETING && <Status message="Deleting..." />}
      {mode === ERROR_SAVE && (
        <Error message="Could not save appointment. Please retry."
          onClose={back} 
        />)}
      {mode === ERROR_DELETE && (
       <Error message="Could not delete appointment. Please retry."
        onClose={back} 
       />)}
    </article>
  )
}