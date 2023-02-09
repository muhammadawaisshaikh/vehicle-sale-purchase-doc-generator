import { create } from 'zustand'
import { persist } from "zustand/middleware"

let store = (set) => ({
    data: {
        registration: '',
        make: '',
        model: '',
        power: '',
        engine: '',
        chassis: '',
        color: ''
    },
    setVehicleDetails: (payload) => set((state) => ({
        data: {
            ...state.data,
            registration: payload.registration,
            make: payload.make,
            model: payload.model,
            power: payload.power,
            engine: payload.engine,
            chassis: payload.chassis,
            color: payload.color
        }
    })),
    removeVehicleDetails: () => set({
        data: {
            registration: '',
            make: '',
            model: '',
            power: '',
            engine: '',
            chassis: '',
            color: ''
        }
    }),
})

// persist the created state
store = persist(store, { name: "vehicleDetails" })

// create the store
const useVehicleDetailsStore = create(store);

export default useVehicleDetailsStore;