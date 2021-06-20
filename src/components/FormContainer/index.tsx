import React from "react";
import { KeyboardAvoidingView, Platform } from "react-native";

const FormContainer: React.FC = ({ children }) => {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      enabled
    >
      {children}
    </KeyboardAvoidingView>
  );
};

export default FormContainer;
