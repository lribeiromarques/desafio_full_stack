# DEPENDENCIAS DO PROJETO
    DEPENDENCIAS BACKEND:
    cors, @types/cors, bcryptjs, nest,jsonwebtoken,zod
    DEPENDENCIAS FRONTEND:
    @hookforms/resolvers, axios, react, react-router-dom, react-hook-form, zod

    #COMANDOS PARA INSTALAÇÃO DE DEPENDENCIAS:
    npm install --production
    #COMANDOS PARA INICIALIZAR SERVIDOR:
    npm run dev

    #PREECHIMENTO .ENV:
    DATABASE_URL="postgresql://user:password@host:port/db?schema=public"
    SECRET_KEY =

    #ROTAS BACKEND:
    @USERS
    post = /users
    get = /users
    patch = /users/id
    delete = /users/id

    @CONTACTS
    post = /contacts
    get = /contacts
    patch = /contacts/id
    delete = /contacts/id

    
