import React, { useState } from "react";
import styles from "./LightEx.css";
import Lamp from "./Light/Lamp";
import LightSwitch from "./Light/LightSwitch";

function LightEx() {
  const [isLampOneOn, setIsLampOneOn] = useState(false);

  const [isLampTwoOn, setIsLampTwoOn] = useState(true);

  const handleLightSwitchOne = () => setIsLampOneOn((prev) => !prev);
  const handleLightSwitchTwo = () => setIsLampTwoOn((prev) => !prev);

  return (
    <div className="Box">
      <Lamp lampOn={isLampOneOn} position="left" />
      <Lamp lampOn={isLampTwoOn} position="right" />
      <LightSwitch
        name="one"
        callback={handleLightSwitchOne}
        switchOn={isLampOneOn}
        position="left"
      />
      <LightSwitch
        name="two"
        callback={handleLightSwitchTwo}
        switchOn={isLampTwoOn}
        position="right"
      />
    </div>
  );
}

export default LightEx;
