import {
  View,
  Text,
  ScrollView,
  Image,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import FormField from "@/components/FormField";
import CustomButton from "@/components/CustomButton";
import { Link, router } from "expo-router";
import { createUser } from "@/lib/appwrite";

const SignUp = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const submit = async () => {
    if (!form.email || !form.password || !form.username) {
      Alert.alert("Error", "Fill in all the field");
    } else {
      setIsSubmitting(true);
      try {
        const result = createUser(form.email, form.password, form.username);
        // Set it to global state
        router.replace("/home");
      } catch (error: any) {
        Alert.alert("Error", error.message);
      } finally {
        setIsSubmitting(false);
      }
    }
  };
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        {/* <KeyboardAvoidingView
          behavior="padding"
          keyboardVerticalOffset={Platform.OS === "ios" ? 70 : 0}
        > */}
        <View className="w-full justify-center min-h-[85vh] px-4 my-6">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[115px] h-[35px]"
          />
          <Text className="text-2xl text-white text-semibold mt-10 font-semibold">
            Sign up new Aora account
          </Text>
          <FormField
            title="Username"
            value={form.username}
            placeHolder="Your email here"
            handleChangeText={(e) => setForm({ ...form, username: e })}
            otherStyles="mt-10"
          />
          <FormField
            title="Email"
            value={form.email}
            placeHolder="Your email here"
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyBoardType="email-adress"
          />
          <FormField
            title="Password"
            value={form.password}
            placeHolder="Your password"
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
          />

          <CustomButton
            title="Sign Up"
            handlePress={submit}
            containerStyles={"mt-7"}
            textStyles={""}
            isLoading={isSubmitting}
          />
          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-white text-lg font-pregular">
              Already have an account?
            </Text>
            <Link
              href="./sign-in"
              className="text-lg font-psemibold text-secondary"
            >
              Log In
            </Link>
          </View>
        </View>
        {/* </KeyboardAvoidingView> */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
