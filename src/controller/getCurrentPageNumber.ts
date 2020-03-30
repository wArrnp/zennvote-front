import PageData from "../entity/PageData";

export default function GetCurrentPageNumber(pageData:number): number {
  switch (pageData) {
    case PageData.LANDING:
      return 0;
    case PageData.EMAIL_INPUT:
      return 1;
    case PageData.QUIZ:
      return 2;
    case PageData.VOTE:
      return 3;
    default:
      return 1
  }
}