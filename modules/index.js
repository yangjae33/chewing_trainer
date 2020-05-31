import { combineReducers } from "redux";
import counter from "./counter";
import NewsList from "./NewsList";
import BookmarkList from "./BookmarkList";

const rootReducer = combineReducers({
  counter,
  NewsList,
  BookmarkList,
});

export default rootReducer;
