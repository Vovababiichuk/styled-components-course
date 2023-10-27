import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Global } from './AppStyle.js'
import { StyleSheetManager, ThemeProvider } from 'styled-components';

const shouldForwardProp = (prop) => !['align'].includes(prop);

//! Глобальні теми
const theme = {
  colors: {
    primary: 'green',
    secondary: '#001e3c',
  },
  media: {
    mobile: '(max-width: 425px)',
    tablet: '(max-width: 768px) and (min-width: 425px)',
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <StyleSheetManager shouldForwardProp={shouldForwardProp}>
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <Global />
        <App />
      </ThemeProvider >
    </React.StrictMode>,
  </StyleSheetManager>,
)



// Помилка, яку ви бачите, пов'язана з тим, що властивість "align" передається у компонент Button, і ця властивість не розпізнається внутрішнім механізмом styled-components. Ви можете вирішити цю проблему за допомогою того ж підходу, як описано раніше.

// Ось два можливих варіанти для вирішення цієї помилки:

// Варіант 1: Використання shouldForwardProp з StyleSheetManager

// Ви можете використовувати shouldForwardProp для фільтрації пропсів, які передаються до DOM-елемента. Ось приклад, як це може виглядати:

// javascript
// Copy code
// import { StyleSheetManager } from 'styled-components';

// const shouldForwardProp = (prop) => !['align'].includes(prop);

// ReactDOM.render(
//   <StyleSheetManager shouldForwardProp={shouldForwardProp}>
//     <App />
//   </StyleSheetManager>,
//   document.getElementById('root')
// );
// Це дозволить вам фільтрувати проп "align" та інші, які ви не хочете передавати до DOM-елемента.

// Варіант 2: Використання "transient props" (префікс $)

// Ви можете використовувати "transient props" (префікс $) для властивостей, які не мають бути передані в DOM. Ось приклад:

// javascript
// Copy code
// export const Button = ({ align, ...rest }) => {
//   return <StyledButton {...rest} />;
// }
// У цьому варіанті властивість "align" буде видалена з пропсів, які передаються до StyledButton.