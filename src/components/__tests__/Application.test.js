import React from "react";

import { queryByText, queryByAltText, render, cleanup, waitForElement, getAllByTestId, getByText, getByAltText, prettyDOM, getByPlaceholderText  } from "@testing-library/react";
import axios from "axios";
import Application from "components/Application";
import { fireEvent } from "@testing-library/react/dist";

afterEach(cleanup);

describe("Application", () => {
  it("defaults to Monday and changes the schedule when a new day is selected", () => {
    const { getByText } = render(<Application />);

    return waitForElement(() => getByText("Monday")).then(() => {
      fireEvent.click(getByText("Tuesday"));
      expect(getByText("Leopold Silvers")).toBeInTheDocument();
    });
  });

  it("changes the schedule when a new day is selected", async () => {
    const { getByText } = render(<Application />);

    await waitForElement(() => getByText("Monday"));

    fireEvent.click(getByText("Tuesday"));

    expect(getByText("Leopold Silvers")).toBeInTheDocument();
  });
  

  xit("loads data, books an interview and reduces the spots remaining for Monday by 1", async () => {
    const { container } = render(<Application />);
  
    await waitForElement(() => getByText(container, "Archie Cohen"));
  
    const appointments = getAllByTestId(container, "appointment");
    const appointment = appointments[0];
  
    fireEvent.click(getByAltText(appointment, "Add"));
  
    fireEvent.change(getByPlaceholderText(appointment, /enter student name/i), {
      target: { value: "Lydia Miller-Jones" }
    });
    fireEvent.click(getByAltText(appointment, "Sylvia Palmer"));
  
    fireEvent.click(getByText(appointment, "Save"));
    expect(getByText(appointment, "Saving")).toBeInTheDocument();
  
    console.log(prettyDOM(appointment));
    
    const day = getAllByTestId(container, "day").find(day =>
      queryByText(day, "Monday")
    );
    expect(getByText(day, "no spots remaining")).toBeInTheDocument();
    
    console.log(prettyDOM(day));
    })
  
    xit("loads data, cancels an interview and increases the spots remaining for Monday by 1", async () => {
      // 1. Render the Application.
      const { container, debug } = render(<Application />);
    
      // 2. Wait until the text "Archie Cohen" is displayed.
      await waitForElement(() => getByText(container, "Archie Cohen"));
    
      // 3. Click the "Delete" button on the booked appointment.
      const appointment = getAllByTestId(container, "appointment").find(
        appointment => queryByText(appointment, "Archie Cohen")
      );
    
      fireEvent.click(queryByAltText(appointment, "Delete"));
    
      // 4. Check that the confirmation message is shown.
      // 5. Click the "Confirm" button on the confirmation.
      // 6. Check that the element with the text "Deleting" is displayed.
      // 7. Wait until the element with the "Add" button is displayed.
      // 8. Check that the DayListItem with the text "Monday" also has the text "2 spots remaining".
    
      debug();
    });
    xit("loads data, edits an interview and keeps the spots remaining for Monday the same", () => {})
    xit("shows the save error when failing to save an appointment", () => {
      axios.put.mockRejectedValueOnce();
    })
    xit("shows the delete error when failing to delete an existing appointment", () => {
      
    })
      
  
})

