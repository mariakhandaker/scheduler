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
  const interviews = state.days.filter((selected) => selected.name === day);
  return interviews.length ? interviews[0].interviewers.map((interviewer) => state.interviewers[interviewer]) : []
};
