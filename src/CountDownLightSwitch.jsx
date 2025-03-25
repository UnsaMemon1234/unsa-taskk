
// import React, { useState } from "react";
// const [toggle,setToggle]=useState("")

// function CountDownLightSwitch(){
// function handleToggleChange(event) {
//     setName(event.target.backgroundColor="Dark");
//   }


//   function handleToggleChange(event) {
//     setName(event.target.backgroundColor="");
//   }

//    return(
//     <button>Toggle</button>



//    )
  

// }
// export default CountDownLightSwitch;




















// const sampleData = [
//   { id: 1, name: "John Doe", age: 25, city: "New York", occupation: "Engineer" },
//   { id: 2, name: "Jane Smith", age: 30, city: "San Francisco", occupation: "Designer" },
//   { id: 3, name: "Alice Brown", age: 28, city: "Los Angeles", occupation: "Doctor" },
//   { id: 4, name: "Bob Johnson", age: 35, city: "Chicago", occupation: "Teacher" }
// ];

// function App() {
//   // 1️⃣ Creating state for each filter
//   const [name, setName] = useState(""); 
//   const [age, setAge] = useState("");  
//   const [city, setCity] = useState(""); 
//   const [occupation, setOccupation] = useState("");

//   // 2️⃣ Handle input changes
 
//   function handleAgeChange(event) {
//     setAge(event.target.value);
//   }

//   function handleCityChange(event) {
//     setCity(event.target.value);
//   }

//   function handleOccupationChange(event) {
//     setOccupation(event.target.value);
//   }

//   // 3️⃣ Reset all filters
//   function resetFilters() {
//     setName("");
//     setAge("");
//     setCity("");
//     setOccupation("");
//   }

//   // 4️⃣ Filtering logic: Show only the data that matches user input
//   const filteredData = sampleData.filter((item) => {
//     return (
//       (name === "" || item.name.toLowerCase().includes(name.toLowerCase())) &&
//       (age === "" || item.age.toString().includes(age)) &&
//       (city === "" || item.city === city) &&
//       (occupation === "" || item.occupation === occupation)
//     );
//   });

//   return (
//     <div style={{ textAlign: "center", fontFamily: "Arial, sans-serif", padding: "20px" }}>
//       <h2>React Filtering Table</h2>

  
//         {/* Age Filter */}
//         <input
//           type="text"
//           placeholder="Filter by Age"
//           value={age}
//           onChange={handleAgeChange}
//           style={{ margin: "5px", padding: "5px" }}
//         />
        
//         {/* City Filter (Dropdown) */}
//         <select value={city} onChange={handleCityChange} style={{ margin: "5px", padding: "5px" }}>
//           <option value="">Filter by City</option>
//           <option value="New York">New York</option>
//           <option value="San Francisco">San Francisco</option>
//           <option value="Los Angeles">Los Angeles</option>
//           <option value="Chicago">Chicago</option>
//         </select>
        
//         {/* Occupation Filter (Dropdown) */}
//         <select value={occupation} onChange={handleOccupationChange} style={{ margin: "5px", padding: "5px" }}>
//           <option value="">Filter by Occupation</option>
//           <option value="Engineer">Engineer</option>
//           <option value="Designer">Designer</option>
//           <option value="Doctor">Doctor</option>
//           <option value="Teacher">Teacher</option>
//         </select>
        
//         {/* Reset Button */}
//         <button onClick={resetFilters} style={{ margin: "5px", padding: "5px", backgroundColor: "red", color: "white", border: "none" }}>
//           Reset Filters
//         </button>
//       </div>

//       {/* 6️⃣ Table to Display Filtered Data */}
//       <table border="1" style={{ margin: "0 auto", borderCollapse: "collapse", width: "80%" }}>
//         <thead>
//           <tr style={{ backgroundColor: "#ddd" }}>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Age</th>
//             <th>City</th>
//             <th>Occupation</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredData.length > 0 ? (
//             filteredData.map((item) => (
//               <tr key={item.id}>
//                 <td>{item.id}</td>
//                 <td>{item.name}</td>
//                 <td>{item.age}</td>
//                 <td>{item.city}</td>
//                 <td>{item.occupation}</td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="5">No matching records found</td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//       <Mycomponent/>  
//     </div>
  
// );

// }

// export default App;
