import { Sprite } from "@pixi/react";

import React, { useState } from "react";
import { glowFilter } from "../../constants/filters";
import { useSidebar } from "../../context/Sidebar/hooks";
import { usePointerHandler } from "../../lib/hooks/usePointerHandler";

type Props = {
  enableGlowEffect?: boolean;
  metadata?: { objectKey: string };
} & React.ComponentProps<typeof Sprite>;

const CustomSprite: React.FC<Props> = (props) => {
  const [hover, setHover] = useState(false);
  const sidebarContext = useSidebar();
  const pointerHandler = usePointerHandler({
    handleClick: () => {
      sidebarContext.openSidebar(props.metadata?.objectKey ?? "");
    },
  });

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
      eventMode="static"
      {...(props.enableGlowEffect && { cursor: "pointer", ...pointerHandler })}
    />
  );
};

export default CustomSprite;
