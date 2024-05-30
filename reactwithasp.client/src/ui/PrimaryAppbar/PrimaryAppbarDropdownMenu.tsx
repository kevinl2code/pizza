import React from 'react';
import { useState } from 'react';
import {
  Paper,
  MenuList,
  MenuItem,
  Box,
  Tabs,
  Tab,
  Popper,
  Grow,
  ClickAwayListener,
  useTheme,
} from '@mui/material';
interface Props {}

function a11yProps(index: number) {
  return {
    id: `menuTab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export const PrimaryAppbarDropdownMenu: React.FC<Props> = () => {
  const [show, setShow] = useState(false);
  const [value, setValue] = useState<number | boolean>(false);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const theme = useTheme();
  const handleMouseEnter = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    value: number
  ) => {
    setShow(true);
    setValue(value);
    setAnchorEl(event.currentTarget);
  };

  const handleMouseLeave = () => {
    setValue(false);

    setShow(false);
  };

  const handleClose = () => {
    setShow(false);
  };

  return (
    <Box
      sx={{
        borderBottom: 1,
        borderColor: 'divider',
        height: '56px',
        width: '25%',
        mr: '1px',
      }}
      onMouseLeave={handleMouseLeave}
    >
      <Tabs
        value={value}
        sx={{
          height: '56px',
          '& .MuiTab-root.Mui-selected': {
            borderBottom: `6px solid ${theme.palette.primary.main}`,
          },
        }}
        aria-label="basic tabs example"
      >
        <Tab
          label="Takeout"
          sx={{ height: '56px' }}
          {...a11yProps(0)}
          onMouseEnter={(event) => handleMouseEnter(event, 0)}
        />
        <Tab
          label="Delivery"
          sx={{ height: '56px' }}
          {...a11yProps(1)}
          onMouseEnter={(event) => handleMouseEnter(event, 1)}
        />
        <Tab
          label="More"
          sx={{ height: '56px' }}
          {...a11yProps(2)}
          onMouseEnter={(event) => handleMouseEnter(event, 2)}
        />
      </Tabs>
      <Popper
        id="menuTab-content"
        open={show}
        anchorEl={anchorEl}
        onMouseLeave={handleMouseLeave}
        role={undefined}
        placement="bottom-start"
        transition
        disablePortal
        style={{ zIndex: 99999 }}
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === 'bottom-start' ? 'left top' : 'left bottom',
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  id="composition-menu"
                  aria-labelledby="composition-button"
                >
                  <MenuItem onClick={handleClose}>Mozzarella</MenuItem>
                  <MenuItem onClick={handleClose}>Marinara</MenuItem>
                  <MenuItem onClick={handleClose}>Pepperoni</MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </Box>
  );
};
