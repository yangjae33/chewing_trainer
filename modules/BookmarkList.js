const NEWSADD = "NEWSADD";
const NEWSDELETE = "NEWSDELETE";

export const newsAdd = (NewsObj) => ({ type: NEWSADD, payload: NewsObj }); //뉴스 추가
export const newsDelete = (NewsIdx) => ({ type: NEWSDELETE, newsIdx: NewsIdx }); //뉴스 삭제

const initialState = [];
const BookmarkList = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case NEWSADD:
      return [...state, action.payload];
    case NEWSDELETE:
      return state.filter((newsList) => {
        return newsList.newsIdx !== action.newsIdx;
      });
    default:
      return state;
  }
};

export default BookmarkList;
