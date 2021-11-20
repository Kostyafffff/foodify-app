import { ContainerNavbar } from "./UI/navbar/ContainerNavbar";
import { ContainerRandomDish } from "./UI/randomDish/ContainerRandomDish";
import { Switch, Route } from "react-router-dom";
import { ContainerFavorites } from "./UI/favorites/ContainerFavorites";
import { ContainerForm } from "./UI/form/ContainerForm";
import Theme from "./theme/theme";

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
