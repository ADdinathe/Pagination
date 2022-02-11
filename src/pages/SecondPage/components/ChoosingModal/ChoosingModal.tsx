import { observer } from 'mobx-react';
import * as React from 'react';

import Capsule from 'components/Capsule';
import Modal from 'components/Modal';
import { COLORS } from 'config/colors';
import { ModalEnum } from 'config/routes';
import { useVKLocation } from 'utils/router';

import { Title, Wrapper } from './ChoosingModal.styles';

const ChoosingModal: React.FC = () => {
  const {
    state: { color, page },
  } = useVKLocation<{ color: COLORS; page: string }>();

  return (
    <Modal id={ModalEnum.choice}>
      <Wrapper>
        <Title>Are you sure, Neo?</Title>
        <Capsule
          color={color}
          onClick={() => {
            console.log('CLICK');
          }}
        >
          {page}
        </Capsule>
      </Wrapper>
    </Modal>
  );
};

export default observer(ChoosingModal);
