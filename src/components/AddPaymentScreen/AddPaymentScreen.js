import { useStripe } from "@stripe/stripe-react-native";
import React, { useState, useEffect } from "react";
import { View, Button } from "react-native";
import PaymentApiService from "../../services/PaymentApi";

export default function AddPaymentScreen({ navigation }) {
  const { initPaymentSheet, presentPaymentSheet } = useStripe();
  const [loading, setLoading] = useState(false);
  const [customerID, setCustomerID] = useState("");

  useEffect(() => {
    initializePaymentSheet();
  }, []);

  const initializePaymentSheet = async () => {
    try {
      const response = await PaymentApiService.createStripeCustomer();
      const { setupIntent, ephemeralKey, customer } = response.data;

      const { error } = await initPaymentSheet({
        customerId: customer,
        customerEphemeralKeySecret: ephemeralKey,
        setupIntentClientSecret: setupIntent,
        merchantDisplayName: "anything",
      });
      if (!error) {
        setLoading(true);
        setCustomerID(customer);
        console.log(setupIntent, ephemeralKey, customer);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const openPaymentSheet = async () => {
    const { error } = await presentPaymentSheet();
    if (error) {
      console.log(`Error code: ${error.code}`, error.message);
    } else {
      console.log(
        "Success",
        "Your payment method is successfully set up for future payments!"
      );
      navigation.navigate("Charge", { customerID });
    }
  };

  return (
    <View>
      <Button
        variant="primary"
        disabled={!loading}
        title="Add payment method"
        onPress={openPaymentSheet}
      ></Button>
    </View>
  );
}
