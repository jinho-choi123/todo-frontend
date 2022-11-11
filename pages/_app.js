import '../styles/globals.css'
import '../styles/carousel.css'
import '../styles/todocontent.css'
import store from '../component/redux/store.js'
import {Provider} from 'react-redux';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
