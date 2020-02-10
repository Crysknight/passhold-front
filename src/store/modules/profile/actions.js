import router from '@/router';
import { URL, GENERAL, MUTATIONS } from '@/constants';

export default {
  async login({ commit }, source) {
    switch (source) {
      case GENERAL.AUTH_SOURCES.GOOGLE: {
        window.open(URL.BACKEND('/auth/google', 'auth_google'));
        break;
      }
      case GENERAL.AUTH_SOURCES.LINKEDIN: {
        window.open(URL.BACKEND('/auth/linkedin', 'auth_linkedin'));
        break;
      }
    }

    await new Promise(resolve => {
      const receiveMessage = ({ data, origin }) => {
        if (origin !== URL.BACKEND_ORIGIN) {
          return;
        }
        
        commit(MUTATIONS.SET_PROFILE, data);

        resolve();
      }
      window.addEventListener('message', receiveMessage, false);
    });

    router.push('app');
  }
};
