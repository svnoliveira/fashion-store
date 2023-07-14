"use client"
import { create } from 'zustand';
import { IUserData, IUserState } from './@userTypes';
import { api } from '@/services/api';

export const useUserStore = create<IUserState>()((set) => ({
  loading: false,
  error: "",
  message: "",
  userData: null,
  
  logoutUser: () => {
    localStorage.removeItem("@FS: userData");
    set({ userData: null });
  },

  loginUser: async ({ email, password }) => {
    try {
      set({ loading: true });
      const { data } = await api.post<IUserData>("/login", {
        email: email,
        password: password,
      });
      localStorage.setItem("@FS: userData", JSON.stringify(data));
      set({ userData: data});
      set({ message: "Logged in successfuly!"});
      return true
    } catch (error) {
      console.log(error);
      set({ error: "Login atempt Failed" });
    } finally {
      set({ loading: false });
      setTimeout(()=> { set({ message: "", error: "" })},2000)
    };
  },

  loadUser: () => {
    const savedUser = localStorage.getItem("@FS: userData");
    if (savedUser) {
      set({ userData: JSON.parse(savedUser) });
      console.log("mounted and logged")
    }
  },

  registerUser: async ({ email, password, name }) => {
    try {
      set({ loading: true});
      await api.post("/users", {
        email: email,
        password: password,
        name: name,
      });
      set({ message: "Account registered!"});
      return true;
    } catch (error) {
      console.log(error);
      set({ error: "Failed to register new account"});
    } finally {
      set({loading: false});
      setTimeout(()=> { set({ message: "", error: "" })},2000)
    };
  }
}));