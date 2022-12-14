import https from '../../services/https';

/**
 * This is a function to send and sync request to
 * the server and check if the user is registered
 * @param {username:string, password:string} param
 * @returns an object contains the request status and
 * token in case of successful login request.
 */
export const fetchToken = async ({ username, password }) => {
  const response = https.post('login', {
    username,
    password,
  });

  return response;
};

/**
 * This is an async function to grab the current
 * user information based on the provided token.
 * @param {string} token is a string generated in backend
 * @returns an object contains current user information
 */
export const fetchUserData = async (token) => {
  const response = https.get('users/me', {
    headers: {
      authorization: token,
    },
  });

  return response;
};

/**
 * This is a function to create a cookie for storing
 * the token iin user side for next time automatic
 * logging in operation.
 * @param {string} cName is the name of cookie
 * @param {string} cValue is the value of cookie
 * @param {number} exDays is the number of days that
 * cookie is valid for.
 */
export function setCookie(cName, cValue, exDays) {
  const d = new Date();
  d.setTime(d.getTime() + exDays * 24 * 60 * 60 * 1000);
  const expires = `expires=${d.toUTCString()}`;
  document.cookie = `${cName}=${cValue};${expires};path=/`;
}

/**
 * This is a function to get an specific cookie value.
 * @param {string} cName is the name of the cookie
 * we are looking for it's value.
 * @returns a string indicating to the value of the
 * specified cookie name as a argument.
 */
export function getCookie(cName) {
  const name = `${cName}=`;
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i += 1) {
    let c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
}
