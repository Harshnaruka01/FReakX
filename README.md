# FReakX - Indian Cultural Fashion E-Commerce

A React + Vite application showcasing authentic Indian cultural attire and fashion from different states.

## Firebase Authentication Setup

**IMPORTANT:** Before Firebase login will work, you must enable Authentication in your Firebase Console:

### Steps to Enable Firebase Authentication:

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project: **freakx-auth**
3. Click on **Authentication** in the left sidebar
4. Click **Get Started** (if you haven't enabled it yet)
5. Go to the **Sign-in method** tab
6. Enable the following sign-in providers:
   - **Email/Password**: Click on it → Enable → Save
   - **Google**: Click on it → Enable → Add your project support email → Save

### Authorized Domains:

Make sure your local development domain is authorized:
- Go to Authentication → Settings → Authorized domains
- Add `localhost` if it's not already there (it should be by default)

## Running the Project

```bash
npm install
npm run dev
```

## Features

- Browse products by Indian states
- User authentication (Email/Password and Google Sign-in)
- Product search and filtering
- Responsive design

## Troubleshooting

If login is not working:
1. Check browser console for error messages
2. Verify Authentication is enabled in Firebase Console
3. Check that your Firebase config in `src/firebase.js` is correct
4. Ensure authorized domains include your current domain
