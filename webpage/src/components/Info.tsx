import * as React from 'react';

import UploadLabel from './UploadLabel';
import StartButton from './StartButton';

const VCR_URL = process.env.VCR_URL;

export default function Info() {
	return (
		<details open>
			<summary>Usage</summary>
			<ol>
				<li>
					Install the VCR userscript: <a href={`${VCR_URL}/tagpro-vcr.user.js`}>tagpro-vcr.user.js</a>.
				</li>
				<li>
					Play a game of{' '}
					<a href="http://tagpro.gg" target="_blank" rel="noreferrer">
						TagPro
					</a>
					.
				</li>
				<li>
					Upload the recorded game here (<UploadLabel />) and click {<StartButton />}.
				</li>
			</ol>
		</details>
	);
}