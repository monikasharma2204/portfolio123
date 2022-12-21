import { v4 as uuidv4 } from 'uuid';
import ProjectImg from '../images/photo.png';
import UTrackerImg from '../images/cointracker.jpg';
import GreenCtgImg from '../images/movie.png';
import CoinTrackerImg from '../images/food2.png';
import CavinImg from '../images/netflix2.png';

const projects = [
  {
    id: uuidv4(),
    name: 'Crypto Tracker',
    desc:
      'An application to track your all data from one place. I developed the website and the mobile app',
    img: UTrackerImg,
  },
  {
    id: uuidv4(),
    name: 'Movie application',
    desc:
      'An app to help people to get an overview of how they can make the city beautiful.',
    img: GreenCtgImg,
  },
  {
    id: uuidv4(),
    name: 'Food Application',
    desc:
      'Using this app you can track any e coin. Also you will get a good advise about investment form the professional',
    img: CoinTrackerImg,
  },
  {
    id: uuidv4(),
    name: 'Netflix clone',
    desc:
      'A portfolio for Cavin jr. A artist from New york city. The portfolio is made using ReactJs and GatsbyJs.',
    img: CavinImg,
  },
  {
    id: uuidv4(),
    name: 'Photo Pixels',
    desc:
      'A tracking website that will show the performance of the website. Also you will get some useful advice to improve the performance.',
    img: ProjectImg,
  },
];

export default projects;
