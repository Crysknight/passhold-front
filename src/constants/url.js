export const BACKEND_ORIGIN = process.env.NODE_ENV === 'development'
  ? 'http://localhost:5000'
  : 'https://us-central1-passhold-8195f.cloudfunctions.net';

export const BACKEND = path => process.env.NODE_ENV === 'development'
  ? `${BACKEND_ORIGIN}/passhold-8195f/europe-west1/app${path}`
  : `${BACKEND_ORIGIN}/app${path}`;

BACKEND.toString = () => BACKEND('');
