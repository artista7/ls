import React from "react";
import Navbar from "./../components/Navbar";
import IndexPage from "./index";
import AboutPage from "./about";
import FaqPage from "./faq";
import ContactPage from "./contact";
import { Switch, Route, Router } from "./../util/router.js";
import Divider from "./../components/Divider";
import Footer from "./../components/Footer";

function App(props) {
  return (
    <Router>
      <>
        <Navbar
          color="primary"
          spaced={true}
          logo="https://uploads.divjoy.com/logo-white.svg"
        />

        <Switch>
          <Route exact path="/" component={IndexPage} />

          <Route exact path="/about" component={AboutPage} />

          <Route exact path="/faq" component={FaqPage} />

          <Route exact path="/contact" component={ContactPage} />

          <Route
            component={({ location }) => {
              return (
                <div
                  style={{
                    padding: "50px",
                    width: "100%",
                    textAlign: "center"
                  }}
                >
                  The page <code>{location.pathname}</code> could not be
                  found.
                  </div>
              );
            }}
          />
        </Switch>

        <Divider color="light" />
        <Footer
          color="white"
          size="medium"
          backgroundImage=""
          backgroundImageOpacity={1}
          description="Your everything for campus recruitment."
          copyright="© 2019 Company"
          logo="https://uploads.divjoy.com/logo.svg"
        />
      </>
    </Router>
  );
}

export default App;
