import { faker } from '@faker-js/faker/locale/pt_BR'; //faz dados falsos
import lodash from 'lodash'; //ajuda a gerar arrays, neste caso, de 50 pessoas
import fs from 'fs'; //manipula arquivos, cria e salva as coisas do db

const peoples = lodash.times(50, function(n){
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    return {
        id: n+1,
        firstname: firstName,
        lastname: lastName,
        avatar: faker.image.avatar(),
        address: faker.location.streetAddress(),
        email: faker.internet.email({firstName: firstName.toLowerCase(), lastName: lastName.toLowerCase()})
    }
});

const data = {};
data.peoples = peoples;
fs.writeFile('db.json', JSON.stringify(data), (err) => {
    if(err) throw err;
    console.log('Finalizando...')
})