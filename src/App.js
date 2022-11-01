import { Provider } from "react-redux";
import TestPage from "./components/testPage";
import { store } from "./store/store";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
 <Provider store={store}>
  <TestPage/>
 </Provider>
 </BrowserRouter>
  );
}

export default App;
