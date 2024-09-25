import { Sprite } from "@pixi/react";

import React, { useState } from "react";
import { glowFilter } from "../../constants/filters";
import { useSidebar } from "../../context/Sidebar/hooks";
import { usePointerHandler } from "../../lib/hooks/usePointerHandler";
import { useEventContext } from "../../context/Event/hooks";

type Props = {
  enableGlowEffect?: boolean;
  metadata?: { objectKey: string };
} & React.ComponentProps<typeof Sprite>;

const CustomSprite: React.FC<Props> = (props) => {
  const [hover, setHover] = useState(false);
  const sidebarContext = useSidebar();
  const eventContext = useEventContext();
  const pointerHandler = usePointerHandler({
    handleClick: () => {
      setHover(false);
      sidebarContext.openSidebar(props.metadata?.objectKey ?? "");
    },
    onPointerUp: () => setHover(false),
  });

  const onMouseOver = () => {
    setHover(true);
  };

  const onMouseOut = () => {
    setHover(false);
  };

  const onpointermove = () => {
    setHover(true);
  };

  return (
    <Sprite
      {...props}
      image={props.image}
      mouseover={onMouseOver}
      mouseout={onMouseOut}
      mousedown={onMouseOver}
      onpointermove={onpointermove}
      filters={props.enableGlowEffect && hover ? [glowFilter] : []}
      eventMode={eventContext.enabled ? "static" : "none"}
      {...(props.enableGlowEffect && { cursor: "pointer", ...pointerHandler })}
    />
  );
};

export default CustomSprite;
