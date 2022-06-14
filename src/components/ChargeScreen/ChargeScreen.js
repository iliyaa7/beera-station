import React from "react";
import { View, Button } from "react-native";
import PaymentApiService from "../../services/PaymentApi";

export default function ChargeScreen({ route }) {
  const customerID = route.params.customerID;

  const chargeUser = async () => {
    try {
      const response = await PaymentApiService.chargeUser(100, customerID);
      console.log(response.data);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <View>
      <Button variant="primary" title="Pay" onPress={chargeUser}></Button>
    </View>
  );
}
