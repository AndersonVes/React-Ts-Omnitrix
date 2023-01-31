import styled from 'styled-components'

type ControlsProps = {
    active: boolean;
}

export const Wrapper = styled.div<ControlsProps>`
    position: absolute;
    z-index: 9999;
    /* background: #000000ab; */
    height: 450px;
    width: 450px;

    @media screen and (max-width: 460px) {
        height: 250px;
        width: 250px;
    }

    display: flex;
    align-items: center;
    margin-top: -20px;

    .control {
        /* background: #999999ab; */
        position: absolute;
        ${props => props.active && `cursor: grab;`}

        &.center {
            top: 105px;
            margin-left: 105px;
            height: 240px;
            width: 240px;
            @media screen and (max-width: 460px) {
                height: 133px;
                width: 133px;
                margin-left: 58px;
                top: 58px;
            }
            /* background: #47C6D1ab; */
            ${props => props.active && `cursor: pointer;`}

        }

        &.left, &.right {
            height: 200px;
            width: 100px;
            @media screen and (max-width: 460px) {
                height: 111px;
                width: 56px;
            }
        }

        &.left {
            left: 0;
        }

        &.right {
            right: 0;
        }

        &.top, &.bottom {
            width: 200px;
            height: 100px;
            @media screen and (max-width: 460px) {
                width: 111px;
                height: 56px;
            }
        }

        &.top {
            top: 0;
            margin-left: 125px;
            @media screen and (max-width: 460px) {
                margin-left: 70px;
            }
        }

        &.bottom {
            bottom: 0;
            margin-left: 125px;
            @media screen and (max-width: 460px) {
                margin-left: 70px;
            }
        }
    }

`