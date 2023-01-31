import * as React from 'react';

// Styles
import { Wrapper, Content } from './Credits.styles';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'

const Credits = () => {
    return (
        <Wrapper>
            <Content>
                <h2>Design & Code by Anderson Vesguerber</h2>
                <p>Let me know what you think about my watch:</p>
                <div className='social'>
                    <a href='https://github.com/andersonVes' target={'_blank'}><AiFillGithub size={28} /></a>
                    <a href='https://www.linkedin.com/in/anderson-ves/' target={'_blank'}><AiFillLinkedin size={28} /></a>
                </div> 
            </Content>
        </Wrapper>
    );
}

export default Credits;