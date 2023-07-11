import { create } from 'zustand';
import { IUserState } from './@userTypes';


export const userRequestedData = {
    accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvaG5kb2VAZW1haWwuY29tIiwiaWF0IjoxNjg3ODA4MTYzLCJleHAiOjE2ODc4MTE3NjMsInN1YiI6IjMifQ.nWj1gqD4t3x00UTQvfFiK-PQjcgSpzbGeHknpncgC9E",
    user: {
      email: "johndoe@email.com",
      name: "John Doe",
      id: 3
    }
};

export const useUserStore = create<IUserState>()((set) => ({
    userData: null,
    loginUser: (userRequestedData) => set({ userData: userRequestedData }),
    logoutUser: () => set({ userData: null }),
}));