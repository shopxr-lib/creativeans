import { Stage as PixiStage } from "@pixi/react";
import { WorldContext } from "./WorldContext";
import { PropsWithChildren } from "react";

export const ContextBridge: React.FC<
  PropsWithChildren<{
    Context: React.Context<any>;
    render: (value: any) => React.ReactElement;
  }>
> = ({ children, Context, render }) => {
  return (
    <Context.Consumer>
      {(value: any) =>
        render(<Context.Provider value={value}>{children}</Context.Provider>)
      }
    </Context.Consumer>
  );
};

type StageProps = React.ComponentProps<typeof PixiStage>;

export const Stage: React.FC<StageProps> = ({ children, ...props }) => {
  return (
    <ContextBridge
      Context={WorldContext}
      render={(children) => <PixiStage {...props}>{children}</PixiStage>}
    >
      {children}
    </ContextBridge>
  );
};
