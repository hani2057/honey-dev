import { useNavigate } from "react-router-dom";

import { COLORS } from "@styles/colors";

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
      color={location.startsWith(path) ? COLORS.main[500] : null}
      bold={location.startsWith(path)}
      pointer={true}
      style={{ paddingRight: "1.5rem" }}
    >
      {menu}
    </Text>
  );
};
