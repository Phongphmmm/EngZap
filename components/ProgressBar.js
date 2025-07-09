import React from "react";
import * as Progress from "react-native-progress";
import Colors from "../constants/Colors";

const ProgressBar = ({ progress }) => (
  <Progress.Bar
    progress={progress}
    width={250}
    color={Colors.primary}
    style={{ marginBottom: 20 }}
  />
);

export default ProgressBar;
