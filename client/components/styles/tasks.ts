import { colors, dimensions, typography } from '../styles';
import styled from 'styled-components';
import styledTS from 'styled-components-ts';

const hoverColor = 'rgba(10,45,65,.13)';
const stageGray = '#e5e8ec';
const secondaryText = '#6a818c';
const itemWidth = '272px';

const StageTitle = styled.h3`
  color: ${colors.colorPrimary};
  text-transform: uppercase;
  margin: 0 0 12px 0;
  font-size: ${typography.fontSizeHeading6}px;
  font-weight: ${typography.fontWeightLight}px;
`;

const Wrapper = styledTS<{ transparent?: boolean }>(styled.div)`
  margin-bottom: ${dimensions.coreSpacing}px;
  border-radius: 3px;
  padding: 8px;
  
  ${props => !props.transparent && `background: ${stageGray};`}
  
  display: flex;
  flex-wrap: wrap;
`;

const ItemWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(${itemWidth}, 1fr));
  margin-right: 8px;
  &:nth-child(3n) {
    margin-right: 0;
  }

  max-width: 288px;
  overflow: hidden;
  word-break: break-word;

  position: relative;
  margin-bottom: 8px;
  background-color: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 2px 0px;
  padding: 8px;
  outline: 0px;
  font-size: 12px;
  transition: box-shadow 0.3s ease-in-out 0s;
  -webkit-box-pack: justify;
  justify-content: space-between;
  will-change: transform;

  cursor: pointer;
`;

export { Wrapper, StageTitle, ItemWrapper };
