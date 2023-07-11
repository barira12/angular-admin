import { Role } from "./role";

export interface User {
    _id: number;
    first_name:string;
    last_name:string;
    email:string;
    role:Role;
    
}
