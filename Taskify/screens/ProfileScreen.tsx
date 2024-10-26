import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { colors, styles } from "../styles/styles";
import { Ionicons } from "@expo/vector-icons";
import ProfileScreenButton from "../components/ProfileScreenButton";
import { Divider } from "@rneui/themed";

const ProfileScreen = () => {
  return (
    <View
      style={[
        {
          flex: 1,
          backgroundColor: colors.taskify25,
          paddingHorizontal: 30,
          paddingTop: 60,
          alignItems: "center",
        },
      ]}
    >
      <View
        style={{
          alignItems: "center",
          justifyContent: "space-between",
          height: 125,
        }}
      >
        <Image
          source={require("../assets/CalendarEmpty.png")}
          style={[
            // ทำเสร็จแล้วอย่าลืมเอาออก (debugBorder)
            styles.debugBorder,
            {
              width: 90,
              height: undefined,
              aspectRatio: 1,
              resizeMode: "contain",
              alignSelf: "center",
              borderRadius: 50,
            },
          ]}
        />
        <TouchableOpacity
          style={{
            width: 30,
            height: 30,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "white",
            borderRadius: 50,
            position: "absolute",
            right: 0,
            bottom: 30,
          }}
        >
          <Ionicons name={"pencil"} size={20} color={colors.taskify100} />
        </TouchableOpacity>

        <Text style={{ fontSize: 24, color:colors.taskify100, fontWeight:'500' }}>John Doe</Text>
      </View>
      <View style={{ marginTop: 30, width: "100%" }}>
        <ProfileScreenButton iconName={"person-outline"} buttonText="Account" />
        <ProfileScreenButton
          iconName={"color-wand-outline"}
          buttonText="Theme"
        />
        <ProfileScreenButton iconName={"settings"} buttonText="Settings" />
        <Divider
          style={{
            width: "90%",
            alignSelf: "center",
            marginVertical: 20,
          }}
          width={2}
          color="#0001"
        />
        <ProfileScreenButton
          iconName={"log-out-outline"}
          buttonText="Log out"
        />
        <ProfileScreenButton
          iconName={"help-buoy-outline"}
          buttonText="Help Center"
        />
        <ProfileScreenButton
          iconName={"key-outline"}
          buttonText="Privacy Policy"
        />
      </View>
    </View>
  );
};

export default ProfileScreen;
