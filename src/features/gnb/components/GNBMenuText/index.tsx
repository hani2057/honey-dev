import { Text } from "@components/elements";

interface GNBMenuTextProps {
  menu: string;
}

export const GNBMenuText = ({ menu }: GNBMenuTextProps) => {
  return (
    <Text hColor="blue" pointer={true}>
      {menu}
    </Text>
  );
};
