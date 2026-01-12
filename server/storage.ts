import { db } from "./db.js";
import {
  contactMessages,
  type CreateContactMessageRequest,
  type ContactMessageResponse
} from "../shared/schema.js";

export interface IStorage {
  createContactMessage(message: CreateContactMessageRequest): Promise<ContactMessageResponse>;
}

export class DatabaseStorage implements IStorage {
  async createContactMessage(message: CreateContactMessageRequest): Promise<ContactMessageResponse> {
    const [created] = await db.insert(contactMessages).values(message).returning();
    return created;
  }
}

export const storage = new DatabaseStorage();
