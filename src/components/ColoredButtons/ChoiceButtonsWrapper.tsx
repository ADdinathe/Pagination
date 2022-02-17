import * as React from 'react';

import MyButton from '../MyButton/MyButton';
import MyLink from '../MyLink/MyLink';
import { DestinationType } from '../types';

import { Background, Title } from './ChoiceButtonsWrapper.styles';

export type CapsuleProps = {
  title: string;
  redButton: Omit<DestinationType, 'panel'> | Omit<DestinationType, 'modal'>;
  blueLink: DestinationType;
};

const ChoiceButtonsWrapper: React.FC<CapsuleProps> = ({
  title,
  redButton,
  blueLink,
}: CapsuleProps) => {
  if ('panel' in redButton) {
    return (
      <Background>
        <Title>{title}</Title>
        <MyButton destination={{ panel: redButton.panel }}>
          Go to {redButton.panel}
        </MyButton>
        <MyLink destination={blueLink}>Go to {blueLink.panel}</MyLink>
      </Background>
    );
  }
  return (
    <Background>
      <Title>{title}</Title>
      <MyButton destination={{ modal: redButton.modal }}>
        Go to {redButton.state?.page}
      </MyButton>
      <MyLink destination={blueLink}>Go to {blueLink.state?.page}</MyLink>
    </Background>
  );
};

export default React.memo(ChoiceButtonsWrapper);
