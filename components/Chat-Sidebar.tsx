
import { ChatBox } from '@/components/ChatBox';
import { CreateGroup } from '@/components/CreateGroup';
import { SidebarContainer } from '@/components/Sidebar-Container';


const ChatSidebar = () => {
  return (
    <SidebarContainer title='Chats' trigger={<CreateGroup />}>
      <ChatBox />
    </SidebarContainer>
  );
};

export default ChatSidebar;