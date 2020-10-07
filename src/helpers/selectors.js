export function getAppointmentsForDay(state, day) {
  const appointments = [];
  state.days.forEach((weekday) => {
    if (weekday.name === day) {
      weekday.appointments.forEach((appointment) => {
        appointments.push(state.appointments[appointment])
      })
    }
  })
  return appointments.length ? appointments : []
};

export function getInterview(state, interview) {
  if (!interview) {
    return null;
  }
  return {
    student: interview.student,
    interviewer: state.interviewers[interview.interviewer],
  }
}

export function getInterviewersForDay(state, day) {
  const interviewers = [];
  state.days.forEach((selected) => {
    if (selected.name === day) {
      interviewers.map((interviewer) => state.interviewers[interviewer])
    }
  })
  return interviewers.length ? interviewers : []
};
