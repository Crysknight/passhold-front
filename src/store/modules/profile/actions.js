import { URL, GENERAL } from '@/constants';

export default {
  async login(_context, source) {
    switch (source) {
      case GENERAL.AUTH_SOURCES.GOOGLE: {
        window.open(URL.BACKEND('/auth/google', 'auth_google'));
      }
    }

    const receiveMessage = ({ data, origin }) => {
      if (origin !== URL.BACKEND_ORIGIN) {
        return;
      }

      console.log(data);
    }
    window.addEventListener('message', receiveMessage, false);
  }
};
