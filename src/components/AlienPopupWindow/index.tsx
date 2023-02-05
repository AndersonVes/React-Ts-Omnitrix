import React from 'react'

// Styles
import { Content, Wrapper } from './AlienPopupWindow.styles';

//Data
import AlienData from '../../data/aliens.json'

// Helpers
import AlienImageHelper from '../../helpers/AlienImageHelper'

type AlienPopupWindowProps = {
    alienPopup: boolean;
    setAlienPopup: React.Dispatch<React.SetStateAction<boolean>>;
    selectedAlien: number;

}



const AlienPopupWindow: React.FC<AlienPopupWindowProps> = ({ alienPopup, setAlienPopup, selectedAlien }) => {
    
    
    return (

        <Wrapper alienPopup={alienPopup}>
            <Content>
                <div className='header'>
                    <div className='x' onClick={() => setAlienPopup(false)}>X</div>
                </div>
                <div className='body'>
                    <img src={AlienImageHelper(AlienData.aliens[selectedAlien-1].id)} />
                    <div className='info'>

                        <h2>{AlienData.aliens[selectedAlien-1].title}</h2>
                        <p>{AlienData.aliens[selectedAlien-1].description}</p>
                    </div>
                </div>
            </Content>
        </Wrapper>
    );
}

export default AlienPopupWindow;