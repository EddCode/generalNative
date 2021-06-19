import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const TabIcon = props => {
  const {route, color, size} = props;

  const iconName = Icons[route.name];

  return <Icon name={iconName} color={color} size={size} />;
};

const Icons = {
  Home: 'home',
  Setting: 'cog',
  Icon: 'exclamation-circle'
};

export default TabIcon;
