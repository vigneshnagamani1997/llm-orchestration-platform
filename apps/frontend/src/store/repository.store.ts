import { create } from "zustand";

interface RepositoryState {
  repository: any;
  setRepository: (repo: any) => void;
}

export const useRepositoryStore =
  create<RepositoryState>((set) => ({
    repository: null,

    setRepository: (repo) =>
      set({ repository: repo })
  }));