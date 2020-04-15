const users = [
    { name: "Mango", active: true },
    { name: "Poly", active: false },
    { name: "Ajax", active: true },
    { name: "Lux", active: false },
];

const toggleUserState = (allUsers, userName) => {
    const updatedUsers = allUsers.map(user);

    return Promise.all(updatedUsers).then((results) => {
        if (user.name === userName) {
            resolve({ ...user });
        } else {
            reject(user);
        }
    });
};
const logger = (updatedUsers) => console.table(updatedUsers);
/*
 * Сейчас работает так
 */

//toggleUserState(users, "Mango", logger);
//toggleUserState(users, "Lux", logger);

/*
 * Должно работать так
 */
toggleUserState(users, "Mango").then(logger);
toggleUserState(users, "Lux").then(logger);
