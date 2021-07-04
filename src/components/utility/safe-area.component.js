import { StatusBar, SafeAreaView } from "react-native";

import styled from "styled-components/native";

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${StatusBar.currentHeight ?? 0}px;
`;
// ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
