"use server";

import { ID } from "node-appwrite";
import {
  APPOINTMENT_COLLECTION_ID,
  DATABASE_ID,
  databases,
} from "../appwrite.config";
import { parseStringify } from "../utils";

export const createAppointment = async (
  appointment: CreateAppointmentParams
) => {
  try {
    if (!DATABASE_ID || !APPOINTMENT_COLLECTION_ID) {
      throw new Error(
        "DATABASE_ID ou APPOINTMENT_COLLECTION_ID não estão definidos."
      );
    }

    const newAppointment = await databases.createDocument(
      DATABASE_ID,
      APPOINTMENT_COLLECTION_ID,
      ID.unique(),
      appointment
    );

    return parseStringify(newAppointment);
  } catch (error) {
    console.error("Erro ao criar o documento de agendamento:", error);
    throw new Error(
      "Erro ao criar o agendamento. Verifique o console para mais detalhes."
    );
  }
};
