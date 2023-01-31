import styled from 'styled-components';

type AlienPopupWindowWrapperProps = {
    alienPopup: boolean;
}

export const Wrapper = styled.div<AlienPopupWindowWrapperProps>`
    position: absolute;
    top: 0;
    z-index: 9999;
    height:100%;
    width:100%;
    background: #666666ab;
    display: flex;
    justify-content: center;
    align-items: center;

    ${props => !props.alienPopup && 'display:none!important;'}
    
`;

export const Content = styled.div`

    width: 800px;

    @media screen and (max-width: 800px) {
        width: 450px;
    }

    @media screen and (max-width: 460px) {
        width: 200px;
    }


    background: #333333dd;
    border-radius: 20px;

    

    .header {
        display: flex;
        justify-content: flex-end;
        padding: 12px 15px;
        position: relative;

        .x {
            color: #91d946;
            font-size: 16px;
            cursor:pointer;
            top: 12px;
            right: 15px;
            position: absolute;
        }
    }

    .body {
        padding: 12px 25px;

        display: flex;
        justify-content: flex-start;
        
        @media screen and (max-width: 460px) {
            flex-wrap: wrap;
            justify-content: center;

        }

        color: #fff;

        h2 {
            margin-bottom: 10px;
        }

        img {
            width: 250px;
            height: 250px;
            margin-top: -100px;

            @media screen and (max-width: 460px) {
                width: 180px;
                height: 180px;
            }
        }
    }
`;
