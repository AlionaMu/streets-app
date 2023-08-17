export interface FooterProps {
  description: string;
  title: string;
}

export interface HeaderProps {
  sections: {
    title: string;
    url: string;
  };
  title: string;
}