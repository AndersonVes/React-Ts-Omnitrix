import styled from 'styled-components';

type OnButtonOmnitrixProps = {
    active: boolean;
}
export const Wrapper = styled.div`
    height: 60px;
    
    margin-top: 30px;
    position: absolute;
    top: 480px;

    @media screen and (max-width: 460px) {
        height: 20px;
        margin-top: 0px;
        top: 350px;
    }
`
export const Content = styled.div<OnButtonOmnitrixProps>`
    
    background:#827f82;
    height: 50px;
    width: 50px;
    @media screen and (max-width: 460px) {
        height: 34px;
        width: 34px;
    }
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items:center;
    transition: 0.2s;
    margin-top: ${props => props.active ? '7px' : '0'};
    box-shadow: ${props => props.active ? 'none' : 'rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 7px 0px'};
    cursor: pointer;

    .inner {

        background:#91d946;
        height: 40px;
        width: 40px;
        border-radius: 50%;
        overflow:hidden;
        position:relative;

        @media screen and (max-width: 460px) {
                height: 25px;
                width: 25px;
            }

        .light {
            background:#ffffffab;
            height: 20px;
            width: 20px;
            border-radius: 50%;
            position:absolute;
            right:0;

            @media screen and (max-width: 460px) {
                height: 12px;
                width: 12px;
            }
        }
        
    }

`;