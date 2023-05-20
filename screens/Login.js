import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Button from "../Components/Button";
import Colors from "../constants/Colors";
import LabeledInput from "../Components/LabeledInput";
export default () => {
  const [isCreateMode, setCreateMode] = useState(false);
  const [emailField, setEmailField] = useState({
    text: "",
    errorMessage: "",
  });
  const [passwordField, setPasswordField] = useState({
    text: "",
    errorMessage: "",
  });
  const [passwordReentryField, setPasswordReentryField] = useState({
    text: "",
    errorMessage: "",
  });

  return (
    <View style={styles.container}>
      <Text style={styles.header}> 🏗 BbAPP</Text>
      <View style={{ flex: 1 }}>
        <LabeledInput
          label="Email"
          text={emailField.text}
          onChangeText={(text) => {
            setEmailField({ text });
          }}
          errorMessage={emailField.errorMessage}
          labelStyle={styles.label}
          autoCompleteType="email"
        />
        <LabeledInput
          label="Password"
          text={passwordField.text}
          onChangeText={(text) => {
            setPasswordField({ text });
          }}
          errorMessage={passwordField.errorMessage}
          labelStyle={styles.label}
          autoCompleteType="password"
          secureTextEntry={true}
        />
        {isCreateMode && (
          <LabeledInput
            label="Re-enter password "
            text={passwordReentryField.text}
            onChangeText={(text) => {
              setPasswordReentryField({ text });
            }}
            errorMessage={passwordReentryField.errorMessage}
            labelStyle={styles.label}
            secureTextEntry={true}
          />
        )}

        <TouchableOpacity
          onPress={() => {
            setCreateMode(!isCreateMode);
          }}
        >
          <Text
            style={{
              alignSelf: "center",
              color: Colors.blue,
              fontSize: 16,
              margin: 4,
            }}
          >
            {isCreateMode ? "Already have an account?" : "Create new account"}
          </Text>
        </TouchableOpacity>
      </View>
      <Button
        onPress={() => {}}
        buttonStyle={{ backgroundColor: Colors.red }}
        text={isCreateMode ? "Create Account" : "Login"}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-between",
    alignItems: "stretch",
  },
  label: { fontSize: 16, fontWeight: "bold", color: Colors.black },
  header: { fontSize: 72, color: Colors.red, alignSelf: "center" },
});
