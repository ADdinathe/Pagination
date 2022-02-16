import { observer } from 'mobx-react';
import * as React from 'react';

import Capsule from 'components/Capsule';
import Modal from 'components/Modal';
import { COLORS } from 'config/colors';
import { ModalEnum, PanelEnum } from 'config/routes';
import { useVKHistory, useVKLocation } from 'utils/router';

import { Title, Wrapper } from './ChoosingModal.styles';

const ChoosingModal: React.FC = () => {
  const { push } = useVKHistory<{ color: COLORS; page: PanelEnum }>();

  const {
    state: { color, page },
  } = useVKLocation<{ color: COLORS; page: PanelEnum }>();

  const handleClick = React.useCallback(() => {
    push({ panel: page });
  }, [page]);

  return (
    <Modal id={ModalEnum.choice}>
      <Wrapper>
        <Title>Are you sure, Neo?</Title>
        <Capsule onClick={handleClick} color={color}>
          Go to {page}
        </Capsule>
      </Wrapper>
    </Modal>
  );
};

export default observer(ChoosingModal);
