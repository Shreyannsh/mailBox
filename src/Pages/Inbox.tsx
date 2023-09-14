import { useContext, useState } from "react";

import { mailContext } from "../MailContext/MailContext";
import MailDetail from "../Component/MailDetail";
import Filters from "../Component/Filters";

export default function Inbox() {
  const { dispatch, unreadMailCount, state } = useContext(mailContext);
  const [filtered, setFiltered] = useState([...state.inbox]);
  const [filters, setFilters] = useState([]);

  const filtering = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;

    if (checked) {
      setFilters([...filters, value]);
    } else {
      setFilters(filters.filter((item) => !item));
    }
  };

  return (
    <div>
      <Filters />
      {state.inbox.map((mail) => (
        <MailDetail mail={mail} />
      ))}
    </div>
  );
}
