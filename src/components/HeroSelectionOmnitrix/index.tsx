import React, { useEffect, useState } from 'react';

//Styles
import OutsideImage from '../../images/outside.png'
import HeroSelectionImage from '../../images/hero-selection.png'
import NotActiveImage from '../../images/not-active.png'
import PressedImage from '../../images/pressed.png'
import { Content, Wrapper } from './HeroSelectionOmnitrix.styles';

// Components
import RotateControlsOmnitrix from '../RotateControlsOmnitrix';
import Alien from '../Alien';

type HeroSelectionOmnitrixProps = {
    active: boolean;
    setFlashBackground: React.Dispatch<React.SetStateAction<boolean>>;
}

const HeroSelectionOmnitrix: React.FC<HeroSelectionOmnitrixProps> = ({ active, setFlashBackground }) => {
    const [position, setPosition] = useState(0);
    const [selectedAlien, setSelectedAlien] = useState(1);
    const [alienPopup, setAlienPopup] = useState(false);



    const rotate = (direction: 0 | 1) => {
        if (!active) return

        setFlashBackground(true)
        setTimeout(() => {
            setFlashBackground(false)
        }, 300);

        if (direction === 1)
            setPosition(position + 90)
        else
            setPosition(position - 90)

        if (selectedAlien < 2 && direction === 1) {
            setSelectedAlien(10)
            return
        }

        if (selectedAlien > 9 && direction === 0) {
            setSelectedAlien(1)
            return
        }

        if (direction === 0) {
            setSelectedAlien(selectedAlien + 1)
            return
        }

        setSelectedAlien(selectedAlien - 1)


    }

    return (
        <Wrapper>
            <Content active={active} position={position} alienPopup={alienPopup}>
                {
                    !alienPopup
                        ?
                        <>
                            <img className='outside' src={OutsideImage} />
                            <div className='outside-shadow' />
                            <img className='hero-select' src={HeroSelectionImage} />
                            <img className={`not-active${active ? ' hide' : ''}`} src={NotActiveImage} />
                            <Alien selectedAlien={selectedAlien} active={active} />
                        </>
                        :
                        <img className='pressed' src={PressedImage} />
                }


            </Content>

            <RotateControlsOmnitrix active={active} rotate={rotate} alienPopup={alienPopup} setAlienPopup={setAlienPopup} selectedAlien={selectedAlien} />
        </Wrapper>
    );

}

export default HeroSelectionOmnitrix;