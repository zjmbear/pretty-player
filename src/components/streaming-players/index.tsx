import * as Phosphor from '@phosphor-icons/react'
import { Streaming } from './streaming'

const StreamingPlayers = () => {
	return (
		<div className="flex w-[166px] flex-col gap-2">
			<Streaming.Wrapper>
				{/* Spotify */}
				<Streaming.Root className="w-[108px] bg-green-500 hover:bg-green-600">
					<Streaming.Icon>
						<Phosphor.SpotifyLogo
							className="size-6"
							color="white"
							weight="fill"
						/>
					</Streaming.Icon>
				</Streaming.Root>

				{/* Tidal */}
				<Streaming.Root className="w-[50px] bg-black hover:bg-neutral-800">
					<Streaming.Icon>
						<Phosphor.TidalLogo
							className="size-6"
							color="white"
							weight="fill"
						/>
					</Streaming.Icon>
				</Streaming.Root>
			</Streaming.Wrapper>

			<Streaming.Wrapper>
				{/* Sound Cloud */}
				<Streaming.Root className="w-[63px] bg-orange-500 hover:bg-orange-600">
					<Streaming.Icon>
						<Phosphor.SoundcloudLogo
							className="size-6"
							color="white"
							weight="fill"
						/>
					</Streaming.Icon>
				</Streaming.Root>

				{/* Apple Music */}
				<Streaming.Root className="w-[95px] bg-[#FA3D56] hover:bg-[#FF2744]">
					<Streaming.Icon>
						<Phosphor.MusicNotes
							className="size-6"
							color="white"
							weight="fill"
						/>
					</Streaming.Icon>
				</Streaming.Root>
			</Streaming.Wrapper>

			<Streaming.Wrapper>
				{/* Dizzer */}
				<Streaming.Root className="w-[94px] bg-black hover:bg-neutral-800">
					<Streaming.Icon>
						<Phosphor.Heart className="size-6" color="#A238FF" weight="fill" />
					</Streaming.Icon>
				</Streaming.Root>

				{/* Youtube */}
				<Streaming.Root
					isActive
					className="w-[64px] bg-red-500 hover:bg-red-600"
				>
					<Streaming.Icon>
						<Phosphor.YoutubeLogo
							className="size-6"
							color="white"
							weight="fill"
						/>
					</Streaming.Icon>
				</Streaming.Root>
			</Streaming.Wrapper>
		</div>
	)
}

export { StreamingPlayers }
