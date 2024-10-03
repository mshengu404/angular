export interface IUser {
    id: string;                          // Unique identifier for the user
    username: string;                    // Username chosen by the user
    password: string;                    // User's password (should be hashed and not stored in plain text)
    email: string;                       // User's email address
    fullName: string;                    // User's full name
    phoneNumber?: string;                // Optional phone number
    profilePictureUrl?: string;          // URL of the user's profile picture
    createdAt: Date;                     // Timestamp for when the user account was created
    updatedAt: Date;                     // Timestamp for when the user account was last updated
    lastLogin?: Date;                    // Timestamp for the last time the user logged in
    isActive: boolean;                   // Indicates if the user account is active
    isAdmin: boolean;                    // Indicates if the user has administrative privileges
    roles: string[];                     // Array of roles assigned to the user (e.g., ["admin", "editor"])
    preferences?: {
        theme: 'light' | 'dark';         // User's theme preference
        language: string;                // Preferred language of the user
    };
    address?: {
        street: string;                  // Street address
        city: string;                    // City
        state: string;                   // State
        postalCode: string;              // Postal/Zip code
        country: string;                 // Country
    };
}
