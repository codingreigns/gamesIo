import { ColorModeProvider } from "@/components/ui/color-mode";
import { Provider } from "@/components/ui/provider";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const CustomProvider = ({ children }: Props) => {
  return (
    <Provider>
      <ColorModeProvider>{children}</ColorModeProvider>
    </Provider>
  );
};

export default CustomProvider;
