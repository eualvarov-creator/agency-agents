import type React from 'react';
import {Composition} from 'remotion';
import {AgencyIntro} from './compositions/AgencyIntro';
import {LowerThird} from './compositions/LowerThird';

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				id="AgencyIntro"
				component={AgencyIntro}
				durationInFrames={150}
				fps={30}
				width={1920}
				height={1080}
				defaultProps={{
					title: 'The Agency',
					subtitle: 'AI specialists, rendered in code',
				}}
			/>
			<Composition
				id="LowerThird"
				component={LowerThird}
				durationInFrames={120}
				fps={30}
				width={1080}
				height={1920}
				defaultProps={{
					name: 'Álvaro',
					role: 'Growth · AIWA',
				}}
			/>
		</>
	);
};
