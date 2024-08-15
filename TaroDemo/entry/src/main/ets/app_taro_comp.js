import { initPxTransform } from './npm/@tarojs/taro';
import { createReactApp } from './npm/@tarojs/plugin-framework-react/dist/runtime';
import App from './app_comp.js';
import * as React from './npm/react';
import ReactDOM from './npm/@tarojs/react';

const config = {
  "pages": ["pages/index/index"],
  "window": {
    "backgroundTextStyle": "light",
    "navigationBarBackgroundColor": "#fff",
    "navigationBarTitleText": "WeChat",
    "navigationBarTextStyle": "black"
  }
};
initPxTransform({
  designWidth: 750,
  deviceRatio: {
    "375": 2,
    "640": 1.17,
    "750": 1,
    "828": 0.905
  },
  baseFontSize: undefined,
  unitPrecision: undefined,
  targetUnit: undefined
});
const app = (() => createReactApp(App, React, ReactDOM, config));

export { config, app as default };
//# sourceMappingURL=app_taro_comp.js.map
