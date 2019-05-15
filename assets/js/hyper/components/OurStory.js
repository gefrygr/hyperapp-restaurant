import {h, app} from 'hyperapp'
import Header from './Header.js'


export default function OurStory({state, actions}) {
  return (
    <section id="OurStory">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <h5 class="comp-title">Our Story</h5>
            <h2>Cooking is the art of adjustment</h2>
            <p>Tumblr tilde jianbing narwhal roof party enamel pin poke lyft cronut seitan la croix copper mug fam af pok pok. Cred lomo bespoke chambray waistcoat pok pok green juice before they sold out hammock trust fund XOXO jean shorts freegan you probably haven't heard of them wolf.intelligentsia.</p>
            <div class="quote">"Best steak in your local restaurant" - <strong>Thomas Eggsy</strong></div>
            <a href="#" class="reserve-btn">Reserve</a>
          </div>
          <div class="col-md-6">
            <div class="video-img">
            
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
