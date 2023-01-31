import styled from 'styled-components';

type HeroSelectionOmnitrixProps = {
    active: boolean;
    alienPopup: boolean;
    position: number;
}

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    
`;

export const Content = styled.div<HeroSelectionOmnitrixProps>`
    width: 450px;
    position: relative;

    @media screen and (max-width: 460px) {
            width: 250px;
    }

    img {
        ${props => props.active ?
        
        `
        margin-top: -18px;
        ` : ''
        }

        transition: 1s;
        width: 100%;
        position: absolute;
        
        &.outside {
            transform:rotate(${props=>props.position}deg);
            z-index: 999;
        }

        
        &.not-active {
            z-index: -1;
            overflow:hidden;
            transition: .7s;

            &.hide {
                opacity:0;
                filter: blur(4px);
            }
        }

        &.hero-select {
            z-index: -2;
            overflow:hidden;
            transition: .7s;
            
        }
    }

    .outside-shadow {
        @media screen and (max-width: 460px) {
            width: 200px;
            height: 200px;
            margin-left: 25px;
            margin-top: 45px;


        }

        height: 400px;
        width: 400px;
        z-index: -40;
        margin-top: 40px;
        margin-left: 25px;
        position: absolute;
        background: #33333382;
        border-radius: 50%;
    }

    .pressed {
        transition: 0.7s;
        -webkit-filter: none;
        filter: none;

        ${
            props => props.alienPopup &&
            '-webkit-filter: drop-shadow(0px 30px 80px #fff); filter: drop-shadow(0px 30px 80px #fff);'
        }
    }

  
`;
