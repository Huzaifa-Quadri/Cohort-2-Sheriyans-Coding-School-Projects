import React, { useState } from 'react';
const Toggle_Button = () => {
  
  const [isOn, setIsOn] = useState(true);

  return (
    <div
      className={`toggle ${isOn ? "on" : "off"}`}
      onClick={() => setIsOn(!isOn)}
    >
      <div className="knob"></div>
    </div>
  );
}

export default Toggle_Button