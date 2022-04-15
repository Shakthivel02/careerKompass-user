import { Switch, Route } from "react-router-dom";
import ROUTES from "./const/routes";
import ProtectedRoute from "./container/ProtectedRoute";
import {
  TestPage,
  SelectStreamLevel,
  Result,
  User
} from "./pages";

const Routes = () => {
  return (
    <Switch>
      <Route path={ROUTES.LOGIN} component={User} />
      <ProtectedRoute path={ROUTES.TEST} component={TestPage} />
      <ProtectedRoute path={ROUTES.SELECTEDSTREAM} component={SelectStreamLevel} />
      <ProtectedRoute path={ROUTES.RESULT} component={Result} />
    </Switch>
  );
};

export default Routes;
