import * as Phosphor from '@phosphor-icons/react'

const PlayerActions = () => {
	return (
		<div className="flex items-center justify-end gap-x-4">
			<div className="group flex cursor-pointer items-center">
				<Phosphor.MicrophoneStage
					size={18}
					// weight="fill"
					fill="white"
					className="group-hover:fill-white/80"
				/>
			</div>
			<div className="group flex cursor-pointer items-center">
				<Phosphor.Playlist
					size={20}
					// weight="fill"
					fill="white"
					className="group-hover:fill-white/80"
				/>
			</div>
		</div>
	)
}

export { PlayerActions }
