import { atom, atomFamily, selector, selectorFamily } from "recoil"
import { TODOS } from "../todos"
import axios from "axios";

// export const NetworkAtom = atom({
//     key: "NetworkAtom",
//     default: 45
// })

// export const MessageAtom = atom({
//     key: "MessageAtom",
//     default: 67
// })

// export const NotificationAtom = atom({
//     key: "NotificationAtom",
//     default: 23
// })

// export const JobsAtom = atom({
//     key: "JobsAtom",
//     default: 0
// })

// export const totalNotificationSelector = selector({
//     key: "totalNotificationSelector",
//     get: ({get}) => {
//         const totalNot = get(NetworkAtom);
//         const totalmsg = get(MessageAtom);
//         const totalnot = get(NotificationAtom);
//         const totaljobs = get(JobsAtom);
//         return totalNot+totalmsg+totalnot+totaljobs;
//     }
// })

// Asynchronous data queries

export const dataAtom = atom({
    key: "dataAtom",
    default: selector({
        key: "deepak",
        get: async function() {
            const res = await fetch("https://sum-server.100xdevs.com/notifications");
            return res.json();
        }
    })
});

export const totalNotificationSelector = selector({
    key: "dataSelector",
    get: function({get}) {
        const mynotification = get(dataAtom);
        return mynotification.network+mynotification.jobs+mynotification.messaging+mynotification.notifications;
    }
})

// Atom and selctor family

export const dataAtomfamily = atomFamily({
    key: "dataAtom",
    default: selectorFamily({
        key: "suraj",
        get: (id)=> async ({get})=> {
            const res = axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`)
            return res.data.todo; 
        }
    })
})