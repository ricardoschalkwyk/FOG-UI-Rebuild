export interface Sub {
  id: number;
  mandate: string;
  leadership: string;
}

export interface NavItem {
  id: number;
  name: string;
  path: string;
  sub?: Sub[];
  active: boolean;
  icon?: React.ReactNode;
}
