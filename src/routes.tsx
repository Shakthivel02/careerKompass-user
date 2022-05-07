import { Switch, Route } from "react-router-dom";
import ROUTES from "./const/routes";
import ProtectedRoute from "./container/ProtectedRoute";

import { TestPage, User, StreamSelection, Result } from "./pages";
import AboutPage from "./pages/AboutPage";

const Routes = () => {
  return (
    <Switch>
      <Route exact path={ROUTES.LOGIN} component={User} />
      < Route
        path={ROUTES.STREAMSELECTION}
        component={StreamSelection}
      />
      < Route path={ROUTES.TEST} component={TestPage} />
      <Route path={ROUTES.RESULTCOPY} component={Result} />
      <Route path={ROUTES.ABOUT} component={AboutPage} />
    </Switch>
  );
};

export default Routes;
