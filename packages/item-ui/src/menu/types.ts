export interface MenuItem {
  title: string;
  icon: string;
  index: string;
  path: string;
  special?:boolean;
  scrollY?:number;
  _isIconFont: boolean;
  children?: MenuItem[];
}
