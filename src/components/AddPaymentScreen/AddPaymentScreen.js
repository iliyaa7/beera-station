import { useStripe } from "@stripe/stripe-react-native";
import React, {useState, useEffect} from "react";
import {View, Button} from 'react-native';


export default function AddPaymentScreen() {
    const { initPaymentSheet, presentPaymentSheet } = useStripe();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        initializePaymentSheet();
      }, []);
  
    const fetchPaymentSheetParams = async () => {
      const response = await fetch(`${API_URL}/payment-sheet`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const { setupIntent, ephemeralKey, customer } = await response.json();
  
      return {
        setupIntent,
        ephemeralKey,
        customer,
      };
    };
  
    const initializePaymentSheet = async () => {
      const {
        setupIntent,
        ephemeralKey,
        customer,
      } = await fetchPaymentSheetParams();
  
      const { error } = await initPaymentSheet({
        customerId: customer,
        customerEphemeralKeySecret: ephemeralKey,
        setupIntentClientSecret: setupIntent,
      });
      if (!error) {
        setLoading(true);
      }
    };
  
    const openPaymentSheet = async () => {
      // see  const { error } = await presentPaymentSheet();
    
        if (error) {
            Alert.alert(`Error code: ${error.code}`, error.message);
          } else {
            Alert.alert('Success', 'Your payment method is successfully set up for future payments!');
          }
    };
  
   
  
    
    return (
      <View>
        <Button
          variant="primary"
          disabled={!loading}
          title="Set up"
          onPress={openPaymentSheet}
        />
      </View>
    );

  }




