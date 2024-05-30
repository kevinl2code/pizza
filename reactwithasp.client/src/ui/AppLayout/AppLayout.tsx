import { Grid } from '@mui/material';
interface Props {
  children: NonNullable<React.ReactNode>;
}

interface AppLayoutComposition {
  AppBar: React.FC<Props>;
  FilterBar: React.FC<Props>;
  Content: React.FC<Props>;
  BottomNav: React.FC<Props>;
}

export const AppLayout: React.FC<Props> & AppLayoutComposition = ({
  children,
}) => {
  return (
    <Grid container direction="column" sx={{ height: '100vh' }}>
      {children}
    </Grid>
  );
};

const Appbar: React.FC<Props> = ({ children }) => {
  return (
    <Grid item sx={{ width: '100%' }}>
      {children}
    </Grid>
  );
};

const FilterBar: React.FC<Props> = ({ children }) => {
  return <Grid item>{children}</Grid>;
};

export const Content: React.FC<Props> = ({ children }) => {
  return (
    <Grid item container flex="1 1 0%" direction="row" overflow="hidden">
      {children}
    </Grid>
  );
};

export const BottomNav: React.FC<Props> = ({ children }) => {
  return <Grid item>{children}</Grid>;
};

AppLayout.AppBar = Appbar;
AppLayout.FilterBar = FilterBar;
AppLayout.Content = Content;
AppLayout.BottomNav = BottomNav;
