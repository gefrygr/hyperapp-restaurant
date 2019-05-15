import {h, app} from 'hyperapp'
import Header from './Header.js'


export default function TopImg({state, actions}) {
  console.log(state.companyInfo.title)
  return (
    <section id="TopImg">
      <div class="container">
        <div class="title">
          <h5>
            Welcome
          </h5>
          <h1>
            {state.companyInfo.title}
          </h1>
        </div>
        <div class="contact-info">
          <div class="container">
            <div class="booking">Book Table Directly</div>
            <h2>(xxx) - xxx - xxxx</h2>
            <div class="hours">
              Opening Hours <strong>Mon - Frid: </strong> 9am - 9pm
              <strong>Weekend:</strong> 9am - 11pm
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
