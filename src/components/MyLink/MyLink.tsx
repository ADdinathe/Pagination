import * as React from 'react';
import { Link } from 'react-router-dom';

import { PanelEnum } from 'config/routes';
import { buildVKLocation } from 'utils/router';

import styles from './MyLink.modules.scss';

export interface LinkProps {
  children: React.ReactNode;
  destination: { panel: PanelEnum };
}

const MyLink: React.FC<LinkProps> = ({
  children,
  destination = { panel: PanelEnum.main },
}: LinkProps) => (
  <Link className={styles.link} to={buildVKLocation(destination)}>
    {children}
  </Link>
);

export default React.memo(MyLink);
