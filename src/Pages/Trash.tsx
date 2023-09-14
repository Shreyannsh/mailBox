import { useContext } from "react";

import { Link } from "react-router-dom";

import { mailContext } from "../MailContext/MailContext";
import MailDetail from "../Component/MailDetail";
import { Mail } from "../type";

export default function Trash() {
  const { state } = useContext(mailContext);
  // console.log(state, "trashfile");
  return (
    <div>
      {state.trash.map((mail: Mail) => (
        <MailDetail mail={mail} />
      ))}
    </div>
  );
}
