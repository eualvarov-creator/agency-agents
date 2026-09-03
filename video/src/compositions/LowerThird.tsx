import type React from 'react';
import {AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {theme} from '../theme';

export type LowerThirdProps = {
	name: string;
	role: string;
};

export const LowerThird: React.FC<LowerThirdProps> = ({name, role}) => {
	const frame = useCurrentFrame();
	const {fps, durationInFrames} = useVideoConfig();

	const slideIn = spring({frame, fps, config: {damping: 200}});
	// Slide back out over the last 15 frames so the card can be dropped on any clip.
	const slideOut = spring({
		frame: frame - (durationInFrames - 15),
		fps,
		config: {damping: 200},
	});
	const progress = slideIn - slideOut;

	return (
		<AbsoluteFill
			style={{
				fontFamily: theme.fontFamily,
				justifyContent: 'flex-end',
				padding: 80,
			}}
		>
			<div
				style={{
					transform: `translateX(${interpolate(progress, [0, 1], [-600, 0])}px)`,
					opacity: progress,
					backgroundColor: theme.surface,
					borderLeft: `8px solid ${theme.accent}`,
					borderRadius: 12,
					padding: '32px 40px',
				}}
			>
				<div style={{fontSize: 56, fontWeight: 700, color: theme.text}}>
					{name}
				</div>
				<div style={{fontSize: 32, color: theme.textMuted, marginTop: 8}}>
					{role}
				</div>
			</div>
		</AbsoluteFill>
	);
};
