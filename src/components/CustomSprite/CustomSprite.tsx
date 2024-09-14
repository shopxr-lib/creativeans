import { Sprite } from "@pixi/react";

import React, { useState } from "react";

type Props = {
  hoverImg?: string;
} & React.ComponentProps<typeof Sprite>;

const CustomSprite: React.FC<Props> = (props) => {
  const [hover, setHover] = useState(false);

  const onMouseOver = () => {
    setHover(true);
  };

  const onMouseOut = () => {
    setHover(false);
  };

  return (
    <Sprite
      {...props}
      image={hover ? props.hoverImg : props.image}
      mouseover={onMouseOver}
      mouseout={onMouseOut}
      mousedown={onMouseOver}
      cursor="pointer"
      interactive
    />
  );
};

export default CustomSprite;
