import * as React from "react";
import {SvgCircle} from "./views/circle/index.jsx";
import './styles/index.scss'
export function App() {
  return (
    <div id="app">
      <div className="svg-show-list">
        <SvgCircle />
      </div>
    </div>
  );
}