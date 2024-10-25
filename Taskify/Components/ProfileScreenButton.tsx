import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { colors, styles } from "../styles/styles";

type ButtonProps = {
  iconName: any;
  buttonText: string;
};

const ProfileScreenButton = ({
  iconName = "person-outline",
  buttonText,
}: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[
        // styles.debugBorder,
        {
          flexDirection: "row",
          alignItems: "center",
          marginVertical: 20,
          paddingHorizontal: 20,
          justifyContent: "space-between",
        },
      ]}
    >
      <View style={{ flexDirection: "row" }}>
        <Ionicons name={iconName} size={24} color={colors.taskify100} />
        <Text style={{ fontSize: 16, paddingLeft: 15 }}>{buttonText}</Text>
      </View>
      <Ionicons name={"chevron-forward"} size={24} color={colors.taskify100} />
    </TouchableOpacity>
  );
};

export default ProfileScreenButton;
