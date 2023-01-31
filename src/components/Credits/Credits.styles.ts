import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;


export const Content = styled.div`
    width: 800px;
    max-width: 100%;
    padding: 0 10px;
    color: #fff;
    
    h2 {
        color: #fff;
        margin-top: 10px;
        margin-bottom: 10px;
    }
    
    p {
        margin-bottom: 5px;
    }

    hr {
        margin: 10px 0;
    }

    .social {
        a {
            margin-right: 10px;
            color: #333;
            background: #fff;
            display: inline-flex;
            padding: 5px;
            border-radius: 5px;
        }
    }
`;
