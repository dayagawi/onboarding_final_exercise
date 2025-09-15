import { create } from 'zustand';

export type Creator = {
  id: number;
  name: string;
  email: string;
  age: number;
  location: string;
};

// Raw user data from DummyJSON API
type DummyUser = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  address: {
    city: string;
    state: string;
  };
};

type CreatorState = {
  creators: Creator[];
  searchResults: Creator[];
  searchTerm: string;
  isSearching: boolean;
  fetchCreators: () => Promise<void>;
  setSearchTerm: (term: string) => void;
  searchCreators: (query: string) => Promise<void>;
}


const mapDummyUserToCreator = (user: DummyUser): Creator => ({
  id: user.id,
  name: `${user.firstName} ${user.lastName}`,
  email: user.email,
  age: user.age,
  location: `${user.address.city}, ${user.address.state}`
});

export const useCreatorStore = create<CreatorState>((set) => ({
  creators: [],
  searchResults: [],
  searchTerm: '',
  isSearching: false,
  
  fetchCreators: async () => {
    try {
      const response = await fetch('https://dummyjson.com/users?limit=30');
      const data = await response.json();

      const mappedCreators = data.users.map((user: DummyUser) => mapDummyUserToCreator(user));
      
      set({ creators: mappedCreators });
    } catch (error) {
      console.error('Error fetching creators:', error);
    }
  },
  
  setSearchTerm: (term: string) => {
    set({ searchTerm: term, isSearching: term.trim().length > 0 });
  },
  
  searchCreators: async (query: string) => {
    if (!query.trim()) {
      set({ searchResults: [], isSearching: false });
      return;
    }
    
    try {
      const response = await fetch(`https://dummyjson.com/users/search?q=${encodeURIComponent(query)}`);
      const data = await response.json();

      const mappedResults = data.users.map((user: DummyUser) => mapDummyUserToCreator(user));
      
      set({ searchResults: mappedResults, isSearching: false });
    } catch (error) {
      console.error('Error searching creators:', error);
      set({ searchResults: [], isSearching: false });
    }
  },
}));