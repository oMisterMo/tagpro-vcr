import * as React from 'react';

export default function Notes() {
	return (
		<details open>
			<summary>Notes</summary>
			<ul>
				<li>
					To test your TagPro userscripts here, add this @include:
					<br />
					<code>// @include {process.env.VCR_URL}/game.html</code>
				</li>
				<li>
					The game is running in "spectator"-mode, so you can press <kbd>C</kbd> to center the view,
					<kbd>+</kbd>/<kbd>-</kbd> to zoom in/out etc. (see{' '}
					<a href="https://www.reddit.com/r/TagPro/wiki/gameplay#wiki_spectator">TagPro wiki</a>)
				</li>
			</ul>
		</details>
	);
}