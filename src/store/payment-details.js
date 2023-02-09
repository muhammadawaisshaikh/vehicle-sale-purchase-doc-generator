import { create } from 'zustand'
import { persist } from "zustand/middleware"

let store = (set) => ({
    data: {
        amount: '',
        amountInWords: '',
        paymentMethod: '',
    },
    setPaymentDetails: (payload) => set((state) => ({
        data: {
            ...state.data,
            amount: payload.amount,
            amountInWords: payload.amountInWords,
            paymentMethod: payload.paymentMethod,
        }
    })),
    removePaymentDetails: () => set({
        data: {
            amount: '',
            amountInWords: '',
            paymentMethod: '',
        }
    }),
})

// persist the created state
store = persist(store, { name: "paymentDetails" })

// create the store
const usePaymentDetailsStore = create(store);

export default usePaymentDetailsStore;