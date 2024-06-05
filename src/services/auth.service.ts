import { UserAuthed } from "../models/UserAuthed";
import { handleError } from "../util/handleError";
import axiosServices from "../util/axios";

const API_URL = process.env.REACT_APP_URL ?? 'http://localhost:3000/';


export class AuthService {

    public static async login(username: string, password: string) {
        try {
            const data = await axiosServices.post<UserAuthed>(API_URL + "v1/auth/login", {
                email: username,
                password: password,
            });
            return data;
        } catch (error) {
            handleError(error);
        }
    }
}
