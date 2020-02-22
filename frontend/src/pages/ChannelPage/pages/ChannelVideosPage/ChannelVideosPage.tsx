import React from "react";
import Videos from "../../../../components/Videos";
import {generateListVideos} from "../../../../services/videosService";

function ChannelVideosPage() {
	return (
    <Videos
        initialVariant="grid"
        onLoad={generateListVideos}
    />
)
}

export default ChannelVideosPage;
