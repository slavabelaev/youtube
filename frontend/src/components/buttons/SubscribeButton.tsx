import React from "react";
import Button, {ButtonProps} from "@material-ui/core/Button";

export interface SubscribeButtonProps extends ButtonProps {}

function SubscribeButton(props: SubscribeButtonProps) {
    const [subscribed, setSubscribed] = React.useState(false);
    const toggle = () => setSubscribed(!subscribed);
    return (
       <Button
           variant="contained"
           disableElevation
           {...props}
           color={subscribed ? 'default' : (props.color || 'primary')}
           onClick={toggle}
       >
           {subscribed ? 'Вы подписаны' : 'Подписаться'}
       </Button>
   )
};

export default SubscribeButton;
