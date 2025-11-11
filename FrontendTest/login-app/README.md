### Frontend Login Page — React Demo
## Overview

This is a responsive, frontend-only login page built using React, HTML, CSS, and JavaScript. It demonstrates a clean, professional login interface with form validation, password criteria checks, toast notifications, and interactive UI elements.

⚠️ Note: All functionality is frontend-only; no backend is used. Sample credentials are hardcoded for demonstration purposes.

## Features

1. Login Form

- Centered form on a plain, modern background.
- Inputs for email and password.
- Login button.
- “Forgot password?” link triggers a toast notification.

2. Password Validation

- Password must be 8–16 characters.
- Must include:
  - One uppercase letter
  - One lowercase letter
  - One number
  - One symbol

- Criteria are shown only after login attempt.

3. Email Validation

- Email field cannot be empty.
- Shows error if email does not exist in the demo list.
- Shows error if password is incorrect.

4. Interactive UI

- Eye icon to toggle password visibility.
- Error messages displayed below the login button.
- Responsive layout for desktop and mobile.
- Toast notifications for:
  - Successful login
  - Forgot password click

5. Successful Login

- Hides the login form.
- Shows a welcome message with the logged-in email.
- Includes a logout button to return to the login form.

## Demo Credentials
| Email             | Password     |
|------------------|-------------|
| test@example.com  | Password1!  |
| admin@example.com | Admin123#   |

## How to Run

1. Clone the repository (or copy the project folder).

```bash
git clone https://github.com/pandeybishwas5/SolumClinic
cd FrontendTest/login-app
```


2. Install dependencies (React and icons):

```bash
npm install
```


3. Start the development server:

```bash
npm start
```


4. Open your browser at http://localhost:3000 to see the login page.

## Technical Notes

- All validation is handled on the frontend.
- Form is responsive and does not resize when errors occur.
- Password criteria only appear after the user clicks login.
- Toast notifications are displayed at the top of the screen for better visibility.
- No backend or API calls are used; all data is simulated.

## Notes for Reviewers

- The login page is fully interactive and meets all requirements of a typical frontend technical assessment.
- All errors, notifications, and UI behavior are professional and user-friendly.
- Works across desktop and mobile devices.
