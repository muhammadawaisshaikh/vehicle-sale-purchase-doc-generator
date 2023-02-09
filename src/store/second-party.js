import { create } from 'zustand'

const useSecondPartyStore = create((set) => ({
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
}))

export default useSecondPartyStore;