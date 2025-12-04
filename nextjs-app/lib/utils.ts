import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Validates a WildSafe Property ID format
 * Expected format: WSD-XXXX (e.g., WSD-0100, WSD-0101)
 * @param propertyId - The property ID to validate
 * @returns boolean indicating if the format is valid
 */
export function isValidPropertyId(propertyId: string): boolean {
  if (!propertyId) return false;
  // Match WSD- followed by 4 digits
  const pattern = /^WSD-\d{4}$/;
  return pattern.test(propertyId);
}

/**
 * Sanitizes a property ID by trimming whitespace and converting to uppercase
 * @param propertyId - The property ID to sanitize
 * @returns sanitized property ID or null if invalid
 */
export function sanitizePropertyId(propertyId: string | null | undefined): string | null {
  if (!propertyId) return null;
  const sanitized = propertyId.trim().toUpperCase();
  return isValidPropertyId(sanitized) ? sanitized : null;
}

/**
 * Formats a property ID for display purposes
 * @param propertyId - The property ID to format
 * @returns formatted property ID or empty string if invalid
 */
export function formatPropertyId(propertyId: string | null | undefined): string {
  const sanitized = sanitizePropertyId(propertyId);
  return sanitized || "";
}
