

import { create } from "zustand";
import { axiosInstance } from "../api/axios";


export const useUserStore = create((set) => ({
  user: null,
  isLoggedIn: false,

  signup: async (formData) => {
    try{
        const response = await axiosInstance.post("/api/signup", formData)
    
        if(response.status === 201) {
            set({user: response.data.data, isLoggedIn: true})
        }
    }catch(err) {
        console.error(err)
    }
  },

  login: async (formData) => {
    try{
        const response = await axiosInstance.post("/api/login", formData)

        if(response.status === 200) {
            set({user: response.data.data, isLoggedIn: true})
        }
    }catch(err) {
        console.error(err)
    }
  },
  logOut: () => {
    set({user: null, isLoggedIn: false})
  }
}))