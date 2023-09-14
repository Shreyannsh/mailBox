import { Mail } from "../type";

export type Reducer = {
  inbox: Mail[];
  allMails: Mail[];
  spam: Mail[];
  trash: Mail[];
  starState: boolean;
  readUnreadState: boolean;
};

export type Action =
  | {
      type: "star";
      payload: string;
    }
  | {
      type: "readUnread";
      payload: string;
    }
  | {
      type: "delete";
      payload: Mail;
    }
  | {
      type: "spam";
      payload: Mail;
    };
