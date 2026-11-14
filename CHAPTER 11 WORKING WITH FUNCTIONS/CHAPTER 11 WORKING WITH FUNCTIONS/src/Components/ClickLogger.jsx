// 🟢 BEGINNER
// 📁 components/ClickLogger.jsx
// 🎯 Goal

// Button ho

// Click pe console log aaye

// Function alag likha ho

// 🧠 CONCEPTS USED

// Function

// Event handling

// Function reference

// Separation of logic

function ClickLogger(){
    function HandleClick(){
        console.log("Button Clicked")
    }
    return(
        <div>
            <button onClick={HandleClick}>Click me</button>
        </div>

    );
}
export default ClickLogger

