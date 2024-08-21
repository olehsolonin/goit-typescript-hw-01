type User = {
    name: string;
    surname: string;
    email: string;
    password: string;
};

function createOrUpdateUser(initialValues: Partial<User>) {
    const updatedUser: User = {
        name: 'DefaultName',
        surname: 'DefaultSurname',
        email: 'default@mail.com',
        password: 'defaultPassword',
        ...initialValues,
    };

    console.log('User updated:', updatedUser);
}

createOrUpdateUser({
    email: 'user@mail.com',
    password: 'password123',
});
