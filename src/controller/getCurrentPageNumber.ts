import PageData from "../entities/PageData";

export default function getCurrentPageNumber(pageData:number): number {
  switch (pageData) {
    case PageData.LANDING:
      return 0;
    case PageData.EMAIL_INPUT:
      return 1;
    case PageData.QUIZ:
      return 2;
    default:
      return 1
  }
}