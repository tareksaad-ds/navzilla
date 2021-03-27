import "./App.css";
import Navzilla from "./components/Navzilla";
import { BrowserRouter as Router } from "react-router-dom";
import { ReactComponent as Dashboard } from "./assests/icons/dashboard.svg";
import { ReactComponent as Drop } from "./assests/icons/drop.svg";

function App() {
  return (
    <div className="App">
      <Router>
        <Navzilla 
        isHorizontal={false}
        direction={'rtl'}
        items={[
          {
            title: 'dashboard',
            type: 'link', // link | menu | groupTitle
            icon: Dashboard, // icon component
            link: '#dashboard'
          },
          {
            title: 'Drop',
            type: 'menu',
            icon: Drop,
            menu: [ // links only
              {
                title: 'drop 1',
                link: '#drop1'
              },
              {
                title: 'drop 2',
                link: '#drop2'
              }
            ]
          }
        ]}
        />
      </Router>
    </div>
  );
}

export default App;
