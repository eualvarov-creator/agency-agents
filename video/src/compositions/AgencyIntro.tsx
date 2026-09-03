import type React from 'react';
import {
	AbsoluteFill,
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {theme} from '../theme';

export type AgencyIntroProps = {
	title: string;
	subtitle: string;
};

export const AgencyIntro: React.FC<AgencyIntroProps> = ({title, subtitle}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const titleIn = spring({frame, fps, config: {damping: 200}});
	const subtitleIn = spring({
		frame: frame - 12,
		fps,
		config: {damping: 200},
	});
	const ruleWidth = interpolate(titleIn, [0, 1], [0, 240]);

	return (
		<AbsoluteFill
			style={{
				backgroundColor: theme.background,
				fontFamily: theme.fontFamily,
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<div
				style={{
					opacity: titleIn,
					transform: `translateY(${interpolate(titleIn, [0, 1], [40, 0])}px)`,
					fontSize: 120,
					fontWeight: 700,
					color: theme.text,
					letterSpacing: -4,
				}}
			>
				{title}
			</div>
			<div
				style={{
					width: ruleWidth,
					height: 6,
					borderRadius: 3,
					backgroundColor: theme.accent,
					margin: '32px 0',
				}}
			/>
			<div
				style={{
					opacity: subtitleIn,
					fontSize: 40,
					color: theme.textMuted,
				}}
			>
				{subtitle}
			</div>
		</AbsoluteFill>
	);
};
