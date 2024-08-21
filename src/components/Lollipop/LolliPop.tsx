import React, { useState } from "react";
import { Sprite, useTick } from "@pixi/react";

type Props = React.ComponentProps<typeof Sprite>;

const speed = 0.025;

const Lollipop: React.FC<Props> = (props) => {
  const [rotation, setRotation] = useState(() => Math.random() * Math.PI * 2);

  useTick((delta) => {
    setRotation((prevRotation) => prevRotation + speed * delta);
  });

  return <Sprite {...props} rotation={rotation} />;
};

export default Lollipop;
