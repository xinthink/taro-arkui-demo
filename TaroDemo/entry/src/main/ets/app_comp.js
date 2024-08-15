import Taro from './npm/@tarojs/taro';
import './app.scss.xss.js';

function App(_ref) {
  let {
    children
  } = _ref;
  Taro.useLaunch(() => {
    console.log("App launched.");
  });
  return children;
}

export { App as default };
//# sourceMappingURL=app_comp.js.map
