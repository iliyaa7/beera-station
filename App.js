import React from "react";
import { MyStack } from "./src/components";
import { decode, encode } from "base-64";
import { StripeProvider } from '@stripe/stripe-react-native';


const App = () => {
  // solution for "ReferenceError: Can't find variable: btoa" while remote debug disconeted
  if (!global.btoa) {
    global.btoa = encode;
  }

  if (!global.atob) {
    global.atob = decode;
  }


  return (
    <StripeProvider
      publishableKey="pk_test_51LA7ezEHUx8yF09JxJ0XpzrC3EJJr5U02yN0Urs1RG3bV89reeCoePqEwwGd9Ik7pELo7Pe4jJzcVGIw4UTgu4gf00KIx0cS2c"
      urlScheme="your-url-scheme" // required for 3D Secure and bank redirects
      merchantIdentifier="merchant.com.{{YOUR_APP_NAME}}" // required for Apple Pay
    >
      <MyStack />
    </StripeProvider>
  );
};

export default App;
