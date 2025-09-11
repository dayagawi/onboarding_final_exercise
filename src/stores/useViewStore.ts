import { create } from 'zustand';
import { type ToggleViewType } from '../components/Toggle';

interface ViewState {
  toggleValue: ToggleViewType;
  setToggleValue: (value: ToggleViewType) => void;
}

export const useViewStore = create<ViewState>((set) => ({
  toggleValue: 'grid',
  setToggleValue: (value) => set({ toggleValue: value }),
}));