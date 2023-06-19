import 'dotenv/config'
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, setDoc } from "firebase/firestore"
import { initializeApp } from "firebase/app";

// Initialize Firebase
const app = initializeApp({
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId,
});

const $db = {
    firestore: getFirestore(app),
    storage: getStorage(app)
}

const getMenuItems = async () => {
    const ref = collection($db.firestore, '/menu-items')
    const snap = await getDocs(ref)
    return snap.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }))
}

const getRestaurants = async () => {
    const snap = await getDocs(collection($db.firestore, '/restaurants'))
    return snap.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }))
}

const getRestaurantOrders = async () => {
    const id = route.params.id
    const ref = collection($db.firestore, `/restaurants/${id}/orders`)
    const snap = await getDocs(ref)
    return snap.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }))
}

const getRestaurantMenus = async () => {
    const id = route.params.id
    const ref = collection($db.firestore, `/restaurants/${id}/menu`)
    const snap = await getDocs(ref)
    return snap.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }))
}

const createOrder = async (order) => {
    await addDoc(collection($db.firestore, `/restaurants/${id}/orders`), order)
    // Example order:
    // {
    //     date: 1686266480396
    //     name: "Sipariş 1"
    //     price: 25
    //     priority: 1 // 2, 3
    //     statuscolor: "primary", // secondary
    // }
    return order
}