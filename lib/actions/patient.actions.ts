'use server'

import { ID, Query } from "node-appwrite";
import { users } from "../appwrite.config";

export const createUser = async (user: CreateUserParams) => {
  try {
    // Tenta criar um novo usuário
    const newUser = await users.create(
      ID.unique(),
      user.email,
      user.phone,
      undefined,  // Senha pode ser opcional, dependendo do caso
      user.name
    );

    // Se criado com sucesso, retorna o novo usuário
    return newUser;
  } catch (error: any) {
    // Verifica se o erro é um conflito de email (código 409)
    if (error?.code === 409) {
      // Se houver conflito, pesquisa usuários com o mesmo email
      const documents = await users.list([Query.equal("email", [user.email])]);

      // Retorna o primeiro usuário encontrado com o email
      return documents?.users[0];
    }

    // Caso haja outro tipo de erro, você pode lançar ou retornar o erro
    throw new Error(error.message || "Erro ao criar usuário");
  }
};
