import React, {useState} from 'react';

//styles
import { Content, Wrapper } from './Omnitrix.styles';

//Components
import OnButtonOmnitrix from '../OnButtonOmnitrix';
import HeroSelectionOmnitrix from '../HeroSelectionOmnitrix';

type OmnitrixProps = {
    setFlashBackground: any;
}

const Omnitrix:React.FC<OmnitrixProps> = ({setFlashBackground}) => {
    const [active, setActive] = useState(false);

    return (
        <Wrapper>
            <Content>
                <HeroSelectionOmnitrix active={active} setFlashBackground={setFlashBackground}/>
                <OnButtonOmnitrix active={active} stateChanger={setActive}/>
            </Content>
        </Wrapper>
    );
}

export default Omnitrix;
