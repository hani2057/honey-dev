import { useNavigate } from "react-router-dom";

import { Text } from "@components/elements";

interface GNBMenuTextProps {
  menu: string;
  path: string;
}

export const GNBMenuText = ({ menu, path }: GNBMenuTextProps) => {
  const navigate = useNavigate();

  return (
    <Text onClick={() => navigate(path)} hColor="blue" pointer={true}>
      {menu}
    </Text>
  );
};
