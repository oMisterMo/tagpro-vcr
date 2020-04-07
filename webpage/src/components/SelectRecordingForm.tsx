import { observer } from 'mobx-react';
import * as React from 'react';

import FileInput from '../elements/FileInput';
import useAppState from '../stores/useAppState';
import UploadLabel from './UploadLabel';
import StartButton from './StartButton';
import StopButton from './StopButton';

export default observer(function SelectRecordingForm() {
	const appState = useAppState();

	return (
		<div className="form-upload">
			<UploadLabel />
			<span> or&nbsp;&nbsp; </span>
			<div className="form-fetch">
				<div className="form-fetch-icon">{appState.fetchIcon}</div>
				<input
					type="text"
					className="recording-url-input"
					value={appState.recordingURL}
					onChange={appState.handleUrlChange}
					placeholder="Fetch from URL (http://...)"
				/>
			</div>
			<FileInput onChange={appState.handleFileSelect} />
			<StartButton />
			<StopButton />
		</div>
	);
});