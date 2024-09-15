import { Sprite } from "@pixi/react";

import React, { useState } from "react";
import { glowFilter } from "../../constants/filters";
import { useSidebar } from "../../context/Sidebar/hooks";

type Props = {
  enableGlowEffect?: boolean;
  metadata?: { iframeUrl: string };
} & React.ComponentProps<typeof Sprite>;

const CustomSprite: React.FC<Props> = (props) => {
  const [hover, setHover] = useState(false);
  const sidebarContext = useSidebar();

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
      onpointerdown={() =>
        sidebarContext.openSidebar(props.metadata?.iframeUrl ?? "")
      }
      {...(props.enableGlowEffect && { cursor: "pointer" })}
    />
  );
};

export default CustomSprite;
