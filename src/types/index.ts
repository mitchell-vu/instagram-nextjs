import { Timestamp } from 'firebase/firestore';

export interface Conversation {
  id: string;
  users: string[];
}

export interface AppUser {
  email: string;
  lastSeen: Timestamp;
  photoURL: string;
}

export interface IMessage {
  id: string;
  thread_id: string;
  text: string;
  sent_at: string;
  user: string;
}
