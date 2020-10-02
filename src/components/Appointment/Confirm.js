import React from "react";
import Button from "components/Button";
import action from "@storybook/addon-actions/dist/preview/action";

export default function Confirm(props) {
  const { message, onCancel, onConfirm } = props;
  return (
    <main className="appointment__card appointment__card--confirm">
      <h1 className="text--semi-bold">{message}</h1>
      <section className="appointment__actions">
        <Button onCancel={action("onCancel")} danger>{onCancel} </Button>
        <Button onConfirm={action("onConfirm")} danger>{onConfirm}</Button>
      </section>
    </main> 
  )
}