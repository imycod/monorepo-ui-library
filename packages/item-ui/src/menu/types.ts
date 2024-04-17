export interface MenuItem {
  title: string;
  icon: string;
  index: string;
  path: string;
  _isIconFont: boolean;
  children?: MenuItem[];
}
