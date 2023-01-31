// Images
import Alien1 from '../images/aliens/1.png'
import Alien2 from '../images/aliens/2.png'
import Alien3 from '../images/aliens/3.png'
import Alien4 from '../images/aliens/4.png'
import Alien5 from '../images/aliens/5.png'
import Alien6 from '../images/aliens/6.png'
import Alien7 from '../images/aliens/7.png'
import Alien8 from '../images/aliens/8.png'
import Alien9 from '../images/aliens/9.png'
import Alien10 from '../images/aliens/10.png'

const AlienImageHelper = (position: number) => {
        let aliens = [
            Alien1,
            Alien2,
            Alien3,
            Alien4,
            Alien5,
            Alien6,
            Alien7,
            Alien8,
            Alien9,
            Alien10
        ]

        return aliens[position-1]
}
 
export default AlienImageHelper;