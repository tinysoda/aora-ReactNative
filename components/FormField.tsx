import {
  View,
  Text,
  TextInput,
  Pressable,
  Image,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useState } from "react";
import { icons } from "@/constants";

const FormField = ({
  title,
  value,
  placeHolder,
  handleChangeText,
  otherStyles,
  keyBoardType,
  ...props
}: {
  title: string;
  value: string;
  placeHolder?: string;
  handleChangeText: (e: any) => void;
  otherStyles: string;
  keyBoardType?: string;
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    // <KeyboardAvoidingView
    //   behavior="padding"
    //   keyboardVerticalOffset={Platform.OS === "ios" ? 70 : 0}
    // >
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base text-gray-100 font-pmedium">{title}</Text>
      <View className="w-full h-16 px-4 bg-black-100 rounded-2xl items-center border-2 focus:border-secondary flex-row">
        <TextInput
          className="flex-1 text-white font-psemibold text-base w-full "
          value={value}
          placeholder={placeHolder}
          placeholderTextColor="#7b7b8b"
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
        />
        {title === "Password" && (
          <Pressable onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              className="w-6 h-6"
              resizeMode="contain"
            />
          </Pressable>
        )}
      </View>
    </View>
    // </KeyboardAvoidingView>
  );
};

export default FormField;
