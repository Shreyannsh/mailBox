import { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { mailContext } from "../MailContext/MailContext";

export default function ViewDetails() {
  const { display } = useContext(mailContext);
  const { Id } = useParams();

  const theMail = display.find((mail) => mail.mId === Id);

  return (
    <div style={{ backgroundColor: "white" }} className="mailTemplate">
      <h3>{theMail.subject}</h3>
      <p>{theMail.content}</p>

      <Link className="btn-back" to="/">
        back
      </Link>
    </div>
  );
}
