import { programmingLanguages } from "@/constants";
import { type ClassValue, clsx } from "clsx";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Validates an email address using a comprehensive regex pattern
 * Follows RFC 5322 standard with some practical constraints
 * @param email - The email address to validate
 * @returns boolean indicating whether the email is valid
 */
export function validateEmail(email: string): boolean {
  // RFC 5322 compliant regex with practical constraints
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
  // Validate length and match regex
  return (
    email.length > 0 && 
    email.length <= 320 && 
    emailRegex.test(email)
  );
}

// ... [rest of the previous file contents]