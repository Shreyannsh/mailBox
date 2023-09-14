import { useContext } from "react";

import { mailContext } from "../MailContext/MailContext";

export default function Filters() {
  const { dispatch, unreadMailCount } = useContext(mailContext);

  return (
    <div>
      <fieldset>
        <legend>Filters</legend>
        <label>
          {" "}
          <input
            onChange={(e) =>
              dispatch({ type: "Unread", check: e.target.checked })
            }
            type="checkbox"
            value="unread"
          />
          Show Unread Mails
        </label>
        <label>
          {" "}
          <input
            onChange={(e) =>
              dispatch({ type: "starred", check: e.target.checked })
            }
            type="checkbox"
            value="isStarred"
          />
          Show Starred Mails
        </label>
      </fieldset>
      <p> Unread Mails: 0{unreadMailCount} </p>
    </div>
  );
}
