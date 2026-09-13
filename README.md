<div align="center">

# Dev Stack

### Build Your Development Stack

A modern web application where you can explore web technologies and build your own personalized development stack.

<br>

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![DaisyUI](https://img.shields.io/badge/DaisyUI-5A0EF8?style=for-the-badge&logo=daisyui&logoColor=white)
![React Toastify](https://img.shields.io/badge/React--Toastify-FF6B6B?style=for-the-badge)

</div>

---
## Technologies I Used

- React
- Vite
- JavaScript (ES6+)
- Tailwind CSS
- DaisyUI
- React-Toastify
- JSON (for the technology data)

# Features

1. **Technology cards from JSON:** All 12 technologies come from a JSON file. Each card shows the icon, name, badge, description, category, difficulty and rating.
2. **Your Stack panel:** Click "Add to Stack" to add a technology. The same technology cannot be added two times. After adding, the button changes to "✓ Added to Stack" and the card border becomes red. You can remove one item with ✕ or clear everything with "Remove All".
3. **Toast messages and responsive layout:** A toast message shows when you add, try to add again, remove or remove all. The layout works on mobile, tablet and desktop. On mobile the navbar has a hamburger menu and the cards show in one column.

### 1. What is JSX, and why is it used in React?

JSX looks like HTML, but we write it inside JavaScript. It makes building the UI easy because we can see the page structure right inside the component. React changes JSX into normal JavaScript. In JSX we write `className` instead of `class`.

### 2. What is the difference between props and state?

Props are data that a parent component sends to a child component. The child can use props but cannot change them. State is data that a component keeps by itself, and it can change. When state changes, React updates the UI. In my project, `technology` is a prop in `TechnologyCard`, and `stack` is a state in `Technologies`.

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` lets a component remember a value and change it. When the value changes, the component shows the new UI. I used it in `Technologies.jsx` to keep the selected technologies:

```jsx
const [stack, setStack] = useState([])
```

I also used it in `Navbar.jsx` to open and close the mobile menu:

```jsx
const [menuOpen, setMenuOpen] = useState(false)
```

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` runs code after the component shows on the screen. We use it for work like loading data. With an empty array `[]`, it runs only one time, so the data does not load again on every render. First I loaded `technologies.json` with `fetch` inside `useEffect` and saved the data with `useState`. Later I changed it to React's `use()` hook with `<Suspense>`, because it made showing the "Loading technologies..." message easy.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

The key helps React know which item is which. When an item is added or removed, React can update only that item and does not mix them up. I used `key={technology.id}` for the technology cards and for the items in Your Stack.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI based on a condition. In `YourStack.jsx`, if the stack is empty, I show "Your stack is empty.". If not, I show the list and the "Remove All" button:

```jsx
if (stack.length === 0) {
  countText = 'No technologies selected yet.'
  content = <div>Your stack is empty.</div>
} else {
  countText = `${stack.length} Technology Selected`
  content = <ul>{/* stack items and Remove All button */}</ul>
}
```

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent sends data to a child with props. In my project, `TechnologyList` sends `technology` and `isAdded` to each `TechnologyCard`.

To send something back, the parent gives the child a function as a prop, and the child calls it. `Technologies` has the function `handleAddToStack` and passes it down as `onAddToStack`. When I click "Add to Stack", `TechnologyCard` calls `onAddToStack(technology)`, and the stack in `Technologies` gets updated. `YourStack` works the same way with `onRemoveFromStack` and `onRemoveAll`.

## How to Run

```bash
npm install
npm run dev
```
