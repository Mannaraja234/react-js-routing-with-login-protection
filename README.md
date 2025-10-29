🛡️ React JS Routing with Login Protection

A simple React.js frontend authentication system using React Router v6 and Context API for state management.
Includes protected routes that only logged-in users can access.


---

🚀 Features

🔐 Protected routes using PrivateRoute

🔑 Simple authentication flow with login/logout

⚙️ React Context for global auth state

🧭 React Router v6 for modern routing

🧠 Easily extendable to use JWT/localStorage



---

📁 Project Structure

src/
 ├── App.js
 ├── index.js
 ├── components/
 │    ├── Login.js
 │    ├── Dashboard.js
 ├── context/
 │    └── AuthContext.js
 └── routes/
      └── PrivateRoute.js


---

🧰 Tech Stack

React 18+

React Router DOM v6

Context API

JavaScript (ES6)



---

⚙️ Installation & Setup

1. Clone the repository

git clone https://github.com/yourusername/react-login-protected-routing.git
cd react-login-protected-routing


2. Install dependencies

npm install


3. Start the app

npm start


4. Open in browser

http://localhost:3000




---

🧠 How It Works

The app uses a React Context (AuthContext) to store login state.

When the user logs in, setUser() updates global context.

The PrivateRoute component checks if a user is logged in:

✅ If yes → renders the protected page.

❌ If no → redirects to /login.


On logout, the context resets and access to private routes is blocked again.



---

🔒 Authentication Flow Diagram

[ User visits /dashboard ]
        │
        ▼
  [ PrivateRoute checks user ]
        │
   ┌────┴────┐
   │          │
No user   User logged in
   │          │
Redirect → /login   Render → Dashboard


---

🧑‍💻 Example Credentials

For demo:

Username: admin
Password: 1234


---

🔧 Customization

To use real authentication (JWT, API calls):

Replace the dummy login logic in AuthContext.js:

const login = async (username, password) => {
  const res = await fetch("/api/login", { ... });
  const data = await res.json();
  setUser(data.user);
  localStorage.setItem("token", data.token);
};

And check the token inside PrivateRoute.js.

Author 
*Mannaraja M*
Email:[mannarajaraja10@gmail.com]
GitHub:[


---

📜 License

This project is open source and available under the MIT License.
