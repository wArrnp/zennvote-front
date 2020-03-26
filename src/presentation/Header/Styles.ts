import styled from 'styled-components';
import RightArrow from '../../assets/image/right.png';
import RightArrowDim from '../../assets/image/right-dim.png';

interface HeaderListItemProps {
  isCurrent?: boolean 
}

interface ProgressBarProps {
  percent: number
}

export const HeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 91px;
  justify-content: center;
  align-items: center; 
`

export const HeaderListItem = styled.span`
  position: relative;
  width: 20%;
  text-align: center;
  color: ${(props:HeaderListItemProps) => props.isCurrent ? '#e26d59': '#bdbdbd'};
  font-weight: bold;
  font-size: 18px;

  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    margin-right: -6px;
    width: 12px;
    height: 100%;
    background-image: url(${(props:HeaderListItemProps) => props.isCurrent ? RightArrow: RightArrowDim});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 50%;
  }

  &:nth-last-of-type(1) {
    &::after {
      display: none;
    }
  }
`

export const ProgressWrapper = styled.div`
  height: 4px;
  background-color: #eee;
`;

export const ProgressBar = styled.div`
  height: 100%;
  width: ${(props:ProgressBarProps) => props.percent}%;
  max-width: 100%;
  background-color: #e26d59;
`