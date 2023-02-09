import { create } from 'zustand'

const useFirstPartyStore = create((set) => ({
    data: {
        cnic: '',
        name: '',
        fathersName: '',
        contact: '',
        address: '',
        residentialAddress: ''
    },
    setFirstParty: (payload) => set((state) => ({
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
    removeFirstParty: () => set({
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

export default useFirstPartyStore;