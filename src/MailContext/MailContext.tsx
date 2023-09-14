import React, { createContext, useReducer, useState, ReactNode } from "react";

import { mails } from "../FakeFetch/FakeFetch";

import ReduceMail from "../Reducer/Reducer";

import { Mail } from "../type";
import { Action, Reducer } from "../Reducer/ReducerType";

type MailProviderProps = {
  children: ReactNode;
  unreadMailCount: number;
  dispatch: React.Dispatch<Action>;
  state: Reducer;
};

type MailContextType = {
  dispatch: React.Dispatch<Action>;
  state: Reducer;
};

export const mailContext = createContext<MailContextType | null>(null);

const MailProvider: React.FC<MailProviderProps> = ({ children }) => {
  const [display, setDisplay] = useState(mails);

  const [state, dispatch] = useReducer(ReduceMail, {
    inbox: display,
    allMails: display,
    spam: [],
    trash: [],
    starState: "",
    readUnreadState: ""
  });

  const unreadMailCount = state.inbox.filter(
    (item: Mail) => item.unread === true
  ).length;

  return (
    <div>
      <mailContext.Provider
        value={{
          dispatch,
          state,
          unreadMailCount
        }}
      >
        {children}
      </mailContext.Provider>
    </div>
  );
};
export default MailProvider;
