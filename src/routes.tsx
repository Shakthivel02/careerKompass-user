import { Switch, Route } from "react-router-dom";
import ROUTES from "./const/routes";
import ProtectedRoute from "./container/ProtectedRoute";
import { TestPage, Login, SelectStreamLevel, Result } from "./pages";

const Routes = () => {
  return (
    <Switch>
      <Route exact path={ROUTES.LOGIN} component={Login} />
      <ProtectedRoute path={ROUTES.TEST} component={TestPage} />
      <ProtectedRoute
        path={ROUTES.SELECTED_STREAM}
        component={SelectStreamLevel}
      />
      <ProtectedRoute path={ROUTES.RESULT} component={Result} />
    </Switch>
  );
};

export default Routes;
