import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";




export const Price = () => {
    const [popupVisible, setPopupVisible] = useState<boolean>(false)

    function togglePopup() {
        setPopupVisible(!popupVisible)
      }
    return(
    <div>
        <Button onClick={togglePopup}>Click</Button>
    </div>
  );
};