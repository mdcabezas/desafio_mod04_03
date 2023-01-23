import generateUuid from "./generateuuid";

const dbEmployee = [
    {
        id: generateUuid(),
        name: "Alberto Aguilera Valadez",
        email: "juan.gabriel@correo.com"
    },
    {
        id: generateUuid(),
        name: "María Guadalupe Araujo Yong",
        email: "ana.gabriel@correo.com"
    },
    {
        id: generateUuid(),
        name: "Benito Antonio Martínez Ocasio",
        email: "bad.bunny@correo.com"
    },
]

export default dbEmployee;