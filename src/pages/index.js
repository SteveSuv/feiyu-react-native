import reduxer from '../utils/reduxer';

import Home from './Home';
import Detail from './Detail';
import Zone from './Zone';
import Search from './Search';
import Edit from './Edit';


const pages = {
  Home,
  Detail,
  Zone,
  Search,
  Edit
};

const newPages = pages;
    Object.keys(pages).forEach((name) => {
      newPages[name] = reduxer(pages[name]);
    });

export default newPages
