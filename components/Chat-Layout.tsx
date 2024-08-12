'use client';

import { FC, ReactNode } from 'react';
import SharedLayout from '@/components/shared-layout';
import ChatSidebar from './Chat-Sidebar';

type ChatsLayoutProps = {
  children: ReactNode;
};

export const ChatsLayout: FC<ChatsLayoutProps> = ({ children }) => {
  return (
    <SharedLayout SidebarComponent={() => <ChatSidebar />}>
      {children}
    </SharedLayout>
  );
};