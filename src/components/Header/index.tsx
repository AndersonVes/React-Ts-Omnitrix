import * as React from 'react';
import { Wrapper, Content } from './Header.styles';

type HeaderProps = {
    credits: boolean;
    setCredits: any;
}

const Header: React.FC<HeaderProps> = ({ credits, setCredits }) => {
    const handleCredits = () => {
        if (credits) setCredits(false)
        else setCredits(true)
    }

    return (
        <Wrapper>
            <Content credits={credits}>
                <h2 onClick={handleCredits}>React Omnitrix <a href='https://github.com/andersonVes' target={'_blank'}>by Anderson Vesguerber</a></h2>
                <span onClick={handleCredits}>Credits</span>
            </Content>
        </Wrapper>
    );
}

export default Header;