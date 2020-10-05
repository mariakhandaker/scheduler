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