export function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export function validatePhone(phone: string): boolean {
  const cleaned = phone.replace(/[\s\-]/g, '')
  return /^(?:\+62|0)[0-9]{8,13}$/.test(cleaned)
}

export function validateMinLength(value: string, min: number): boolean {
  return value.trim().length >= min
}
