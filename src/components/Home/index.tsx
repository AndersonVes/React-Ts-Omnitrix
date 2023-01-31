import React, {useState} from 'react'

// Components
import Triangle from '../Triangle';
import Credits from '../Credits';
import Omnitrix from '../Omnitrix';
import Header from '../Header';

type HomeProps = {
    setFlashBackground: any;
}

const Home: React.FC<HomeProps> = ({ setFlashBackground }) => {
    const [credits, setCredits] = useState(false);

    return (
        <div>
            <Header credits={credits} setCredits={setCredits}/>
            <Triangle />

            {
                !credits
                ?
                <Omnitrix setFlashBackground={setFlashBackground} />
                :
                <Credits/>
            }
        </div>
    );
}

export default Home;