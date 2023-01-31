import React from 'react'

// styles
import { Content, Wrapper } from './OnButtonOmnitrix.styles';

type OnButtonOmnitrixProps = {
    active: boolean;
    stateChanger: React.Dispatch<React.SetStateAction<boolean>>
}

const OnButtonOmnitrix: React.FC<OnButtonOmnitrixProps> = ({ active, stateChanger }) => {
    return (
        <Wrapper>
            <Content active={active} onClick={() => {
                active
                    ? stateChanger(false)
                    : stateChanger(true)
            }}>
                <div className='inner'>
                    <div className='light' />
                </div>
            </Content>
        </Wrapper>
    );
}

export default OnButtonOmnitrix;