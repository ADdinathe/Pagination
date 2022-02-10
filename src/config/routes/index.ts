import { VKRoutesRecord, VKRoutesConfigType } from './types';

export enum ViewEnum {
  onboarding = 'onboarding',
  main = 'main',
  secondPage = 'secondPage',
}

export enum PanelEnum {
  onboarding = 'onboarding',
  main = 'main',
  secondPage = 'secondPage',
}

export enum ModalEnum {
  greeting = 'greeting',
}

export const routes: VKRoutesRecord = {
  [PanelEnum.onboarding]: {
    panel: PanelEnum.onboarding,
    view: ViewEnum.onboarding,
    Component: require('pages/Onboarding').default,
    fixedHeight: true,
  },
  [PanelEnum.main]: {
    panel: PanelEnum.main,
    view: ViewEnum.main,
    Component: require('pages/Main').default,
  },
  [PanelEnum.secondPage]: {
    panel: PanelEnum.secondPage,
    view: ViewEnum.secondPage,
    Component: require('pages/secondPage').default,
    fixedHeight: true,
  },
};

const config: VKRoutesConfigType = {
  routes,
  defaultPanel: PanelEnum.onboarding,
};

export default config;
