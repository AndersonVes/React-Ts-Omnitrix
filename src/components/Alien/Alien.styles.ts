import styled from 'styled-components';

type AlienProps = {
    active: boolean;
}



export const Wrapper = styled.div<AlienProps>`
    .hero-display {
        width: 200px;
        height: 200px;
        
        

        position: absolute;
        top: 125px;
        left: 125px;
        opacity: 0;
        transition: .7s;
        
        @media screen and (max-width: 460px) {
            top: 70px;
            left: 70px;
            height: 110px;
            width: 110px;
        }

        &.shadowfilter {
            -webkit-filter: drop-shadow(0px 0px 18px #fff);
            filter: drop-shadow(0px 0px 18px #fff);
        }


        ${props => props.active && 'opacity: 1;'}
    }
`;