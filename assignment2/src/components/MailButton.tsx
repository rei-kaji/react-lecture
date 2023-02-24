import React from "react";
import mailIcon from "../assets/mailIcon.png";

type Props = {};

function MailButton({}: Props) {
  return (
    <div className="mail-button">
      <button>
        <img src={mailIcon} alt="mail button" />
        Email
      </button>
    </div>
  );
}

export default MailButton;
