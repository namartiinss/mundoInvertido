
import { subscribeToHellfireClube } from "./firebase/hellfire-clube.js"

const txtName = document.getElementById('txtName')
const txtEmail = document.getElementById('txtEmail')
const txtLevel = document.getElementById('txtLevel')
const txtCharacter = document.getElementById('txtCharacter')

const btnSubscribe = document.getElementById('btnSubscribe')

btnSubscribe.addEventListener('click', async () => {
    const subscription = {
        name: txtName.value,
        email: txtEmail.value,
        Level: txtLevel.value,
        character: txtCharacter.value
    }

    //salvar no banco de dados
   const subscriptionId = await subscribeToHellfireClube(subscription)
   console.log(`Inscrito com sucesso: ${subscriptionId}`)
})

console.log('Entrei')
