import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import type { Routes } from "./src/Routes";
import { Examples } from "./src/Examples";
import { YouTube } from "./src/YouTube";
import { LoadAssets } from "./src/components/LoadAssets";
import { Video } from "./src/YouTube/Video";

const fonts = {};

const assets: number[] = [];

const Stack = createStackNavigator<Routes>();
const AppNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Examples"
      component={Examples}
      options={{
        title: "Can it be done in React Native?",
      }}
    />
    <Stack.Screen
      name="YouTube"
      component={YouTube}
      options={{
        title: "📺 YouTube",
        header: () => null,
      }}
    />

    <Stack.Group screenOptions={{ presentation: "modal" }}>
      <Stack.Screen
        name="Video"
        component={Video}
        options={{
          header: () => null,
        }}
      />
    </Stack.Group>
  </Stack.Navigator>
);

const App = () => {
  return (
    <LoadAssets assets={assets} fonts={fonts}>
      <AppNavigator />
    </LoadAssets>
  );
};

// eslint-disable-next-line import/no-default-export
export default App;
