# 🍳 RecipeBook — React JS Practical Project

RecipeBook is a simple recipe management web application built using React.js, Redux Toolkit, React Bootstrap, Firebase Authentication, and JSON Server. Users can explore recipes, view recipe details, sort and filter recipes, and manage recipes after logging in.

##screenshot
<img width="2560" height="1857" alt="project-react" src="https://github.com/user-attachments/assets/bb11e6f0-415d-4155-b2bc-47ecbc1a3570" />

<img width="1280" height="832" alt="Screenshot 2026-10-19 at 1 57 03 PM" src="https://github.com/user-attachments/assets/f48156cd-e112-4521-be07-fe1550bd385b" />
<img width="1280" height="832" alt="Screenshot 2026-10-19 at 1 56 59 PM" src="https://github.com/user-attachments/assets/21b9a798-18eb-4534-a3ee-f8abb6b8eb43" />
<img width="1280" height="832" alt="Screenshot 2026-10-19 at 1 56 54 PM" src="https://github.com/user-attachments/assets/4836ce46-aefa-4b85-8621-72a1085af870" />
<img width="1280" height="832" alt="Screenshot 2026-10-19 at 1 56 49 PM" src="https://github.com/user-attachments/assets/c834d72b-bbf5-4c2d-8130-045bc965f6b3" />

##video Link
https://drive.google.com/file/d/1K3zujM52grXaVgFBJwD9OY7pjPSjPi0C/view?usp=drive_link

## 📌 Features

- **Home Page:** Simple home page introducing the RecipeBook application.
- **Recipe List:** Display all recipes fetched from JSON Server.
- **Recipe Details:** View ingredients, instructions, category, cooking time, and dietary preferences.
- **Add Recipe:** Add new recipes using a form.
- **Edit Recipe:** Update existing recipe information.
- **Delete Recipe:** Remove recipes with confirmation.
- **Redux Toolkit:** Manage application state and asynchronous API operations.
- **JSON Server:** Store recipe data and provide REST API endpoints.
- **Firebase Authentication:** Register and log in using email and password.
- **Protected Operations:** Require login before adding, editing, or deleting recipes through the application UI.
- **Sorting:** Sort recipes alphabetically or by date added.
- **Filtering:** Filter recipes by category and dietary preference.
- **Responsive Design:** Use React Bootstrap for responsive layouts and components.
- **Navigation:** Navigate between pages using React Router.

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| React.js | Building the user interface |
| JavaScript (ES6+) | Application logic |
| Redux Toolkit | State management |
| React Redux | Connecting React components to Redux |
| Redux Toolkit `createAsyncThunk` | Asynchronous API operations |
| React Router DOM | Page navigation |
| React Bootstrap | UI components and responsive styling |
| Firebase Authentication | User registration and login |
| JSON Server | Mock REST API and recipe storage |
| Vite | Development server and build tool |

## 📁 Project Structure

```text
REACT_PRACTICAL/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Home.jsx
│   │   ├── Footer.jsx
│   │   ├── NavbarCom.jsx
│   │   ├── RecipeForm.jsx
│   │   ├── RecipeList.jsx
│   │   ├── RecipeDetails.jsx
│   │   └── LoginPage.jsx
│   ├── config/
│   │   └── firebase.js
│   ├── context/
│   │   └── AuthContext.jsx
│   ├── feature/
│   │   └── recipeSlice.js
│   ├── redux/
│   │   └── store.js
│   ├── Routes/
│   │   └── MainLayout.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── db.json
├── .env
├── .gitignore
├── package.json
└── README.md
```

*Note: The structure above represents the main project files. Your actual folders may differ slightly.*

## ⚙️ Installation and Setup

### 1. Clone the repository

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
cd REACT_PRACTICAL
```

Replace the repository URL with your actual GitHub repository URL.

### 2. Install dependencies

```bash
npm install
```

Install JSON Server if it is not already installed:

```bash
npm install -D json-server
```

### 3. Configure Firebase

Create a Firebase project in the [Firebase Console](https://console.firebase.google.com/).

Enable **Authentication → Sign-in method → Email/Password**.

Create a `.env` file in the project root and add your Firebase configuration:

```env
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
VITE_FIREBASE_APP_ID=your_firebase_app_id
```

Replace the placeholder values with the corresponding values from your Firebase project settings.

**Important:** Never commit your `.env` file to GitHub. Add `.env` to `.gitignore`. Firebase client configuration is intended for client-side use, but configure Firebase Security Rules and appropriate restrictions for your project.

### 4. Configure JSON Server

Create a `db.json` file in the project root.

Example:

```json
{
  "recipes": [
    {
      "id": "1",
      "title": "Gujarati Dhokla",
      "ingredients": "Besan, lemon juice, Eno, salt, sugar, water",
      "instructions": "Prepare the batter, steam for 15 minutes, and garnish.",
      "category": "Breakfast",
      "cookingTime": "20",
      "dietaryPreference": "Vegetarian",
      "createdAt": "2026-10-18T10:00:00.000Z"
    },
    {
      "id": "2",
      "title": "Paneer Butter Masala",
      "ingredients": "Paneer, tomatoes, butter, cream, spices",
      "instructions": "Prepare the gravy, add paneer and cream, and simmer.",
      "category": "Lunch",
      "cookingTime": "35",
      "dietaryPreference": "Vegetarian",
      "createdAt": "2026-10-19T10:00:00.000Z"
    }
  ]
}
```

### 5. Configure package.json scripts

Ensure your `package.json` includes the following scripts alongside any other scripts your project already uses:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "server": "json-server --watch db.json --port 3000"
  }
}
```

