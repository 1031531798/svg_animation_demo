import * as React from "react";
import {SvgCircleList} from "./views/circle/index.jsx";
import './styles/index.scss'
export function App() {
  return (
    <div id="app">
      <div className="svg-show-list">
        <SvgCircleList />
      </div>
    </div>
  );
}