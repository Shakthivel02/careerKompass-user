import { Switch, Route } from "react-router-dom";
import ROUTES from "./const/routes";
import ProtectedRoute from "./container/ProtectedRoute";

import { TestPage, Result, User, StreamSelection, ResultCopy } from "./pages";

const Routes = () => {
  return (
    <Switch>
      <Route exact path={ROUTES.LOGIN} component={User} />
      <ProtectedRoute
        path={ROUTES.STREAMSELECTION}
        component={StreamSelection}
      />
      <ProtectedRoute path={ROUTES.TEST} component={TestPage} />
      <ProtectedRoute path={ROUTES.RESULT} component={Result} />
      <ProtectedRoute path={ROUTES.RESULTCOPY} component={ResultCopy} />
    </Switch>
  );
};

export default Routes;
