import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { StripeProvider } from "@stripe/stripe-react-native";

const SuccessScreen = ({ navigation }) => {

    return (
      <StripeProvider
        publishableKey="pk_test_51LA7ezEHUx8yF09JxJ0XpzrC3EJJr5U02yN0Urs1RG3bV89reeCoePqEwwGd9Ik7pELo7Pe4jJzcVGIw4UTgu4gf00KIx0cS2c"
        urlScheme="your-url-scheme" // required for 3D Secure and bank redirects
      >
        <View style={styles.root}>
          <Text style={styles.title}>Success</Text>
          <Text style={styles.subtitle}>
            The identification process was completed successfully
          </Text>
          <Button
            style={styles.button}
            onPress={() => {}}
            title="Add credit card"
          >
            AAA
          </Button>
        </View>
      </StripeProvider>
    );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#FBFBFB",
  },
  title: {
    fontSize: 22,
    textAlign: "center",
    color: "#353B4E",
    marginTop: 64,
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    color: "#353B4E",
    marginTop: 24,
  },
  resultMessage: {
    textAlign: "center",
    color: "#536DFE",
    marginTop: 36,
    margin: 12,
  },
});

export default SuccessScreen;
