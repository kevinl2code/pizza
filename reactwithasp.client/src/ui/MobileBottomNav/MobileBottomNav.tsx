import { Grid, useTheme } from '@mui/material';
import { StillButton } from '../components';
import { FilterListOutlined, List, Place } from '@mui/icons-material';
interface Props {
  selectedMobilePrimaryView: number;
  setSelectedMobilePrimaryView: (selectedMobileTab: number) => void;
}

export const MobileBottomNav: React.FC<Props> = ({
  selectedMobilePrimaryView,
  setSelectedMobilePrimaryView,
}) => {
  const theme = useTheme();

  const handleViewChange = () => {
    if (selectedMobilePrimaryView === 0) {
      setSelectedMobilePrimaryView(1);
    } else {
      setSelectedMobilePrimaryView(0);
    }
  };

  const viewSelectIcon =
    selectedMobilePrimaryView === 0 ? (
      <List
        color="primary"
        sx={{ '&.MuiSvgIcon-root': { fontSize: '30px' } }}
      />
    ) : (
      <Place
        color="primary"
        sx={{ '&.MuiSvgIcon-root': { fontSize: '30px' } }}
      />
    );

  return (
    <Grid
      container
      direction="row"
      justifyContent="space-around"
      alignItems="center"
      sx={{
        height: '56px',
        padding: '0px 8px 0px 8px',
        [theme.breakpoints.up('lg')]: {
          display: 'none',
        },
      }}
    >
      <StillButton
        onClick={handleViewChange}
        startIcon={viewSelectIcon}
        variant="text"
      />
      <StillButton
        onClick={() => {}}
        variant="text"
        endIcon={
          <FilterListOutlined
            color="primary"
            sx={{ '&.MuiSvgIcon-root': { fontSize: '30px' } }}
          />
        }
      />
    </Grid>
  );
};
