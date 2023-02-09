import { create } from 'zustand'
import { persist } from "zustand/middleware"

let store = (set) => ({
    data: {
        cnic: '',
        name: '',
        fathersName: '',
        contact: '',
        address: '',
        residentialAddress: ''
    },
    setSecondParty: (payload) => set((state) => ({
        data: {
            ...state.data,
            cnic: payload.cnic,
            name: payload.name,
            fathersName: payload.fathersName,
            contact: payload.contact,
            address: payload.address,
            residentialAddress: payload.residentialAddress
        }
    })),
    removeSecondParty: () => set({
        data: {
            cnic: '',
            name: '',
            fathersName: '',
            contact: '',
            address: '',
            residentialAddress: ''
        }
    }),
})

// persist the created state
store = persist(store, { name: "secondParty" })

// create the store
const useSecondPartyStore = create(store);

export default useSecondPartyStore;