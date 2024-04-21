import { library } from '@fortawesome/fontawesome-svg-core';
import { faApple as fabApple, faMedrt as fabMedart, faThemeisle as fabThemeisle } from '@fortawesome/free-brands-svg-icons';
import { faBell as farBell, faUser as farUser } from '@fortawesome/free-regular-svg-icons';
import {
  faArrowUp as fasArrowUp,
  faEnvelope as fasEnvelope,
  faGear as fasGear,
  faGlobe as fasGlobe,
  faInfoCircle as fasInfoCircle,
  faLayerGroup as fasLayerGroup,
  faLocationDot as fasLocationDot,
  faMoneyBillTransfer as fasMoneyBillTransfer,
  faPlus as fasPlus,
  faShop as fasShop,
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
  fasLocationDot,
  fasGlobe,
  fasEnvelope,
  fasInfoCircle,
  fasWallet,
  fasStore,
  fasUser,
  fasGear,
  fasUpDown,
  fasPlus,
  fasArrowUp,
  fasShop,
  fasMoneyBillTransfer,
  fabApple,
  fabMedart,
  fabThemeisle
]);
