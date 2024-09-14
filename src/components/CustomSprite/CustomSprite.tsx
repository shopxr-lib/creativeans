import { Sprite } from "@pixi/react";

import React, { useState } from "react";
import { glowFilter } from "../../constants/filters";

type Props = { enableGlowEffect?: boolean } & React.ComponentProps<
  typeof Sprite
>;

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
      image={props.image}
      mouseover={onMouseOver}
      mouseout={onMouseOut}
      mousedown={onMouseOver}
      filters={props.enableGlowEffect && hover ? [glowFilter] : []}
      interactive
      {...(props.enableGlowEffect && { cursor: "pointer" })}
    />
  );
};

export default CustomSprite;
