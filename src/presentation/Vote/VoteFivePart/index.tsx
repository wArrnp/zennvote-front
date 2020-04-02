import React, { useState } from 'react';
import RenderToVoteFivePart from '../../../controller/RenderToVoteFivePart';

import * as S from './Styles';

const VoteFivePart = () => {
  const [pageStep, setPageStep] = useState(0);

  return (
    <S.VoteFivePartWrapper>
      {RenderToVoteFivePart(pageStep)}
    </S.VoteFivePartWrapper>
  );
};

export default VoteFivePart;