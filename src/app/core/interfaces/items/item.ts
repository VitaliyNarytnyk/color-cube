export interface ItemsData {
  data: {
    general: {
      items: { id: number; title: string; img: string; }[]
    };
    width: {
      items: { id: number; title: string; img: string; }[]
    };
    special: {
      items: { id: number; title: string; img: string; }[]
    };
    silkscreen: {
      items: { id: number; title: string; img: string; }[]
    };
    package: {
      items: { id: number; title: string; img: string; }[]
    };
    advertising: {
      items: { id: number; title: string; img: string; }[]
    };
  }
}

export type Items = { general: { items: { id: number; title: string; img: string; }[]; }; width: { items: { id: number; title: string; img: string; }[]; }; special: { items: { id: number; title: string; img: string; }[]; }; silkscreen: { items: { id: number; title: string; img: string; }[]; }; package: { items: { id: number; title: string; img: string; }[]; }; advertising: { items: { id: number; title: string; img: string; }[]; }; };