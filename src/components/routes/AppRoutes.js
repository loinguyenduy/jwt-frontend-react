import { Switch, Route } from "react-router-dom";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Users from "../ManageUsers/Users";
import PrivateRoutes from "./PrivateRoutes";

const Project = () => {
  return (
    <span>project</span>
  )
}
const AppRoutes = (props) => {
  return (
    <>
      <Switch>

        <PrivateRoutes path="/users" component={Users}/>
        <PrivateRoutes path="/projects" component={Project}/>

        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>

        <Route path="/" exact>
          Home
        </Route>
        <Route path="*">404 Not found</Route>
      </Switch>
    </>
  );
};

export default AppRoutes;
