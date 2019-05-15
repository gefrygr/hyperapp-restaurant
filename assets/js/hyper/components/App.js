import {h, app} from 'hyperapp'
import Header from './Header.js'
import TopImg from './TopImg.js'
import OurStory from './OurStory.js'
import SpecialMenu from './SpecialMenu.js'
import RandomQuote from './RandomQuote.js'
import Reviews from './Reviews.js'
import ContactUs from './ContactUs.js'
import Footer from './Footer.js'

export default function App({state, actions}) {
  return (
    <div class={'app'}>
      <Header state={state} action={actions}/>
      <TopImg state={state} action={actions}/>
      <OurStory state={state} action={actions}/>
      <SpecialMenu state={state} action={actions}/>
      <RandomQuote state={state} action={actions}/>
      <Reviews state={state} action={actions}/>
      <ContactUs state={state} action={actions}/>
      <Footer state={state} action={actions}/>
    </div>
  )
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
