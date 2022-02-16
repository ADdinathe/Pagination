import { COLORS } from '../config/colors';
import { ModalEnum, PanelEnum } from '../config/routes';

export type DestinationType = {
  panel: PanelEnum;
  modal?: ModalEnum;
  state?: { color: COLORS; page: PanelEnum };
};
