import React from 'react';
import VideoListItem from './video_list_item'

const VideoList = (props) => {
	
	let videos = props.videos;
	
	let videoItems = videos.map((video)=>{
		return (
			<VideoListItem 
				onVideoSelect = {props.onVideoSelect}
				key = {video.etag}
				video={video}/>
		)
	})
	
	return (
		<ul className= "col-md-8">
			{videoItems}
		</ul>
	);
}

export default VideoList;