import React from 'react';
import { BgWrapper } from 'components/PikachuBgWraper/PikachuBgWraper.styles';

const PikachuBg = ({ children }) => {
  return <BgWrapper>{children}</BgWrapper>;
};

export default PikachuBg;
