import { Checkbox, CheckboxProps, styled } from "@mui/material";

export const CustomizedCheckboxIcon = styled('span')(({ theme }) => ({
    borderRadius: 4,
    width: 20,
    height: 20,
    boxShadow: 'inset 0 0 0 1px #A8A8A8'
  }));
  
 export const CustomizedCheckedIcon = styled(CustomizedCheckboxIcon)({
    backgroundColor: '#49B4BB',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
    '&::before': {
      display: 'block',
      width: 16,
      height: 16,
      backgroundImage: 'none'
    },
    'input:hover ~ &': {
      backgroundColor: '#49B4BB',
    },
    boxShadow: 'none'
  });