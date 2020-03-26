import React, { ReactNode } from 'react';
import PageData from '../entities/PageData';
import { Landing } from '../presentation';

export default function RenderByPageData(
  viewType: string, 
  setPageData: (pageData: string) => void
): ReactNode {
  switch(viewType) {
    case PageData.LANDING:
      return <Landing setPageData={setPageData} />
    case PageData.PERSONAL_INFO:
      return '개인 정보 입력 창'
  }
}