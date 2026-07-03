'use client'

import { useState, useEffect, useCallback } from 'react'
import { getCVs, getCV, saveCV, deleteCV } from '@/lib/storage'
import type { CV, CVData } from '@/types/cv'

const AUTO_SAVE_INTERVAL = 30000

export function useCVList() {
  const [cvs, setCvs] = useState<CV[]>([])
  const [loading, setLoading] = useState(true)

  const refresh = useCallback(async () => {
    setLoading(true)
    try {
      const list = await getCVs()
      setCvs(list)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    refresh()
  }, [refresh])

  const remove = useCallback(async (id: string) => {
    await deleteCV(id)
    setCvs((prev) => prev.filter((cv) => cv.id !== id))
  }, [])

  return { cvs, loading, refresh, remove }
}

export function useCVDetail(id?: string) {
  const [cv, setCv] = useState<CV | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!id) {
      setLoading(false)
      return
    }

    getCV(id).then((result) => {
      setCv(result)
      setLoading(false)
    })
  }, [id])

  return { cv, loading }
}

let autoSaveTimer: ReturnType<typeof setTimeout> | null = null

export function useAutoSave() {
  const save = useCallback(
    async (data: { id: string; title: string; templateId: string; data: CVData }) => {
      if (autoSaveTimer) clearTimeout(autoSaveTimer)

      autoSaveTimer = setTimeout(async () => {
        const existing = await getCV(data.id)
        const cv: CV = {
          ...data,
          createdAt: existing?.createdAt ?? Date.now(),
          updatedAt: Date.now(),
        }
        await saveCV(cv)
      }, AUTO_SAVE_INTERVAL)
    },
    []
  )

  return { save }
}
