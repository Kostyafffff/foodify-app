import { ContainerNavbar } from "./logic/containers/ContainerNavbar";
import { ContainerRandomDish } from "./logic/containers/ContainerRandomDish";
import { Switch, Route } from "react-router-dom";
import { ContainerFavorites } from "./logic/containers/ContainerFavorites";
import { ContainerForm } from "./logic/containers/ContainerForm";
import Theme from "./theme/theme";
import './index.css';

const Main = () =>(
  <Theme>
      <ContainerNavbar />
      <ContainerRandomDish />
      <ContainerForm />
  </Theme>
);

const FavoritesWithTheme = () =>(
  <Theme>
      <ContainerFavorites/>
  </Theme>
)

const App = () => {
  return (
      <>
        <div className="App">
            <Switch>
                <Route exact path={'/'} component={Main}/>
                <Route path={'/favorites'} component={FavoritesWithTheme} />
            </Switch>
        </div>
      </>
  );
}

export default App;
