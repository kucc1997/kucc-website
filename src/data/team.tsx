export type Member = {
  name: string
  position: string
  image: string // '' when no photo was found
  linkedin?: string
  mail?: string
}

export type Group = 'executive' | 'advisory'