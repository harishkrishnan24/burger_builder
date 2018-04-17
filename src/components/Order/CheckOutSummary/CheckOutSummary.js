import React from "react";

import Burger from "../../Burger/Burger";
import Button from "../../Ui/Button/Button";
import Classes from "./CheckOutSummary.css";

const checkOutSummary = props => {
  return (
    <div className={Classes.CheckOutSummary}>
      <h1>We hope it tastes well</h1>
      <div style={{ width: "100%", margin: "auto" }}>
        <Burger ingredients={props.ingredients} />
      </div>
      <Button clicked={props.checkoutCancelled} btnType="Danger">
        CANCEL
      </Button>
      <Button clicked={props.checkoutContinued} btnType="Success">
        CONTINUE
      </Button>
    </div>
  );
};

export default checkOutSummary;
