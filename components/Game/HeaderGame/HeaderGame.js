import React, { useState, useEffect } from "react";
import { Grid, Image, Icon, Button } from "semantic-ui-react";
import { size } from "lodash";

export default function HeaderGame(props) {
  const { game } = props;
  const { poster, title } = game;
  console.log(game);
  return (
    <Grid className="header-game">
      <Grid.Column mobile={16} tablet={6} computer={5}>
        <Image src={poster.url} alt={title} fluid />
      </Grid.Column>
      <Grid.Column mobile={16} tablet={10} computer={11}>
        <Info game={game} />
      </Grid.Column>
    </Grid>
  );
}

function Info(props) {
  const { game } = props;
  const { title, summary, price, discount } = game;
  return (
    <>
      <div className="header-game__title">
        {title}
        <Icon name="heart outline" link />
      </div>
      <div className="header-game__delivery">Entrega en 24/48 horas</div>
      <div
        className="header-game__summary"
        dangerouslySetInnerHTML={{ __html: summary }}
      />
      <div className="header-game__buy">
        <div className="header-game__buy-price">
          <p>Precio de Venta al Publico: ${price}</p>
          {discount ? (
            <div className="header-game__buy-price-actions">
              <p>-{discount}%</p>
              <p>${price - Math.floor(price * discount) / 100}</p>
            </div>
          ) : (
            <div className="header-game__buy-price-actions">
              <p>${price}</p>
            </div>
          )}
        </div>
        <Button className="header-game__buy-btn">Comprar</Button>
      </div>
    </>
  );
}
