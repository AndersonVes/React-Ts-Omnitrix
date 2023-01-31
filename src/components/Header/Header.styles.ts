import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 100%;
    padding: 0 40px;
    height: 50px;
    display: flex;
    background: #48D147;
    margin-bottom: 5px;

    @media screen and (max-width: 470px) {
        padding: 0 10px;
    }
`

type CreditsProps = {
    credits: boolean;
}

export const Content = styled.div<CreditsProps>`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #fff;

    @media screen and (max-width: 470px) {
            font-size: 12px;
    }

    h2 a {
        font-weight: normal;
        color: #fff;
        font-size: 14px;
        text-decoration: none;

        :hover {
            text-decoration: underline;
        }

        @media screen and (max-width: 470px) {
            font-size: 12px;
        }

    }

    span {
        font-size: 20px;
        cursor: pointer;
        padding: 5px;
        transition: 0.2s;

        @media screen and (max-width: 470px) {
            font-size: 12px;
        }

        ${props => props.credits 
        && 
        `
            background: #eee;
            color: #48D147;
            border-radius: 5px;
        `
        }

        :hover {
            ${props => !props.credits &&  `text-decoration: underline;`}
            ${props => props.credits &&  `background: #eeeeeeab; color:#333;`}
        }
    }
`