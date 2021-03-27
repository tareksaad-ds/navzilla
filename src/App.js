import "./App.css";
import Navzilla from "./components/Navzilla";
import { BrowserRouter as Router } from "react-router-dom";
import { ReactComponent as Dashboard } from "./assests/icons/dashboard.svg";
import { ReactComponent as Drop } from "./assests/icons/drop.svg";
import { ReactComponent as Profile } from "./assests/icons/profile.svg";
import { ReactComponent as Notes } from "./assests/icons/notes.svg";
import { ReactComponent as Messages } from "./assests/icons/messages.svg";
import { ReactComponent as Scores } from "./assests/icons/scores.svg";

function App() {
  return (
    <div className="App">
      <Router>
        <Navzilla
          isHorizontal={false}
          direction={"ltr"}
          items={[
            {
              title: "Dashboard",
              type: "link", // link | menu | group
              icon: Dashboard, // icon component
              link: "#dashboard",
            },
            {
              title: "Drop",
              type: "menu",
              icon: Drop,
              menu: [
                // links only
                {
                  title: "drop 1",
                  link: "#drop1",
                },
                {
                  title: "drop 2",
                  link: "#drop2",
                },
              ],
            },
            {
              title: "Leadership",
              type: "group",
              menu: [
                // links only
                {
                  title: "Tariq Suarez",
                  type: "link", // link | menu | group
                  link: "#tariq",
                },
                {
                  title: "Medz Coder",
                  type: "link", // link | menu | group
                  link: "#medz",
                },
                {
                  title: "Scores",
                  type: "menu",
                  icon: Scores,
                  menu: [
                    {
                      title: "224",
                      link: "#score1",
                    },
                    {
                      title: "115",
                      link: "#score2",
                    },
                  ],
                },
              ],
            },
            {
              title: "Profile",
              type: "menu",
              icon: Profile,
              menu: [
                {
                  title: "Edit Profile",
                  link: "#edit",
                },
                {
                  title: "Logout",
                  link: "#logout",
                },
              ],
            },
            {
              title: "Notes",
              type: "link",
              icon: Notes,
              link: "#notes",
            },
            {
              title: "Charts",
              type: "group",
              menu: [
                {
                  title: "Chart 1",
                  type: "link",
                  link: "#chart1",
                },
                {
                  title: "Chart 2",
                  type: "link",
                  link: "#chart2",
                },
              ],
            },

            {
              title: "Messages",
              type: "menu",
              icon: Messages,
              menu: [
                {
                  title: "Message 1",
                  type: "link",
                  link: "#message1",
                },
                {
                  title: "Message 2",
                  type: "link",
                  link: "#message2",
                },
              ],
            },
          ]}
        />
      </Router>
    </div>
  );
}

export default App;
