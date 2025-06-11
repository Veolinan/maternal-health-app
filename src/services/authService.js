import { auth } from './firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

export const register = (email, pw) =>
  createUserWithEmailAndPassword(auth, email, pw);

export const login = (email, pw) =>
  signInWithEmailAndPassword(auth, email, pw);

export const logout = () => signOut(auth);
