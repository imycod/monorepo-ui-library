export interface MenuItem {
  title: string;
  icon: string;
  activeIcon?:string,
  iconActive?:boolean,
  index: string;
  path: string;
  special?:boolean;
  scrollY?:number;
  _isIconFont: boolean;
  children?: MenuItem[];
}
