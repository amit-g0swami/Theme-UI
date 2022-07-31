/** @jsxImportSource theme-ui */
import React from 'react';
import { Box } from 'theme-ui';

interface Props {
  hour: any;
  arr?: any;
  division: any;
}

function Bar({ hour, arr, division }: Props) {
  var nofs = (hour * division) / 100;
  return (
    <Box sx={{
      display: 'flex', justifyContent: 'space-between', marginTop: '66px', height: '400px',
      '@media screen and (max-width: 720px)': {
        marginTop: '36px !important',
        height: '60vh !important',
        flexDirection: 'column',
      },
    }}
    >
      {arr?.map((val: any) => (
        <Box
          key={val}
          sx={{
            bg: val <= (nofs) ? 'primary' : 'secondary',
            width: '18px',
            marginBottom: '5px',
            borderRadius: '4px',
            '@media screen and (max-width: 720px)': {
              width: '100% !important',
              height: '10px !important'
            },
          }}
        ></Box>
      ))}
    </Box>
  );
}

export default Bar;

