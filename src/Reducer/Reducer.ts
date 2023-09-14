import { Reducer, Action } from "./ReducerType";

export default function ReduceMail(state: Reducer, action: Action) {
  switch (action.type) {
    case "star":
      return {
        ...state,
        inbox: state.inbox.map((item) => {
          if (item.mId === action.payload) {
            return { ...item, isStarred: !item.isStarred };
          }
          return { ...item };
        })
      };

    case "readUnread":
      return {
        ...state,
        inbox: state.inbox.map((item) => {
          if (item.mId === action.payload) {
            return { ...item, unread: !item.unread };
          }
          return { ...item };
        })
      };

    case "delete":
      return {
        ...state,
        trash: [...state.trash, action.payload],
        inbox: state.inbox.filter((item) => item.mId !== action.payload.mId)
      };

    case "spam":
      return {
        ...state,
        spam: [...state.spam, action.payload],
        inbox: state.inbox.filter((item) => item.mId !== action.payload.mId)
      };

    // case "Unread": {
    //   if (action.check) {
    //     return {
    //       ...state,
    //       inbox: state.inbox.filter((item) => item.unread === true)
    //     };
    //   }
    //   return { ...state, inbox: display };
    // }

    // filtering(action.check);
    // break;

    // case "starred": {
    //   if (action.check) {
    //     return {
    //       ...state,
    //       inbox: state.inbox.filter((item) => item.isStarred === true)
    //     };
    //   }
    //   return { ...state, inbox: state.allMails };
    // }

    default:
      return state;
  }
}
