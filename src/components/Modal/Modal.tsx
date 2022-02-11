import * as React from 'react';
import { Transition, TransitionStatus } from 'react-transition-group';

import { ModalEnum } from 'config/routes';
import { useVKHistory, useVKLocation } from 'utils/router';

import {
  ModalBackground,
  ModalBody,
  ModalCloseButton,
  ModalWrapper,
} from './Modal.styles';

const backgroundTransitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 0.3 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

const bodyTransitionStyles = {
  entering: { transform: 'translate(-50%, 0%)', opacity: 0 },
  entered: { transform: 'translate(-50%, 0%)', opacity: 1 },
  exiting: { transform: 'translate(-50%, 0%)', opacity: 0 },
  exited: { transform: 'translate(-50%, 0%)', opacity: 0 },
};

type Props = {
  id: ModalEnum;
  children: React.ReactNode;
};

const Modal: React.FC<Props> = ({ id, children }: Props) => {
  const { modal } = useVKLocation();
  const { goBack } = useVKHistory();
  const parent = React.useRef<HTMLDivElement>(
    document.getElementById('modal') as any
  );

  if (!parent.current) {
    return null;
  }

  return (
    <Transition in={modal === id} timeout={300} mountOnEnter unmountOnExit>
      {(state: TransitionStatus) => (
        <ModalWrapper>
          <ModalBackground
            style={{ ...backgroundTransitionStyles[state] }}
            onClick={goBack}
          />
          <ModalBody style={{ ...bodyTransitionStyles[state] }}>
            <ModalCloseButton onClick={goBack} />
            {children}
          </ModalBody>
        </ModalWrapper>
      )}
    </Transition>
  );
};

export default React.memo(Modal);
