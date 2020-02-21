import React from "react";
import Videos from "../../../../components/Videos";
import {generateListVideos} from "../../../../services/videosService";

const ChannelVideosPage: React.FC = () => (
    <Videos
        initialVariant="grid"
        onLoad={generateListVideos}
    />
);

export default ChannelVideosPage;
