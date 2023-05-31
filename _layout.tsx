import { Drawer } from "expo-router/drawer";

export default function AppLayout() {
  return (
    <Drawer>
    <Drawer.Screen
      name="index" // This is the name of the page and must match the url from root
      options={{
        drawerLabel: "Home",
        title: "Menu",
      }}
    />
    <Drawer.Screen
      name="telaa" // This is the name of the page and must match the url from root
      options={{
        drawerLabel: "Tela A",
        title: "Menu",
      }}
    />
     <Drawer.Screen
      name="telab" // This is the name of the page and must match the url from root
      options={{
        drawerLabel: "Tela B",
        title: "Menu",
      }}
    />
  </Drawer>
  );
}
