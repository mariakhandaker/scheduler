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
  const interviewInfo = {
    student: interview.student,
    interviewer: state.interviewers[interview.interviewer],
  }
  return interviewInfo;
}

export function getInterviewersForDay(state, interviewer) {
  const interviewers = [];
  state.days.forEach((weekday) => {
    if (weekday.name === day) {
      weekday.appointments.forEach((interviewer) => {
        interviewers.push(state.appointments[interviewer])
      })
    }
  })
  return interviewers.length ? interviewers : []
};