import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
// routes
import Router from './routes';
// theme
import ThemeProvider from './theme';
// components
import ScrollToTop from './components/scroll-to-top';

//css
import './App.css';
import { ToastContainer } from 'react-toastify';
import Chat from './components/Chat';
import { ChatProvider } from './components/ChatContext';
import CookiePopup from './components/Cookies';
// ----------------------------------------------------------------------

export default function App() {
  return (
    <ChatProvider>
      <HelmetProvider>
        <BrowserRouter>
          <ThemeProvider>
            <ToastContainer
              style={{ zIndex: '9999999' }}
              position="bottom-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="colored"
            />
            <ScrollToTop />
            <Chat />
            <Router />
            <CookiePopup />
          </ThemeProvider>
        </BrowserRouter>
      </HelmetProvider>
    </ChatProvider>
  );
}
