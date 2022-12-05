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
