import { Switch, Route } from "react-router-dom";
import ROUTES from "./const/routes";
import {
  TestPage,
  SelectStreamLevel,
  Result,
  User,
  StreamSelection,
  ResultCopy
} from "./pages";

const Routes = () => {
  return (
    <Switch>
      <Route exact path={ROUTES.LOGIN} component={User} />
      <Route path={ROUTES.STREAMSELECTION} component={StreamSelection} />
      <Route path={ROUTES.TEST} component={TestPage} />
      <Route path={ROUTES.SELECTEDSTREAM} component={SelectStreamLevel} />
      <Route path={ROUTES.RESULT} component={Result} />
       <Route path={ROUTES.RESULTCOPY} component={ResultCopy} />
    </Switch>
  );
};

export default Routes;
