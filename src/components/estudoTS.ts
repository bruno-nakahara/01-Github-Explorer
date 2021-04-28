type User = {
    name: string;
    email: string;
    address: {
        city: string;
        state?: string;//Se tiver ? na key do obj, isso significa que a variável não é obrigatório utilizar.
    }
}

function showWelcomeMessege(user: User) {
    return `Welcome ${user.name}, your e-mail is ${user.email}. Your city is ${user.address.city} and your state is ${user.address.state}`
}

showWelcomeMessege({
    name: "Bruno", 
    email: "abc@abc.com", 
    address: { 
        city: "Hortolândia",
        state: "SP"
    }
})