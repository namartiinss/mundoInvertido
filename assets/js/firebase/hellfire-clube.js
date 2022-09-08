import app from "./app.js"
import { getFirestore, collection, addDoc} from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-SERVICE.js'

export async function subscribeToHellfireClube(subscription){
    
    const db = getFirestore(app)
    const hellfireClubeCollection = collection(db, 'helfire-clube')
    const docRef = await addDoc(hellfireClubeCollection, subscription)
    return docRef.id
}