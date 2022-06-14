import React from "react";
import { MyStack } from "./src/components";
import { decode, encode } from "base-64";
import { StripeProvider, useStripe } from '@stripe/stripe-react-native';


const App = () => {
  // solution for "ReferenceError: Can't find variable: btoa" while remote debug disconeted
  if (!global.btoa) {
    global.btoa = encode;
  }

  if (!global.atob) {
    global.atob = decode;
  }

  // const { handleURLCallback } = useStripe();

  // const handleDeepLink = useCallback(
  //   async (url) => {
  //     if (url && url.includes('safepay')) {
  //       await handleURLCallback(url);
  //       // Add extra handling here as you see fit
  //     }
  //   },
  //   [handleURLCallback]
  // );

  // useEffect(() => {
  //   const getUrlAsync = async () => {
  //     const initialUrl = await Linking.getInitialURL();
  //     handleDeepLink(initialUrl);
  //   };

  //   getUrlAsync();

  //   const deepLinkListener = Linking.addEventListener(
  //     'url',
  //     (event: { url: string }) => {
  //       handleDeepLink(event.url);
  //     }
  //   );

  //   return () => deepLinkListener.remove();
  // }, [handleDeepLink]);

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
