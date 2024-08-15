import { TaroViewTagName, TaroTextTagName } from '../../npm/@tarojs/components/tag';
import Taro from '../../npm/@tarojs/taro';
import '../../index.scss.xss.js';
import { __combine_nesting_style__, calcStaticStyle } from '../../npm/@tarojs/runtime';
import { jsx } from '../../npm/react/jsx-runtime';

let __inner_style_data__;
function __inner_style__() {
  if (__inner_style_data__) return __inner_style_data__;
  __inner_style_data__ = {};
  return __inner_style_data__;
}
function Index() {
  Taro.useLoad(() => {
    console.log("Page loaded.");
  });
  return __combine_nesting_style__( /* @__PURE__ */jsx(TaroViewTagName, {
    __hmStyle: calcStaticStyle(__inner_style__(), "index"),
    className: "index",
    children: /* @__PURE__ */jsx(TaroTextTagName, {
      children: "Hello Taro ArkUI!"
    })
  }), null);
}

export { Index as default };
//# sourceMappingURL=index_comp.js.map
