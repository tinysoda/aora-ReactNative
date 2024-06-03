import { View, Text, FlatList } from "react-native";
import React from "react";

interface ITrendingProps {
  posts: any;
}

const Trending = ({ posts }: ITrendingProps) => {
  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => item.$id}
      renderItem={({ item }) => (
        <Text className="text-3xl text-white">{item.id}</Text>
      )}
      horizontal
    />
  );
};

export default Trending;
