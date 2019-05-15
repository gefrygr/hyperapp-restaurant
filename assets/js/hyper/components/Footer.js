import {h, app} from 'hyperapp'
import Header from './Header.js'


export default function Footer({state, actions}) {
  return (
    <footer>
      <div class="container">
        <nav class="menu">
          <a href="#">Our Story</a>
          <a href="#">Reviews</a>
          <a href="#">Special Menu</a>
          <a href="#">Reservations</a>
          <a href="#">Contact Us</a>
        </nav>

        <ul class="social-media">
          <li>
            <a href="http://facebook.com" target="new">
              <i class="fa fa-facebook-official" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="http://twitter.com" target="new">
              <i class="fa fa-twitter" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="http://google.com" target="new">
              <i class="fa fa-google-plus" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="http://youtube.com" target="new">
              <i class="fa fa-youtube-play" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
        
        <div class="copyright">
          © 2019 Copyright
        </div>
      </div>
    </footer>
  )
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
