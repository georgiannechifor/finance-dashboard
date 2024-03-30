import { library } from '@fortawesome/fontawesome-svg-core';
import { faBell as farBell, faUser as farUser } from '@fortawesome/free-regular-svg-icons';
import {
  faGear as fasGear,
  faLayerGroup as fasLayerGroup,
  faTableColumns as fasTableColumns,
  faUser as fasUser
} from '@fortawesome/free-solid-svg-icons';

// @ts-ignore
library.add([farUser, farBell, fasTableColumns, fasLayerGroup, fasUser, fasGear]);
