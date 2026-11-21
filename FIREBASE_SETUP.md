# Firebase admin setup

The website uses Firebase Authentication (Google sign-in) and Cloud Firestore. Only the verified Google account configured in `firestore.rules` can write the public content. Visitors can read it without signing in.

1. In Firebase Console, enable Authentication > Sign-in method > Google.
2. Create a Cloud Firestore database in a suitable region. Start with locked-down rules.
3. In Firestore > Rules, copy the contents of `firestore.rules` and publish them. Do this before saving any portfolio data. Do not use permissive or test-mode rules.
4. In Authentication > Settings > Authorized domains, add `localhost` for development and your VPS domain for production. For production Google sign-in, check Firebase's guidance for self-hosted domains and auth redirects.
5. Run `npm install` and `npm run dev`, then open `/admin` on the local development server. Sign in as the configured Google account. Existing sample content appears until the first save; saving publishes it to Firestore. Changes after that update open portfolio pages live.
6. Configure your VPS web server to serve `index.html` as a fallback for `/admin`, and use HTTPS. Deploy the built `dist` directory after `npm run build`.

The Firebase web configuration identifies the project and is public. Do not add a service-account private key or password to this repository. Firebase Storage uploads are not implemented; use a public HTTPS link to a certificate instead. The Admin page is an interface, not a security boundary; published Firestore Security Rules are essential.
