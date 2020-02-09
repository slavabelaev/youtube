import React from "react";
import Button, {ButtonProps} from "@material-ui/core/Button";

export interface SubscribeButtonProps extends ButtonProps {}

const SubscribeButton: React.FC<SubscribeButtonProps> = (props) => {
   return (
       <Button
           variant="contained"
           color="primary"
           disableElevation
           {...props}
       >
           Подписаться
       </Button>
   )
};

export default SubscribeButton;
