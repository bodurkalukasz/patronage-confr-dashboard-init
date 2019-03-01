
import { createGlobalStyle } from 'styled-components'

// we can use sass here :)

export default createGlobalStyle`
  article {
    width: 60%;
    margin: 0 20%;

    a { 
        color: red;
        &:hover { color: blue; }
    }
  }

  form { text-align: center; }

  label {
      display:block;
      margin: 10px 0;
  }
`