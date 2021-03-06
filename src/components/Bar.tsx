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
    <Box style={{ display: 'flex', justifyContent: 'space-between' }}>
      {arr?.map((val: any) => (
        <Box
          key={val}
          sx={{
            borderRadius: '2px',
            bg: val <= (nofs) ? 'primary' : 'secondary',
            width: '10px',
            height: '300px',
            marginBottom: '5px',
          }}
        ></Box>
      ))}
    </Box>
  );
}

export default Bar;

