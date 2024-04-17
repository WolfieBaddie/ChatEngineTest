import{ MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced';



const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic('ece486ca-ceff-4705-b5ee-c797b2f9d6a2', props.user.username, props.user.secret);
    return (
    <div style ={{height: '100vh'}}>
        <MultiChatSocket {...chatProps} />
        <MultiChatWindow {...chatProps} style={{ height: '100%'}}/>
    </div>
    
)
  };
  export default ChatsPage;