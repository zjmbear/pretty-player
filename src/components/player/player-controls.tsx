import * as Phosphor from '@phosphor-icons/react'

const PlayerControls = () => {
	return (
		<div className=" flex flex-row justify-center gap-x-6">
			<div className="group flex cursor-pointer items-center">
				<Phosphor.SkipBack
					size={24}
					weight="fill"
					fill="white"
					className="group-hover:fill-white/80"
				/>
			</div>
			<div className="cursor-pointer rounded-full bg-white/30 p-2 hover:bg-white/40">
				{/* <Phosphor.Play size={24} weight="fill" fill="white" /> */}
				<Phosphor.Pause size={24} weight="fill" fill="white" />
			</div>
			<div className="group flex cursor-pointer items-center">
				<Phosphor.SkipForward
					size={24}
					weight="fill"
					fill="white"
					className="group-hover:fill-white/80"
				/>
			</div>
		</div>
	)
}

export { PlayerControls }
