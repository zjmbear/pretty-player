import { cn } from '@/utils/cn'
import type { ComponentProps } from 'react'
import { Button } from '../ui/button'
import * as Phosphor from '@phosphor-icons/react'

type StreamingProps = ComponentProps<'button'> & {
	isActive?: boolean
	isHalf?: boolean
}

const StreamingRoot = ({
	isActive = false,
	isHalf = false,
	className = undefined,
	onClick,
	children,
	...props
}: StreamingProps) => {
	const handlePlayPause = (event: React.MouseEvent<HTMLButtonElement>) => {
		console.log('handlePlayPause', event)

		if (!onClick) return

		onClick(event)
	}

	return isActive ? (
		<div className="relative">
			<Button
				data-half={isHalf}
				className={cn(
					'h-auto cursor-pointer',
					'data-[isHalf=true]:w-[45%]',
					className
				)}
				onClick={handlePlayPause}
				{...props}
			>
				{children}
			</Button>
			<Button
				className="absolute top-0 flex h-full w-full cursor-pointer items-center justify-center rounded-md bg-black/50"
				onClick={handlePlayPause}
				{...props}
			>
				<Phosphor.PauseCircle className="size-6" color="white" weight="fill" />
			</Button>
		</div>
	) : (
		<Button
			data-half={isHalf}
			className={cn(
				'h-auto cursor-pointer',
				'data-[isHalf=true]:w-[45%]',
				className
			)}
			onClick={handlePlayPause}
			{...props}
		>
			{children}
		</Button>
	)
}

type WrapperStreamingProps = ComponentProps<'div'>

const WrapperStreaming = ({
	children,
	className = undefined,
	...props
}: WrapperStreamingProps) => {
	return <div className={cn('flex gap-2', className)} {...props}>{children}</div>
}

export { WrapperStreaming }

type StreamingIconProps = {
	children: React.ReactNode
}

const StreamingIcon = ({ children }: StreamingIconProps) => {
	return children
}

const Streaming = {
	Root: StreamingRoot,
	Icon: StreamingIcon,
	Wrapper: WrapperStreaming,
}

export { Streaming }
