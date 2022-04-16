import { Switch, Route } from "react-router-dom";
import ROUTES from "./const/routes";
import {
  TestPage,
  SelectStreamLevel,
  Result,
  User,
  StreamSelection
} from "./pages";

const Routes = () => {
  return (
    <Switch>
      <Route exact path={ROUTES.LOGIN} component={User} />
      <Route path={ROUTES.STREAMSELECTION} component={StreamSelection} />
      <Route path={ROUTES.TEST} component={TestPage} />
      <Route path={ROUTES.SELECTEDSTREAM} component={SelectStreamLevel} />
      <Route path={ROUTES.RESULT} component={Result} />
       
    </Switch>
  );
};

export default Routes;
