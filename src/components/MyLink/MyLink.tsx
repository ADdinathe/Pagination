import * as React from 'react';
import { Link } from 'react-router-dom';

import { PanelEnum } from 'config/routes';
import { buildVKLocation } from 'utils/router';

import { DestinationType } from '../types';

import styles from './MyLink.modules.scss';

export type LinkProps = {
  children: React.ReactNode;
  destination: DestinationType;
};

const MyLink: React.FC<LinkProps> = ({
  children,
  destination = { panel: PanelEnum.secondPage },
}: LinkProps) => (
  <Link className={styles.link} to={buildVKLocation(destination)}>
    {children}
  </Link>
);

export default React.memo(MyLink);
