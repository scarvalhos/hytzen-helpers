import * as op from 'object-path'

import isUUID from 'is-uuid'

import { Currency, Locales } from '../types'

// money

export const money = (
  s?: string | number,
  options?: { currency?: Currency; locale?: Locales }
) => {
  let num = 0

  if (typeof s === 'number') {
    num = s
  } else {
    num = Number(s)
  }

  return (num || 0).toLocaleString(options?.locale || 'pt-BR', {
    style: 'currency',
    currency: options?.currency || 'BRL',
  })
}

// percent

export const percent = (
  s?: string | number,
  options?: { locale?: Locales; maximumFractionDigits?: number }
) => {
  let num = 0

  if (typeof s === 'number') {
    num = s
  } else {
    num = Number(s)
  }

  return (num / 100).toLocaleString(options?.locale || 'pt-BR', {
    style: 'percent',
    maximumFractionDigits: options?.maximumFractionDigits || 3,
  })
}

// date

export const date = (
  value?: string | number | Date,
  options?: {
    locale?: Locales
    dateStyle?: 'full' | 'long' | 'medium' | 'short'
    withHour?: boolean
    onlyHour?: boolean
  }
) => {
  if (!value || value === '') return '-'

  const locale = options?.locale || 'pt-BR'

  const formatHour = (v: Date) =>
    Intl.DateTimeFormat(locale, { timeStyle: 'short' })
      .format(v)
      .replace(':', 'h')

  const formatDate = (v: Date) =>
    Intl.DateTimeFormat(locale, {
      dateStyle: options?.dateStyle,
    }).format(v)

  const withHour = (v: Date) => {
    return {
      true: formatDate(v).concat(` às ${formatHour(v)}`),
      false: formatDate(v),
    }[String(Boolean(options?.withHour))]
  }

  if (options?.onlyHour) return formatHour(new Date(value))

  return withHour(new Date(value))
}

// validateEmail

export const validateEmail = (email: string) => {
  var emailRegex = /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/

  return emailRegex.test(email)
}

// validateCPF

export const validateCPF = (value: string) => {
  const cpf = value.replace(/[^\d]+/g, '')

  if (cpf == '') return false

  if (
    cpf.length != 11 ||
    cpf == '00000000000' ||
    cpf == '11111111111' ||
    cpf == '22222222222' ||
    cpf == '33333333333' ||
    cpf == '44444444444' ||
    cpf == '55555555555' ||
    cpf == '66666666666' ||
    cpf == '77777777777' ||
    cpf == '88888888888' ||
    cpf == '99999999999'
  )
    return false

  let add = 0
  let rev = 0

  for (let i = 0; i < 9; i++) add += parseInt(cpf.charAt(i)) * (10 - i)
  rev = 11 - (add % 11)
  if (rev == 10 || rev == 11) rev = 0
  if (rev != parseInt(cpf.charAt(9))) return false

  add = 0
  for (let i = 0; i < 10; i++) add += parseInt(cpf.charAt(i)) * (11 - i)
  rev = 11 - (add % 11)
  if (rev == 10 || rev == 11) rev = 0
  if (rev != parseInt(cpf.charAt(10))) return false

  return true
}

// numonly

export const numonly = (s?: string | null) => {
  if (!s) return null
  return s.replace(/[^\d]+/g, '')
}

// numtostr

export const numtostr = (n?: number | null): string | undefined => {
  if (!n) return '0'
  return n.toString()
}

// strtonum

export const strtonum = (s?: string | null): number => {
  if (!s) return 0
  return +s.replace(/[^\d,-]/g, '').replace(',', '.') || 0
}

// generateMongoObjectId

export const generateMongoObjectId = function () {
  const timestamp = ((new Date().getTime() / 1000) | 0).toString(16)
  return (
    timestamp +
    'xxxxxxxxxxxxxxxx'
      .replace(/[x]/g, function () {
        return ((Math.random() * 16) | 0).toString(16)
      })
      .toLowerCase()
  )
}

// getFirstLetters

export const getFirstLetters = (value?: string) => {
  if (!value) return []

  const parts = value?.split(' ')

  if (parts.length > 1) {
    const [firstName, lastName] = parts
    return firstName.slice(0, 1).concat(lastName.slice(0, 1)).toUpperCase()
  }

  return value.slice(0, 2).toUpperCase()
}

// getFirstName

export const getFirstName = (value?: string) => {
  if (!value) return []

  const parts = value?.split(' ')

  return parts[0]
}

// makePrismaWhere

export const makePrismaFilter = (
  search: string,
  schema: { OR?: string[]; AND?: string[] }
) => {
  const where = {} as any

  Object.entries(schema).forEach(([operator, keys]) => {
    keys.forEach((key, i) => {
      if (key.toLowerCase().endsWith('id')) {
        if (isUUID.v4(search)) {
          op.set(where, `${operator}.${i}.${key}`, search)
        }
      } else {
        op.set(where, `${operator}.${i}.${key}.contains`, search)
        op.set(where, `${operator}.${i}.${key}.mode`, 'insensitive')
      }
    })
  })

  where.OR = where.OR?.filter(Boolean)
  where.AND = where.AND?.filter(Boolean)

  return where
}

// concatTailwindClassNames

export const concatTailwindClassNames = (str: string) => {
  const nonCollidable = ['border-', 'rounded-']
  const speciallyCollidable: Record<string, string[]> = {
    'px-': ['p-'],
    'py-': ['p-'],
    'p-': ['py-', 'px-'],
    flex: ['block'],
    block: ['flex'],
  }

  return str
    .split(/\s+/)
    .filter((v, i, arr) => {
      const makePrefix = (str: string) => {
        const split = str.split('-')
        return split.length > 1 ? `${split.slice(0, -1).join('-')}-` : split[0]
      }
      const prefix = makePrefix(v)
      return (
        nonCollidable.includes(prefix) ||
        !arr
          .slice(i)
          .find(
            (vv) =>
              [prefix, ...(speciallyCollidable[prefix] || [])].includes(
                makePrefix(vv)
              ) && vv !== v
          )
      )
    })
    .join(' ')
}

export const ctc = (...arr: (string | undefined | null | false)[]) => {
  const classes = concatTailwindClassNames(
    arr
      .flatMap((s) => (!!s ? s.split(/\s+/) : []))
      .filter((s) => !!s && s !== 'undefined')
      .join(' ')
  )

  return classes.length < 1 ? undefined : classes
}

// px2num

export const px2num = (px: string | number) => {
  if (typeof px === 'number') return px

  return parseFloat(`${px}`.replace('px', ''))
}

// convertPXToREM

export const FONT_BASE = 16

export const convertPXToREM = (px: string) => {
  return `${px2num(px) / FONT_BASE}rem`
}

// convertPXToVH

export const convertPXToVH = (px: string | number) => {
  return `${(px2num(px) * 100) / document.documentElement.clientHeight}vh`
}

// randonfy

export const randonfy = <T>(array?: T[]) => {
  if (!array) return []

  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

// generateArrayOfNumbers

export const generateArrayOfNumbers = (from: number, to: number) => {
  const array: number[] = []

  for (let i = from; i < to + 1; i++) {
    array.push(i)
  }

  return array
}

// generateArrayWithXPositions

export const generateArrayWithXPositions = (to: number) => {
  const array: number[] = []

  for (let i = 0; i < to; i++) {
    array.push(i)
  }

  return array
}
