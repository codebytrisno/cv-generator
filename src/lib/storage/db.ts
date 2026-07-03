import Dexie, { type Table } from 'dexie'
import type { CV } from '@/types/cv'
import type { CoverLetter } from '@/types/cover-letter'

export class CvDatabase extends Dexie {
  cvs!: Table<CV, string>
  coverLetters!: Table<CoverLetter, string>

  constructor() {
    super('CvGenerator')

    this.version(1).stores({
      cvs: 'id, updatedAt, createdAt',
      coverLetters: 'id, cvId, createdAt',
    })
  }
}

export const db = new CvDatabase()
