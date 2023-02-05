import React, { useState } from 'react'
import { useSwipeable } from 'react-swipeable';

// Styles
import { Wrapper } from './RotateControlsOmnitrix.styles';

//Components
import AlienPopupWindow from '../AlienPopupWindow';

type ControlsProps = {
  rotate: (direction: 0 | 1) => void;
  active: boolean;
  alienPopup: boolean;
  setAlienPopup: React.Dispatch<React.SetStateAction<boolean>>;
  selectedAlien: number;
}

const RotateControlsOmnitrix: React.FC<ControlsProps> = ({ rotate, active, alienPopup, setAlienPopup, selectedAlien }) => {

  const handlePress = () => {
    if (!alienPopup && active)
      setAlienPopup(true)

  }

  const handlersTop = useSwipeable({
    onSwipedLeft: () => rotate(0),
    onSwipedRight: () => rotate(1),
    swipeDuration: 500,
    preventScrollOnSwipe: true,
    trackMouse: true
  });

  const handlersBottom = useSwipeable({
    onSwipedLeft: () => rotate(1),
    onSwipedRight: () => rotate(0),
    swipeDuration: 500,
    preventScrollOnSwipe: true,
    trackMouse: true
  });

  const handlersLeft = useSwipeable({
    onSwipedUp: () => rotate(1),
    onSwipedDown: () => rotate(0),
    swipeDuration: 500,
    preventScrollOnSwipe: true,
    trackMouse: true
  });

  const handlersRight = useSwipeable({
    onSwipedUp: () => rotate(0),
    onSwipedDown: () => rotate(1),
    swipeDuration: 500,
    preventScrollOnSwipe: true,
    trackMouse: true
  });

  return (
    <>
      <Wrapper active={active}>
        <div {...handlersTop} className='control top' />
        <div {...handlersRight} className='control right' />
        <div onClick={handlePress} className='control center' />
        <div  {...handlersBottom} className='control bottom' />
        <div {...handlersLeft} className='control left' />
      </Wrapper>

      <AlienPopupWindow alienPopup={alienPopup} setAlienPopup={setAlienPopup} selectedAlien={selectedAlien} />
    </>
  );
}

export default RotateControlsOmnitrix;