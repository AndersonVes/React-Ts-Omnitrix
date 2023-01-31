import { createGlobalStyle } from "styled-components";


type GlobalStylesProps = {
    flashBackground: boolean;
    
}

export default createGlobalStyle<GlobalStylesProps>`
    @import url('https://fonts.googleapis.com/css2?family=Signika:wght@400;500;700&display=swap');

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        -webkit-user-select: none; /* Safari */
        -ms-user-select: none; /* IE 10 and IE 11 */
        user-select: none; /* Standard syntax */
    }

    html, body, #root {

        height: 100%;
    }

    body {
        font: 14px 'Roboto', sans-serif;
        transition: 0.35s;
        background: ${props => props.flashBackground ? `#48D147` : '#32B531'};
        color: #333;
        -webkit-font-smoothing: antialiased !important;
    }

    ul {
        list-style: none;
    }
`

