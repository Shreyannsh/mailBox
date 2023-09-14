import { useContext } from "react";

import { Link } from "react-router-dom";

import { mailContext } from "../MailContext/MailContext";
import MailDetail from "../Component/MailDetail";
import { Mail } from "../type";

export default function Spam() {
  const { state } = useContext(mailContext);

  return (
    <div>
      {state.spam.map((mail: Mail) => (
        <MailDetail mail={mail} />
      ))}
    </div>
  );
}
