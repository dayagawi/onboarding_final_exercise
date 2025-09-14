import { create } from 'zustand';

type CreatorState = {
  creators: Array<{
    id: number;
    name: string;
    email: string;
    age: number;
    location: string;
  }>;
  fetchCreators: () => Promise<void>;
}

export const useCreatorStore = create<CreatorState>((set) => ({
  creators: [],
  fetchCreators: async () => {
    try {
      const response = await fetch('https://dummyjson.com/users?limit=30');
      const data = await response.json();

      const mappedCreators = data.users.map((user: any) => ({
        id: user.id,
        name: `${user.firstName} ${user.lastName}`,
        email: user.email,
        age: user.age,
        location: `${user.address.city}, ${user.address.state}`
      }));
      
      set({ creators: mappedCreators });
    } catch (error) {
      console.error('Error fetching creators:', error);
    }
  },
}));