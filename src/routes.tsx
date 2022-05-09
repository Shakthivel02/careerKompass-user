import { ReactElement } from "react";
import { Switch, Route } from "react-router-dom";
import ROUTES from "./const/routes";
import ProtectedRoute from "./container/ProtectedRoute";
import { TestPage, User, StreamSelection, Result } from "./pages";
import AboutPage from "./pages/AboutPage";

const Routes = (): ReactElement => {
  return (
    <Switch>
      <Route exact path={ROUTES.LOGIN} component={User} />
      <ProtectedRoute
        path={ROUTES.STREAMSELECTION}
        component={StreamSelection}
      />
      <ProtectedRoute path={ROUTES.TEST} component={TestPage} />
      <ProtectedRoute path={ROUTES.RESULTCOPY} component={Result} />
      <ProtectedRoute path={ROUTES.ABOUT} component={AboutPage} />
    </Switch>
  );
};

export default Routes;
