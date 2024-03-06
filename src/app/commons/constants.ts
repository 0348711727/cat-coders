export const DEFAULT_LANGUAGE = 'en';
export const VI_LANGUAGE = 'vi';

export const LIST_NAVBAR: MenuItem[] = [
  { id: 'home', title: 'HOME', url: '', child: [] },
  { id: 'about', title: 'ABOUT', url: 'about', child: [] },
  { id: 'services', title: 'SERVICES', url: 'services', child: [] },
  {
    id: 'events', title: 'EVENTS', url: 'events', child: [
      { id: 'home', title: 'HOME', url: '' },
    ]
  },
  {
    id: 'menu', title: 'MENU', url: 'all', relative: 'collections', child: [
      { id: 'tat-ca', title: 'ALL', url: 'all' },
      { id: 'xuan-len-di', title: 'SPRING_TEA', url: 'xuan-len-di' },
      {
        id: 'coffee', title: 'COFFEE', url: 'coffee',
        hasChild: [{ id: 'coffee-highlight', title: 'COFFEE_HIGHLIGHT', url: 'coffee-highlight' },
        { id: 'coffee-vietnam', title: 'COFFEE_VIETNAM', url: 'coffee-vietnam' },
        { id: 'coffee-may', title: 'COFFEE_PHA_MAY', url: 'coffee-may' },
        { id: 'cold-brew', title: 'COLD_BREW', url: 'cold-brew' }]
      },
      {
        id: 'tea', title: 'TEA', url: 'tea', hasChild: [{ id: 'coffee-highlight', title: 'COFFEE_HIGHLIGHT', url: 'coffee-highlight' },
        { id: 'coffee-vietnam', title: 'COFFEE_VIETNAM', url: 'coffee-vietnam' },
        { id: 'coffee-may', title: 'COFFEE_PHA_MAY', url: 'coffee-may' },
        { id: 'cold-brew', title: 'COLD_BREW', url: 'cold-brew' }]
      },
      { id: 'cloud', title: 'CLOUD', url: 'cloud' },
      { id: 'hi-tea', title: 'HI_TEA', url: 'hi-tea' },
      { id: 'green-tea', title: 'GREEN_TEA', url: 'green-tea' }
    ]
  },
  { id: 'contact', title: 'CONTACT', url: 'contact', relative: 'pages', child: [] }
];
interface MenuItem {
  id: string;
  title: string;
  url: string;
  relative?: string;
  child?: MenuItem[];
  hasChild?: MenuItem[];
}