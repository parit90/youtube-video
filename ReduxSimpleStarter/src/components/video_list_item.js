import React from 'react';

const VideoListItem = ({video,onVideoSelect}) =>{

	let imageURL = video.snippet.thumbnails.default.url;
	let description = video.snippet.title

	return(
		<li onClick = {() => onVideoSelect(video) }className = "list-group-item">
			<div className="video-list-media">
				<div className="media-left">
					<img className="media-object" src = {imageURL} />
				</div>
				
				<div className="media-body">
					<div className="media-header">
						{description} 
					</div>
				</div>

			</div>
		</li>
	);
}

export default VideoListItem;