import { useContext, React } from "react";
import { Link } from "react-router-dom";

import { AiOutlineStar, AiFillStar } from "react-icons/ai";

import { mailContext } from "../MailContext/MailContext";
import { Mail } from "../type";

type MailCardProps = Mail & {
  isInSpam?: boolean;
  isInTrash?: boolean;
  noDetail?: boolean;
};

export default function MailDetail({ mail }: { Mail: MailCardProps }) {
  const { dispatch } = useContext(mailContext);
  console.log(mail);
  return (
    <div>
      <div
        style={{ backgroundColor: mail.unread ? "rgb(237, 243, 247)" : "" }}
        className="mailTemplate"
        key={mail.mId}
      >
        <div className="mailHeader">
          <h5>Subject: {mail.subject}</h5>
          <p
            className="star-btn"
            onClick={() => dispatch({ type: "star", payload: mail.mId })}
          >
            {" "}
            {mail.isStarred ? (
              <AiOutlineStar className="star-outline" />
            ) : (
              <AiFillStar className="star-fill" />
            )}
          </p>
        </div>
        <p>{mail.content}</p>
        <div className="mailFooter">
          <Link className="viewDetails" to={`/details/${mail.mId}`}>
            ViewDetails
          </Link>
          <p
            onClick={() => dispatch({ type: "delete", payload: mail })}
            className="delete-btn"
          >
            Delete
          </p>
          <p
            onClick={() => dispatch({ type: "readUnread", payload: mail.mId })}
            className="readUnread-btn"
          >
            {mail.unread ? "mark as read" : "mark as unread"}
          </p>
          <p
            className="spam-btn"
            onClick={() => dispatch({ type: "spam", payload: mail })}
          >
            Report Spam
          </p>
        </div>
      </div>
    </div>
  );
}
