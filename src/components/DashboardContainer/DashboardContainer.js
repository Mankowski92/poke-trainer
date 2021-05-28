import React from 'react';
import { BgWrapper } from 'components/DashboardContainer/DashboardContainer.styles';

const DashboardContainer = ({ children }) => {
  return <BgWrapper>{children}</BgWrapper>;
};

export default DashboardContainer;
