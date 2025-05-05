export interface User {
    id: string;
    username: string; // Changed from 'name' to 'username' to match the token payload
    role: 'ADMIN' | 'USER';
}
