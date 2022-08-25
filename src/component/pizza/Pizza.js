import React, { Fragment } from "react";
import AvailablePizza from "./AvailablePizza";
import Summary from "./Summary";

const Pizza = () => {
  return (
    <Fragment>
      <Summary />
      <AvailablePizza />
    </Fragment>
  );
};

export default Pizza;
