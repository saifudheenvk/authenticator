import * as session from 'express-session';

export function setupSession() {
  return session({
    secret: 'cookie_secret',
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false,
      httpOnly: false,
      sameSite: 'lax',
    },
  });
}
