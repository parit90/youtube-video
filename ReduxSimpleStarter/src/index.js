import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import YTSearch from 'youtube-api-search';
import VideoDescription from './components/video_details';
import _ from 'lodash';


const API_KEY = "AIzaSyBy4gczPV5fhO0d-iPlZCDBKW8LGEzZ7uQ";


class App extends React.Component{
	
	constructor(props){
		super(props);

		this.state = {
			videos: [],
			selectedVideo: null
		}

		this.componentWillMount('surfboard')
	}

	_

	render(){
		const componentWillMount = _.debounce((term)=> {this.componentWillMount(term)},3000)
		return ( 
			<div>
				//callback onSearchTermChange
				<SearchBar onSearchTermChange = {term => this.componentWillMount(term)}/>

				<VideoDescription video = {this.state.selectedVideo}/>
				<VideoList 
                 onVideoSelect = {selectedVideo => this.setState({selectedVideo}) }
				 videos = {this.state.videos} />
			</div>

		);
	}

	componentWillMount(term) {
		let _this = this;
		YTSearch({key:API_KEY, term:term},function(videos){
			_this.setState({ 
				videos:videos,
				selectedVideo: videos[0]
			});
		})
	}
}

ReactDOM.render(<App/>, document.querySelector('.container'))