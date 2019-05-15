import {h, app} from 'hyperapp'
import Header from './Header.js'


export default function RandomQuote({state, actions}) {
  return (
    <section id="RandomQuote" style={{
      backgroundImage: 'linear-gradient(135deg, rgba(0,0,0,.2) 0, #000 100%), url("http://www.coupondunia.in/blog/wp-content/uploads/2014/05/food-blogl-1050x590.jpg")'
    }}>
      <div class="container">
        <h1>"Cooking is an art form, a creative thing."</h1>
        <span class="author">- Jhonny -</span>
      </div>
    </section>
  )
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
