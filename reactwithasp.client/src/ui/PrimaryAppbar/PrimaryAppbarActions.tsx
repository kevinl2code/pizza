import { Button, Container, Grid } from '@mui/material';
import { TypographyButton } from '../components';

export const PrimaryAppbarActions: React.FC = () => {
  return (
    <Grid item>
      <Container sx={{ display: 'inline' }}>
        <TypographyButton label="Sign In" onClick={() => {}} />
        {' / '}
        <TypographyButton label="Sign Up" onClick={() => {}} />
      </Container>
      <Button
        variant="outlined"
        sx={{ color: '#000', borderColor: '#000', m: '0px 8px' }}
      >
        Add a Location
      </Button>
    </Grid>
  );
};
