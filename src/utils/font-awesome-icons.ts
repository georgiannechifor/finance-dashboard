import { library } from '@fortawesome/fontawesome-svg-core';
import { faApple as fabApple, faMedrt as fabMedart, faThemeisle as fabThemeisle } from '@fortawesome/free-brands-svg-icons';
import { faBell as farBell, faUser as farUser } from '@fortawesome/free-regular-svg-icons';
import {
  faArrowUp as fasArrowUp,
  faGear as fasGear,
  faInfoCircle as fasInfoCircle,
  faLayerGroup as fasLayerGroup,
  faPlus as fasPlus,
  faStore as fasStore,
  faTableColumns as fasTableColumns,
  faUpDown as fasUpDown,
  faUser as fasUser,
  faWallet as fasWallet
} from '@fortawesome/free-solid-svg-icons';

// @ts-ignore
library.add([
  farUser,
  farBell,
  fasTableColumns,
  fasLayerGroup,
  fasInfoCircle,
  fasWallet,
  fasStore,
  fasUser,
  fasGear,
  fasUpDown,
  fasPlus,
  fasArrowUp,
  fabApple,
  fabMedart,
  fabThemeisle
]);
