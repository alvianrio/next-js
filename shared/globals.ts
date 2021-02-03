import {css} from '@emotion/react'

export const globalStyles = css`
:root{
  --page-bg: #222;
  --page-text: #ddd;
}

html,
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  background-color : var(--page-bg);
  color            : var(--page-text);
    
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}
`