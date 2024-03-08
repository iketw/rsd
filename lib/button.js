"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonRSD = ButtonRSD;
var _reactStrictDom = require("react-strict-dom");
var _jsxRuntime = require("react/jsx-runtime");
// eslint-disable-next-line better-tree-shaking/no-top-level-side-effects
const styles = _reactStrictDom.css.create({
  container: {
    // display: "flex",
    // flex: 1,
    // flexDirection: "column",
    // justifyContent: "center",
    // alignItems: "center",
    borderTopWidth: 1
  },
  button: {
    borderRadius: 20,
    backgroundColor: "#700fad",
    padding: 10,
    paddingLeft: 50,
    paddingRight: 50
  },
  buttonText: {
    color: "white",
    position: "relative",
    fontWeight: "bold"
  }
});
function ButtonRSD() {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactStrictDom.html.div, {
    style: styles.container,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactStrictDom.html.button, {
      style: styles.button,
      onClick: () => alert("Hello World"),
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactStrictDom.html.p, {
        style: styles.buttonText,
        children: "Click me"
      })
    })
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3RTdHJpY3REb20iLCJyZXF1aXJlIiwiX2pzeFJ1bnRpbWUiLCJzdHlsZXMiLCJjc3MiLCJjcmVhdGUiLCJjb250YWluZXIiLCJib3JkZXJUb3BXaWR0aCIsImJ1dHRvbiIsImJvcmRlclJhZGl1cyIsImJhY2tncm91bmRDb2xvciIsInBhZGRpbmciLCJwYWRkaW5nTGVmdCIsInBhZGRpbmdSaWdodCIsImJ1dHRvblRleHQiLCJjb2xvciIsInBvc2l0aW9uIiwiZm9udFdlaWdodCIsIkJ1dHRvblJTRCIsImpzeCIsImh0bWwiLCJkaXYiLCJzdHlsZSIsImNoaWxkcmVuIiwib25DbGljayIsImFsZXJ0IiwicCJdLCJzb3VyY2VzIjpbIi4uL3NyYy9idXR0b24udHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcywgaHRtbCB9IGZyb20gXCJyZWFjdC1zdHJpY3QtZG9tXCI7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBiZXR0ZXItdHJlZS1zaGFraW5nL25vLXRvcC1sZXZlbC1zaWRlLWVmZmVjdHNcbmNvbnN0IHN0eWxlcyA9IGNzcy5jcmVhdGUoe1xuICBjb250YWluZXI6IHtcbiAgICAvLyBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAvLyBmbGV4OiAxLFxuICAgIC8vIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgLy8ganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgLy8gYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICBib3JkZXJUb3BXaWR0aDogMSxcbiAgfSxcbiAgYnV0dG9uOiB7XG4gICAgYm9yZGVyUmFkaXVzOiAyMCxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzcwMGZhZFwiLFxuICAgIHBhZGRpbmc6IDEwLFxuICAgIHBhZGRpbmdMZWZ0OiA1MCxcbiAgICBwYWRkaW5nUmlnaHQ6IDUwLFxuICB9LFxuICBidXR0b25UZXh0OiB7XG4gICAgY29sb3I6IFwid2hpdGVcIixcbiAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxuICB9LFxufSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBCdXR0b25SU0QoKSB7XG4gIHJldHVybiAoXG4gICAgPGh0bWwuZGl2IHN0eWxlPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxodG1sLmJ1dHRvbiBzdHlsZT17c3R5bGVzLmJ1dHRvbn0gb25DbGljaz17KCkgPT4gYWxlcnQoXCJIZWxsbyBXb3JsZFwiKX0+XG4gICAgICAgIDxodG1sLnAgc3R5bGU9e3N0eWxlcy5idXR0b25UZXh0fT5DbGljayBtZTwvaHRtbC5wPlxuICAgICAgPC9odG1sLmJ1dHRvbj5cbiAgICA8L2h0bWwuZGl2PlxuICApO1xufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxJQUFBQSxlQUFBLEdBQUFDLE9BQUE7QUFBNkMsSUFBQUMsV0FBQSxHQUFBRCxPQUFBO0FBRTdDO0FBQ0EsTUFBTUUsTUFBTSxHQUFHQyxtQkFBRyxDQUFDQyxNQUFNLENBQUM7RUFDeEJDLFNBQVMsRUFBRTtJQUNUO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQUMsY0FBYyxFQUFFO0VBQ2xCLENBQUM7RUFDREMsTUFBTSxFQUFFO0lBQ05DLFlBQVksRUFBRSxFQUFFO0lBQ2hCQyxlQUFlLEVBQUUsU0FBUztJQUMxQkMsT0FBTyxFQUFFLEVBQUU7SUFDWEMsV0FBVyxFQUFFLEVBQUU7SUFDZkMsWUFBWSxFQUFFO0VBQ2hCLENBQUM7RUFDREMsVUFBVSxFQUFFO0lBQ1ZDLEtBQUssRUFBRSxPQUFPO0lBQ2RDLFFBQVEsRUFBRSxVQUFVO0lBQ3BCQyxVQUFVLEVBQUU7RUFDZDtBQUNGLENBQUMsQ0FBQztBQUVLLFNBQVNDLFNBQVNBLENBQUEsRUFBRztFQUMxQixvQkFDRSxJQUFBaEIsV0FBQSxDQUFBaUIsR0FBQSxFQUFDbkIsZUFBQSxDQUFBb0IsSUFBSSxDQUFDQyxHQUFHO0lBQUNDLEtBQUssRUFBRW5CLE1BQU0sQ0FBQ0csU0FBVTtJQUFBaUIsUUFBQSxlQUNoQyxJQUFBckIsV0FBQSxDQUFBaUIsR0FBQSxFQUFDbkIsZUFBQSxDQUFBb0IsSUFBSSxDQUFDWixNQUFNO01BQUNjLEtBQUssRUFBRW5CLE1BQU0sQ0FBQ0ssTUFBTztNQUFDZ0IsT0FBTyxFQUFFQSxDQUFBLEtBQU1DLEtBQUssQ0FBQyxhQUFhLENBQUU7TUFBQUYsUUFBQSxlQUNyRSxJQUFBckIsV0FBQSxDQUFBaUIsR0FBQSxFQUFDbkIsZUFBQSxDQUFBb0IsSUFBSSxDQUFDTSxDQUFDO1FBQUNKLEtBQUssRUFBRW5CLE1BQU0sQ0FBQ1csVUFBVztRQUFBUyxRQUFBLEVBQUM7TUFBUSxDQUFRO0lBQUMsQ0FDeEM7RUFBQyxDQUNOLENBQUM7QUFFZiIsImlnbm9yZUxpc3QiOltdfQ==