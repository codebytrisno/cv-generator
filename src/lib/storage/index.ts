import { db } from './db'
import type { CV } from '@/types/cv'
import type { CoverLetter } from '@/types/cover-letter'

export async function getCVs(): Promise<CV[]> {
  return db.cvs.orderBy('updatedAt').reverse().toArray()
}

export async function getCV(id: string): Promise<CV | null> {
  const result = await db.cvs.get(id)
  return result ?? null
}

export async function saveCV(cv: CV): Promise<void> {
  await db.cvs.put(cv)
}

export async function deleteCV(id: string): Promise<void> {
  await db.cvs.delete(id)
}

export async function getCoverLetters(): Promise<CoverLetter[]> {
  return db.coverLetters.orderBy('createdAt').reverse().toArray()
}

export async function getCoverLetter(id: string): Promise<CoverLetter | null> {
  const result = await db.coverLetters.get(id)
  return result ?? null
}

export async function saveCoverLetter(cl: CoverLetter): Promise<void> {
  await db.coverLetters.put(cl)
}

export async function deleteCoverLetter(id: string): Promise<void> {
  await db.coverLetters.delete(id)
}

export { type CV, type CoverLetter }
export { db }
