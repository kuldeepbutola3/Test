import {
  LoginManager,
  GraphRequest,
  GraphRequestManager,
} from 'react-native-fbsdk';

export function FacebookLogin() {
  LoginManager.logInWithPermissions(['public_profile']).then(
    function(result) {
      if (result.isCancelled) {
        console.log('Login cancelled');
      } else {
        console.log(
          'Login success with permissions: ' + JSON.stringify(result),
        );
        console.log(result);

        fb();
      }
    },
    function(error) {
      console.log('Login fail with error: ' + error);
    },
  );
}
function fb() {
  console.log('fb fai');
  const infoRequest = new GraphRequest('/me', null, _responseInfoCallback);
  // Start the graph request.
  new GraphRequestManager().addRequest(infoRequest).start();
}
function _responseInfoCallback(error, result) {
  if (error) {
    console.log('Error fetching data: ' + error.toString());
  } else {
    console.log('Success fetching data: ' + JSON.stringify(result));
  }
}

//Create response callback.

// Create a graph request asking for user information with a callback to handle the response.
