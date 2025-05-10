import type { Artist } from '@/@types/artist.types'
import { cn } from '@/utils/cn'
import * as Phosphor from '@phosphor-icons/react'
import type { ComponentProps } from 'react'
import { VerifiedArtist } from './verified-artist'

type ArtistBannerProps = ComponentProps<'div'> & {
	artist: Pick<Artist, 'name' | 'coverUrl'>
}

const ArtistBanner = ({
	artist,
	className = undefined,
	...props
}: ArtistBannerProps) => {
	return (
		<div
			className={cn(
				'relative flex h-48 w-full max-w-[512px] flex-col justify-end gap-y-4 overflow-hidden rounded-2xl p-6',
				className
			)}
			{...props}
		>
			<img
				className="-z-40 absolute top-0 left-0 size-full object-cover brightness-20"
				src={artist.coverUrl}
				alt={artist.name}
			/>

			<div className="flex flex-col gap-y-1">
				<VerifiedArtist isVerified={true} />
				<span className="font-medium text-3xl text-white">{artist.name}</span>
			</div>

			<span className="text-neutral-300 text-sm">
				51.724.425 monthly listeners
			</span>
		</div>
	)
}

export { ArtistBanner }
