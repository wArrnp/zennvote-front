import PageData from "../entities/PageData";

export default function getCurrentPageNumber(pageData:number): number {
  switch (pageData) {
    case PageData.LANDING:
      return 0;
    case PageData.PERSONAL_INFO:
      return 1;
    default:
      return 1
  }
}