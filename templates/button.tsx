import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Button } from '@mui/material';

import tw from 'twin.macro';
const theme = createTheme({
  typography: {
    button: {
      textTransform: 'none'
    }
  }
});
const CustomButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={theme}>
      <Button
        sx={{
          borderColor: 'rgb(192 218 116)',
          color: 'rgb(192 218 116)',
          marginLeft: '1rem',
          fontSize: '0.75rem',
          ':hover': {
            borderColor: 'rgb(192 218 116)',
            backgroundColor: 'rgb(30 41 59)'
          }
        }}
        tw='text-crayola ml-5 border-crayola text-xs hover:border-crayola hover:bg-slate-800'
        variant='outlined'
      >
        {children}
      </Button>
    </ThemeProvider>
  );
};

export default CustomButton;
