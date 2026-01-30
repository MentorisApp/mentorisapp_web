interface User {
  id: 50;
  email: string;
  firstName: string;
  lastName: string;
  profilePictureUrl: string;
}

declare namespace App {
  interface Locals {
    user: User | null;
  }
}
