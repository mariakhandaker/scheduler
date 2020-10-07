import React, { useState } from "react";
import InterviewerList from "../InterviewerList";
import Button from "../Button";


export default function Form(props) {
  const [ name, setName ] = useState(props.name || "");
  const [ interviewer, setInterviewer ] = useState(props.interviewer || null);
  const { interviewers, onSave, onCancel } = props;
  
  const reset = () => {
    setName("");
    setInterviewer(null);
  };
  
  const cancel = () => {
   onCancel();
   reset();
  }
 
  const handleSave = () => {
    onSave(name, interviewer);
  }
  return(
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off" onSubmit={event => event.preventDefault()}>
            <input
              className="appointment__create-input text--semi-bold"
              name="name"
              value={name}
              type="text"
              placeholder="Enter Student Name"
              onChange={(event) => setName(event.target.value)}
          />
        </form>
        <InterviewerList 
          interviewers={interviewers} 
          value={interviewer} 
          onChange={setInterviewer}
        />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button  onClick={cancel} danger>Cancel</Button>
          <Button onClick={handleSave} confirm>Save</Button>
        </section>
      </section>
    </main>
  )
}
