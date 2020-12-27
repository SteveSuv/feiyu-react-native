import reduxer from '../utils/reduxer';

import MyHeader from './MyHeader';
import MyHomeHeader from './MyHomeHeader';
import MyListView from './MyListView';
import MyPostCard from './MyPostCard';
import MySearchHeader from './MySearchHeader';
import MyTabView from './MyTabView';


const components = {
  MyHeader,
  MyHomeHeader,
  MyListView,
  MyPostCard,
  MySearchHeader,
  MyTabView
};

const newComponents = components;
Object.keys(components).forEach((name) => {
  newComponents[name] = reduxer(components[name]);
});

export default newComponents;
