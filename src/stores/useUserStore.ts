"use client"
import { create } from 'zustand';
import { IUserData, IUserState } from './@userTypes';
import { api } from '@/services/api';
import { useEffect } from 'react';

useEffect(()=>{
  const loadUser = useUserStore((store) => store.loadUser);
  loadUser();
},[])

export const useUserStore = create<IUserState>()((set) => ({
  loading: false,
  error: "",
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
      set({ userData: data, error: "" });
    } catch (error) {
      console.log(error);
      set({ error: "Login atempt Failed" });
    } finally {
      set({ loading: false });
    };
  },

  loadUser: () => {
    const savedUser = localStorage.getItem("@FS: userData");
    if (savedUser) {
      set({ userData: JSON.parse(savedUser) });
    };
  },

  registerUser: async ({ email, password, name }) => {
    try {
      set({ loading: true});
      await api.post("/users", {
        email: email,
        password: password,
        name: name,
      });
      return true;
    } catch (error) {
      console.log(error);
      set({ error: "Failed to register new account"});
    } finally {
      set({loading: false});
    };
  }
}));