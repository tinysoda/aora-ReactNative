import { Image, View, Text } from "react-native";
import React from "react";
import images from "@/constants/images";
const EmptyState = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  return (
    <View className="justify-center items-center px-4">
      <Image
        source={images.empty}
        className="w-[270px] h-[215px]"
        resizeMode="contain"
      />
      <Text className="font-pmedium text-sm text-gray-100">Welcome Back</Text>
      <Text className="text-2xl font-psemibold text-white">Tinysoda</Text>
    </View>
  );
};

export default EmptyState;
