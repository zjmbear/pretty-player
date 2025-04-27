import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

const cn = (...className: ClassValue[]) => {
	return twMerge(clsx(className))
}

export { cn }
