import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {
    
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    
  }
}


export const theme = createTheme({
  typography: {
    fontFamily: '"ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", "メイリオ", Meiryo, Osaka, "ＭＳ Ｐゴシック", "MS PGothic", sans-serif',
    fontSize: 14
  },
  palette: {
    text: {
      primary: '#333'
    }
  }
})