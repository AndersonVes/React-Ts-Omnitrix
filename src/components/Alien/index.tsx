import React from 'react'

// Styles
import { Wrapper } from './Alien.styles'

// Helpers
import AlienImageHelper from '../../helpers/AlienImageHelper'


type AlienProps = {
    selectedAlien: number;
    active: boolean;
}
const Alien: React.FC<AlienProps> = ({ selectedAlien, active }) => {
    

    return (
        <Wrapper active={active}>
            <img className={`hero-display shadowfilter`} src={AlienImageHelper(selectedAlien)} />
        </Wrapper>
    )
}

export default Alien;