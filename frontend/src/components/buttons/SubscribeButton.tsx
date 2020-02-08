import React from "react";
import Button, {ButtonProps} from "@material-ui/core/Button";

export interface SubscribeButtonProps extends ButtonProps {}

const SubscribeButton: React.FC<SubscribeButtonProps> = (props) => {
   return (
       <Button
           {...props}
           variant="contained"
           color="primary"
       >
           Подписаться
       </Button>
   )
};

export default SubscribeButton;
