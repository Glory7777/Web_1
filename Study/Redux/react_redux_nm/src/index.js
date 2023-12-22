import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { Provider } from "react-redux";
import store from "./store"
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

    <Provider store={store}>
<App />
</Provider>,
//<App /> 컴포넌트가 <Provider> 컴포넌트로 감싸져 있으며, store라는 Redux 스토어가 <Provider> 컴포넌트에 전달되어 전역 상태를 관리할 수 있도록 설정된것
);