// "use client"
// import { useUserStore, userRequestedData } from "../useUserStore";
// import { MouseEvent } from "react";

// export const zustandPractice = () => {
//     const {loginUser, logoutUser} = useUserStore((store) => store);
//     const user = useUserStore((store) => store.userData?.user);
    
//     const handleLoginClick = (event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
//         event.preventDefault()
//         if(user){
//             alert("Already logged in!")
//         } else {
//             loginUser(userRequestedData)
//             alert("Login Successfuly!")
//         }
//     }
    
//     const handleLogoutClick = (event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
//         event.preventDefault()
//         logoutUser()
//     }
    
//     return (
//         <section>
//             <h1>{user?.name}</h1>
//             <button onClick={(event) => handleLoginClick(event)}>Login</button>
//             <button onClick={(event) => handleLogoutClick(event)}>Logout</button>
//         </section>
//     )

// }