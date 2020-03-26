import PageData from '../entities/PageData';
import { ReactNode } from 'react';

export default function RenderByPageData(
  viewType: string, 
  setViewType: (viewType: string) => void
): ReactNode {
  switch(viewType) {
    case PageData.LANDING:
      return '123'
  }
}