import React from 'react'
import { Stack } from '@fluentui/react';
import { PrimaryButton } from '@fluentui/react/lib/Button';

// Example formatting
const stackTokens = { childrenGap: 40 };


const ButtonDefault = ( props ) => {

    const _alertClicked = () =>{
        alert('Haz hecho click');
    }

  return (
    <Stack horizontal tokens={stackTokens}>
    <PrimaryButton text="Primary" onClick={_alertClicked} allowDisabledFocus disabled={false}  />
    </Stack>
  )
}

export default ButtonDefault