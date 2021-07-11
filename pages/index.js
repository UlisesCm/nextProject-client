import React, { useState, useEffect } from "react";
import { Loader } from "semantic-ui-react";
import { size, map } from "lodash";
import BasicLayout from "../layouts/BasicLayout";
import { getLastGamesApi } from "../api/game";
import ListGames from "../components/ListGames";

export default function Home() {
  const [games, setGames] = useState(null);
  console.log(games);
  useEffect(() => {
    (async () => {
      const response = await getLastGamesApi(50);
      if (size(response) > 0) setGames(response);
      else setGame([]);
    })();
  }, []);
  return (
    <BasicLayout className="home">
      {!games && <Loader active> Cargando Juegos</Loader>}
      {games && size(games) === 0 && (
        <div>
          <h3>No hay Juegos</h3>
        </div>
      )}
      {size(games) > 0 && <ListGames games={games} />}
    </BasicLayout>
  );
}
