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

interface ISearchInputProps {
  title: string;
  value: string;
  placeHolder?: string;
  handleChangeText: (e: any) => void;
  otherStyles: string;
  keyBoardType?: string;
}

const SearchInput = ({
  title,
  value,
  placeHolder,
  handleChangeText,
  otherStyles,
  keyBoardType,
  ...props
}: ISearchInputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    // <KeyboardAvoidingView
    //   behavior="padding"
    //   keyboardVerticalOffset={Platform.OS === "ios" ? 70 : 0}
    // >
    <View className="w-full h-16 px-4 bg-black-100 rounded-2xl items-center border-2 focus:border-secondary flex-row space-x-4">
      <TextInput
        className="text-base mt-0.5 text-white flex-1 font-pregular"
        value={value}
        placeholder={placeHolder}
        placeholderTextColor="#7b7b8b"
        onChangeText={handleChangeText}
        secureTextEntry={title === "Password" && !showPassword}
      />
      <Pressable>
        <Image source={icons.search} className="w-5 h-5" resizeMode="contain" />
      </Pressable>
    </View>
    // </KeyboardAvoidingView>
  );
};

export default SearchInput;
