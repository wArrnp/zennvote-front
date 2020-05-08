import styled from 'styled-components';
import { mainColor } from '../Colors';

interface HeaderListItemProps {
  isCurrent?: boolean;
}

interface ProgressBarProps {
  percent: number;
}

export const HeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 91px;
  justify-content: center;
  align-items: center; 
  padding-top: 16px;
`;

export const HeaderListItem = styled.span`
  position: relative;
  width: 20%;
  text-align: center;
  color: ${(props:HeaderListItemProps) => props.isCurrent ? mainColor: '#bdbdbd'};
  font-weight: bold;
  font-size: 25px;

  &::after {
    content: '-';
    color: #bdbdbd;
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    margin-right: -6px;
    width: 12px;
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 50%;
  }

  &:nth-last-of-type(1) {
    &::after {
      display: none;
    }
  }
`;

export const ProgressWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  height: 4px;
  background-color: #eee;
  border-radius: 20px;
`;

export const ProgressBar = styled.div`
  height: 100%;
  transition: width 0.5s;
  width: ${(props:ProgressBarProps) => props.percent}%;
  max-width: 100%;
  background-color: ${mainColor};
  border-radius: 20px;
`;