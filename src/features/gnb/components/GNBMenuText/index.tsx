import { useNavigate } from "react-router-dom";

import { Text } from "@components/elements";

interface GNBMenuTextProps {
  menu: string;
  path: string;
  location: string;
}

export const GNBMenuText = ({ menu, path, location }: GNBMenuTextProps) => {
  const navigate = useNavigate();

  return (
    <Text
      onClick={() => navigate(path)}
      color={location === path ? "blue" : null}
      bold={location === path}
      pointer={true}
    >
      {menu}
    </Text>
  );
};
