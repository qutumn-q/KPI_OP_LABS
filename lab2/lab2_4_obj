'use strict';

const fn = () => {
    const userConst = { name: 'Varvara' };
    let userLet = { name: 'Katerina' };

    userConst.name = 'Varya';
    userLet.name = 'Katya';
    console.log(userConst, userLet);
    
    userLet = { name: 'Margo' };
    console.log(userLet);
};

fn();

const createUser = (name, city) => ({name, city});
console.log(createUser('Varvara Khalimonenko', 'Kyiv'));