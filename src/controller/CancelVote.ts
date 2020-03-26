import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import PageData from '../entities/PageData';
import { setVoteInit } from '../modules/vote';

export default function CancelVote(setPageData: (pageData: number) => void): (event: React.MouseEvent) => any  {
  const dispatch = useDispatch();
  const useCancelVote = useCallback((event: React.MouseEvent) => {
    setPageData(PageData.LANDING);
    dispatch(setVoteInit())
  }, [setPageData, dispatch])

  return useCancelVote
}