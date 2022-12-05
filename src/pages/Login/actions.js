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
