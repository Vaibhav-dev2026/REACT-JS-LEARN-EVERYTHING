// CHAPTER 17 — Using LocalStorage in React
// 1. Definition

// LocalStorage is a browser feature that allows web applications to store data persistently inside the user's browser.

// Persistent means:

// Data remains saved even after page refresh

// Data remains saved after closing the browser

// LocalStorage is part of the Web Storage API.

// 2. Types of Browser Storage

// Modern browsers provide three main storage systems:

// Storage Type	Capacity	Expiry	Common Use
// LocalStorage	~5MB	Never expires	App data
// SessionStorage	~5MB	Until tab closes	Temporary session
// Cookies	~4KB	Custom expiry	Authentication

// In React applications, LocalStorage is the most commonly used.

// 3. Why React Developers Use LocalStorage

// React state disappears when the page refreshes.

// Example:

// const [notes, setNotes] = useState([]);

// After refresh → state resets.

// So we combine React state + LocalStorage.

// Flow:

// User adds note
// ↓
// State updates
// ↓
// Save state to LocalStorage
// ↓
// User refreshes page
// ↓
// Load data from LocalStorage

// This makes data persistent.

// 4. LocalStorage API Methods
// 4.1 setItem()

// Used to store data.

// localStorage.setItem("key", "value");

// Example:

// localStorage.setItem("username", "Vaibhav");
// 4.2 getItem()

// Used to retrieve data.

// localStorage.getItem("key");

// Example:

// localStorage.getItem("username");
// 4.3 removeItem()

// Removes a specific item.

// localStorage.removeItem("key");

// Example:

// localStorage.removeItem("username");
// 4.4 clear()

// Deletes everything from LocalStorage.

// localStorage.clear();
// 5. Important Rule: LocalStorage Stores Only Strings

// LocalStorage cannot store objects directly.

// Wrong approach:

// localStorage.setItem("notes", notes);

// Correct approach:

// localStorage.setItem("notes", JSON.stringify(notes));

// Reading the data:

// const notes = JSON.parse(localStorage.getItem("notes"));
// 6. React + LocalStorage Concept

// We combine React state with LocalStorage persistence.

// Flow:

// Load LocalStorage
// ↓
// Initialize React State
// ↓
// User modifies state
// ↓
// Save new state into LocalStorage
// 7. Professional Folder Structure
// src
// │
// ├── components
// │   ├── NoteForm.jsx
// │   ├── NotesList.jsx
// │   └── NoteItem.jsx
// │
// ├── hooks
// │   └── useLocalStorage.js
// │
// ├── utils
// │   └── storage.js
// │
// ├── App.jsx
// └── main.jsx

// Explanation:

// components → UI components
// hooks → reusable logic
// utils → helper functions

// 8. Basic React + LocalStorage Example
// App.jsx
// import { useState, useEffect } from "react";

// function App() {
//   const [name, setName] = useState("");

//   // Load saved data when component mounts
//   useEffect(() => {
//     const savedName = localStorage.getItem("name");

//     if (savedName) {
//       setName(savedName);
//     }
//   }, []);

//   // Save data whenever name changes
//   useEffect(() => {
//     localStorage.setItem("name", name);
//   }, [name]);

//   return (
//     <div>
//       <h1>LocalStorage Example</h1>

//       <input
//         type="text"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />

//       <p>Hello {name}</p>
//     </div>
//   );
// }

// export default App;

// Concepts used:

// useState

// useEffect

// Controlled inputs

// Browser storage

// 9. Professional Approach — Custom Hook

// Instead of repeating LocalStorage logic everywhere, senior developers create a custom hook.

// Custom Hook Implementation
// hooks/useLocalStorage.js
// import { useState, useEffect } from "react";

// function useLocalStorage(key, initialValue) {

//   const [value, setValue] = useState(() => {
//     const saved = localStorage.getItem(key);

//     if (saved) {
//       return JSON.parse(saved);
//     }

//     return initialValue;
//   });

//   useEffect(() => {
//     localStorage.setItem(key, JSON.stringify(value));
//   }, [key, value]);

//   return [value, setValue];
// }

// export default useLocalStorage;

// Benefits:

// Reusable

// Clean code

// Professional architecture
