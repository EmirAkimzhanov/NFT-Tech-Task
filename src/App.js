import { Provider } from "react-redux";
import TestPage from "./components/testPage";
import { store } from "./store/store";
import { BrowserRouter } from "react-router-dom";
import Mainroutes from "./Mainroutes";
// ..
function App() {
  return (
    <BrowserRouter>
     <Provider store={store}>
   <Mainroutes />
  {/* <TestPage/> */}
    </Provider>
 </BrowserRouter>
  );
}

export default App;
