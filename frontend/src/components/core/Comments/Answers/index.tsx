import React from "react";
import Component from "./Answers";
import Comments from "../index";
import {generateComments} from "../../../../services/commentsService";

function Answers() {
   return (
       <Component
           body={
               <Comments
                   onLoad={generateComments}
                   variant="mini"
               />
           }
       />
   )
}

export default Answers;
