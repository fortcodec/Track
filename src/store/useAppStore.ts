import { create } from 'zustand';

export type Message = {
  id: string;
  sender: 'ai' | 'user';
  text: string;
};

interface AppState {
  isListening: boolean;
  transcript: string;
  messages: Message[];
  setIsListening: (isListening: boolean) => void;
  setTranscript: (transcript: string | ((prev: string) => string)) => void;
  addMessage: (message: Message) => void;
}

export const useAppStore = create<AppState>((set) => ({
  isListening: false,
  transcript: '',
  messages: [
    {
      id: '1',
      sender: 'ai',
      text: 'Good evening! You made 3,000 naira profit today. I moved 1,000 naira to your Personal Money for you to spend.',
    }
  ],
  setIsListening: (isListening) => set({ isListening }),
  setTranscript: (updater) => set((state) => ({ 
    transcript: typeof updater === 'function' ? updater(state.transcript) : updater 
  })),
  addMessage: (message) => set((state) => ({ messages: [...state.messages, message] })),
}));
