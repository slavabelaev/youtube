import React from "react";
import Posts from "../../../../components/Posts";
import {generatePosts} from "../../../../services/postsService";

function ChannelCommunityPage() {
    return (
        <div>
            <Posts onLoad={generatePosts}/>
        </div>
    )
}

export default ChannelCommunityPage;
