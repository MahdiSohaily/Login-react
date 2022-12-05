import https from '../../services/https';

export const fetchToken = async ({ username, password }) => {
  const response = https.post('login', {
    username,
    password,
  });

  return response;
};

export const fetchUserData = async (token) => {
  const response = https.get('users/me', {
    headers: {
      authorization: token,
    },
  });

  return response;
};

export function setCookie(cname, cValue, exDays) {
  const d = new Date();
  d.setTime(d.getTime() + exDays * 24 * 60 * 60 * 1000);
  const expires = `expires=${d.toUTCString()}`;
  document.cookie = `${cname}=${cValue};${expires};path=/`;
}

export function getCookie(cname) {
  const name = `${cname}=`;
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
