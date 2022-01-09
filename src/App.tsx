import * as React from "react";
import {SvgCircleList} from "./views/circle/index.jsx";
import {RecLine} from './views/line/recLine/recLine'
import './styles/index.scss'
export function App() {
  return (
    <div id="app">
      <div className="svg-show-list">
        <SvgCircleList />
        <RecLine></RecLine>
      </div>
    </div>
  );
}