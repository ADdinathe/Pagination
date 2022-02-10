import * as React from 'react';
import { Link } from 'react-router-dom';

import { PanelEnum } from '../../config/routes';
import { buildVKLocation } from '../../utils/router';

import styles from './MyLink.modules.scss';

interface Props {
  children: React.ReactNode;
  destination: { panel: PanelEnum };
}

const MyLink: React.FC<Props> = ({
  children,
  destination = { panel: PanelEnum.main },
}: Props) => {
  return (
    <Link className={styles.link} to={buildVKLocation(destination)}>
      {children}
    </Link>
  );
};

export default React.memo(MyLink);
