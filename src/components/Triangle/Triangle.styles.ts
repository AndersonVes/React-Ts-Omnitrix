import styled from 'styled-components';

type TriangleProps = {
  direction: "right" | "left";
}

export const TriangleForm = styled.div<TriangleProps>`
    width: 0; 
    height: 0; 
    border-top: 290px solid transparent;
    border-bottom: 290px solid transparent;
    position: absolute;
    
    border-${props => props.direction}: 200px solid black;
    right: ${props => props.direction === 'right' ? '0' : 'unset'};

    margin-top: 10px;

    @media screen and (max-width: 850px) {
      display:none;

    }

`;
