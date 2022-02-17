import * as React from 'react';

import { COLORS } from '../../config/colors';
import { PanelEnum } from '../../config/routes';
import MyButton from '../MyButton/MyButton';
import MyLink from '../MyLink/MyLink';
import { DestinationType } from '../types';

import { Background, Title } from './ColoredButtons.styles';

export type CapsuleProps = {
  CurrentPage: string;
  RedButton: Omit<DestinationType, 'panel'> | Omit<DestinationType, 'modal'>;
  BlueLink: DestinationType;
};

const ColoredButtons: React.FC<CapsuleProps> = ({
  CurrentPage,
  RedButton,
  BlueLink,
}: CapsuleProps) => {
  if ('panel' in RedButton) {
    return (
      <Background>
        <Title>{CurrentPage}</Title>
        <MyButton destination={{ panel: RedButton.panel }}>
          Go to {RedButton.panel}
        </MyButton>
        <MyLink destination={BlueLink}>Go to {BlueLink.panel}</MyLink>
      </Background>
    );
  } else if ('modal' in RedButton) {
    return (
      <Background>
        <Title>{CurrentPage}</Title>
        <MyButton destination={{ modal: RedButton.modal }}>
          Go to {RedButton.state?.page}
        </MyButton>
        <MyLink destination={BlueLink}>Go to {BlueLink.state?.page}</MyLink>
      </Background>
    );
  }

  return null;
};

export default React.memo(ColoredButtons);
