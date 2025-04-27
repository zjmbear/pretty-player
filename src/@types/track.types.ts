import type { Artist } from './artist.types'

type Album = {
	id: string
	name: string
	coverUrl: string
}

type Track = {
	id: string
	name: string
	artist: Artist
	album: Album
	duration: number
	releaseDate: Date
	genre: string
	coverArtUrl: string
	url: string
}

export type { Track, Album }
