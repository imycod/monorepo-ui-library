export interface MenuItem {
  title: string;
  icon: string;
  index: string;
  path: string;
  children?: MenuItem[];
}