If your installed JSON Server version does not support `--watch`, use `json-server db.json --port 3000` instead.

### 6. Start the application

Open two terminal windows.

**Terminal 1 — Start JSON Server**

```bash
npm run server
```

API base URL:

```text
http://localhost:3000
```

Recipes endpoint:

```text
http://localhost:3000/recipes
```

**Terminal 2 — Start React**

```bash
npm run dev
```

Open the local URL shown by Vite, usually:

```text
http://localhost:5173
```

## 🔗 Application Routes

| Route | Description |
|---|---|
| `/` | Home page |
| `/login` | Login and signup |
| `/recipeList` | View, sort, and filter recipes |
| `/recipeForm` | Add or edit a recipe |
| `/recipeDetails/:id` | View a specific recipe |

## 🔄 CRUD Operations

The application uses Redux Toolkit `createAsyncThunk` to communicate with JSON Server.

| Operation | HTTP Method | Endpoint |
|---|---|---|
| Fetch all recipes | GET | `/recipes` |
| Fetch one recipe | GET | `/recipes/:id` |
| Add a recipe | POST | `/recipes` |
| Update a recipe | PUT | `/recipes/:id` |
| Delete a recipe | DELETE | `/recipes/:id` |

### How it works

1. `fetchRecipes` retrieves recipes from JSON Server.
2. `add` sends a new recipe to the server.
3. `handleEdit` updates an existing recipe.
4. `handleDelete` removes a recipe.
5. Redux stores the results returned by the server and updates the interface.

## 🔐 Authentication

Firebase Authentication provides email/password registration and login.

The `AuthContext` component listens for authentication changes using `onAuthStateChanged` and makes the current user available to components through the `useAuth` hook.

### Authentication behavior

- Logged-out visitors can browse recipes and view recipe details.
- Logged-in users can add recipes.
- Logged-in users can edit existing recipes.
- Logged-in users can delete recipes.

**Security limitation:** These checks currently restrict operations through the React interface. JSON Server does not independently verify Firebase authentication, so this setup is suitable as a practical demonstration rather than a secure production authorization system.

## 🔍 Sorting and Filtering

### Sorting options

- Name (A–Z)
- Date Added (Newest First)
- Date Added (Oldest First)

### Filtering options

**By category**
- Breakfast
- Lunch
- Dinner
- Dessert
- Snacks

**By dietary preference**
- Vegetarian
- Vegan
- Non-Vegetarian
- Gluten-Free

Sorting and filtering are performed in the frontend using React state and JavaScript array methods.

## 🧪 Testing Checklist

- [ ] Application starts successfully using Vite.
- [ ] JSON Server starts successfully.
- [ ] Existing recipes load from `db.json`.
- [ ] A new recipe can be added.
- [ ] An existing recipe can be edited.
- [ ] A recipe can be deleted.
- [ ] Recipe details display correctly.
- [ ] Sorting by name works.
- [ ] Sorting by date added works.
- [ ] Category filtering works.
- [ ] Dietary preference filtering works.
- [ ] Firebase signup works.
- [ ] Firebase login works.
- [ ] Logged-out users cannot manage recipes through the UI.
- [ ] Data changes persist in `db.json` after successful API operations.

## 🏗️ Build for Production

Run:

```bash
npm run build
```

Vite generates the production build in the `dist/` directory.

To preview the build locally:

```bash
npm run preview
```

JSON Server must still be running separately for the application to use the local API. A production deployment requires a hosted API or database instead of relying on your local JSON Server.

## 🚀 Future Improvements

- Add recipe images.
- Add search by recipe name.
- Add recipe favorites.
- Display recipe creation dates.
- Add user-specific recipe ownership.
- Add pagination.
- Replace JSON Server with a production database and secure backend.

## 👩‍💻 Author

**Vaishali Chauhan**

B.Tech — Information Technology

Government Engineering College, Bhavnagar

## 📄 License

This project was created for educational and practical examination purposes.
