.

// 🔥 1️⃣ What are PROPS? (Definition)

// Props = Properties

// 👉 Props ka use hota hai data ko ek component se dusre component me bhejne ke liye
// 👉 Mostly Parent → Child direction me data jata hai
// 👉 Props read-only hote hain (change nahi kar sakte)

// 📌 Simple line:

// Props are used to make components dynamic and reusable

// PARENTS

// import React from 'react'
// import Header from './Components/Header'


// function App(){
//   return(
//     <div>
//       <Header title="Hello world" />
//       <Header title="Welcome to react series" />
      
//     </div>
//     
//   )
// }



// export default App;


// import React from 'react'
// import User from './Components/User';
// function App(){
//   return(
//     <div>
//       <User name="ram" age={22} City="Ayodhya" />
      
//     </div>
//     // Multiple Props Example
//   )
// }
// export default App;

// MINI PROJECT: Profile Card (Props Based)

// import React from 'react'
// // import User from './Components/User ';
// import ProfileCard from './Components/ProfileCard';
// function App(){
//   return(
//     <div>
//       <ProfileCard 
//       name="vaibhav tiwari"
//       role="react learner"
//       location="surat"
//       />
//       <ProfileCard 
//       name="ram"
//       role="creator"
//       location="ayodhya"
//       />
    
      
//     </div>
//     // Multiple Props Example
//   )
// }
// export default App;


// 🟢 1️⃣ Footer Component (Props: text)

// import React from 'react'
// import Footer from './Components/Footer'


// function App(){
// return(
//       <div>
//         <Footer text="@ @2026 React" />
//       </div>
//   )
// }
// export default App

// 🟢 2️⃣ Button Component (Props: label)

// import Button from "./Components/Button";

// function App(){
//   return(
//     <div>
//       <Button label="Signup" />
//       <Button label="Login" />
//       <Button label="Logout" />
//     </div>

//   )

// }
// export default App

// 🟢 3️⃣ Greeting Component (Props: name)
// 🔹 Concept

// Dynamic greeting

// import Greeting from "./Components/Greeting";

// function App(){
//   return(
//     <div>
//       <Greeting name="Ram" />
//       <Greeting name="Shyam" />
//     </div>
//   )
// }
// export default App


// 🔵 4️⃣ ProductCard Component

// Props: name, price, category

// 🔹 Concept

// Multiple props

// Card style UI


// import React from 'react'

// import ProductCard from './Components/ProductCard'


// function App(){
//   return(
//   <div>
//     <ProductCard name="Laptop" price={5000} category="Electromics" />
//     <ProductCard name="Mobile" price={5000} category="Electromics" />
//     <ProductCard name="tablet" price={5000} category="Electromics" />
//   </div>
// )


// }
// export default App

// 🔴 6️⃣ UserList Component (Challenge)

// Props:

// name

// isOnline (true / false)

// 🔹 Concept

// Conditional rendering

// Boolean props

import React from 'react'
import Users from './Components/Users'; 
function App(){
  return(
    <div>
    <Users name="ram" isOnline={true}/>
    <Users name="shyam" isOnline={false}/>
    </div>
    
  )
}
export default App;




