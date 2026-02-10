import ReactDOM from 'react-dom/client';
import './styles/styles.css';
import Routes from './router';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
    <Routes/>
);

reportWebVitals();