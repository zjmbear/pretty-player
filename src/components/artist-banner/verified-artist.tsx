import * as Phosphor from '@phosphor-icons/react'
import type { ComponentProps } from 'react'

type VerifiedArtistProps = ComponentProps<'div'> & {
	isVerified?: boolean
}

const VerifiedArtist = ({
	isVerified = false,
	...props
}: VerifiedArtistProps) => {
	const verifiedLabel = isVerified ? 'Verified Artist' : 'Unverified Artist'

	return (
		<div className="flex items-center gap-x-1" {...props}>
			{isVerified ? (
				<Phosphor.SealCheck size={18} weight="fill" className="fill-blue-500" />
			) : (
				<Phosphor.SealWarning
					size={18}
					weight="fill"
					className="fill-yellow-500"
				/>
			)}

			<span className="text-white text-xs">{verifiedLabel}</span>
		</div>
	)
}

export { VerifiedArtist }
