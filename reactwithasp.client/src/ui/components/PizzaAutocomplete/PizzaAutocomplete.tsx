import { Search } from '@mui/icons-material';
import { Autocomplete, Chip, TextField } from '@mui/material';
import { useState } from 'react';

interface Props {
  width: number | '100%';
}

export const PizzaAutocomplete: React.FC<Props> = ({ width }) => {
  const [value, setValue] = useState([hardCoded[1]]);

  return (
    <Autocomplete
      multiple
      id="fixed-tags-demo"
      value={value}
      disabled
      onChange={(_, newValue) => {
        setValue([...newValue]);
      }}
      options={hardCoded}
      getOptionLabel={(option) => option.loc}
      renderTags={(tagValue, getTagProps) =>
        tagValue.map((option, index) => (
          <Chip
            sx={{ height: 'fit-content', py: '2px' }}
            label={option.loc}
            {...getTagProps({ index })}
            key={index}
          />
        ))
      }
      popupIcon={<Search />}
      sx={{
        width: width,
        height: 40,
        '& .MuiAutocomplete-popupIndicator': { transform: 'none' },
        padding: '0px',
        '& .MuiInputBase-root': {
          padding: '0px',
        },
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder="Enter a State, City, County, or ID"
          sx={{
            input: {
              '&::placeholder': {
                opacity: 1,
              },
            },
          }}
          margin="dense"
        />
      )}
    />
  );
};

const hardCoded = [
  { loc: 'Texas', id: 1 },
  { loc: 'Cedar Park', id: 2 },
  { loc: 'Williamson', id: 3 },
];
