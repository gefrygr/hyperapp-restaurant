webpackJsonp([0],[
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Header;

var _hyperapp = __webpack_require__(0);

function Header(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "header",
    null,
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "div",
        { "class": "logo" },
        "Logo"
      ),
      (0, _hyperapp.h)(
        "nav",
        null,
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Our Story"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Reviews"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Special Menu"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Reservations"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Contact Us"
        )
      )
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var reviewLeftClicked = function reviewLeftClicked(state, actions) {
  return {
    reviewStatus: {
      currentReview: state.reviewStatus.currentReview - 1
    }
  };
};

var reviewRightClicked = function reviewRightClicked(state, actions) {
  return {
    reviewStatus: {
      currentReview: state.reviewStatus.currentReview + 1
    }
  };
};

var actions = exports.actions = {
  reviewLeftClicked: reviewLeftClicked,
  reviewRightClicked: reviewRightClicked
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = App;

var _hyperapp = __webpack_require__(0);

var _Header = __webpack_require__(1);

var _Header2 = _interopRequireDefault(_Header);

var _TopImg = __webpack_require__(11);

var _TopImg2 = _interopRequireDefault(_TopImg);

var _OurStory = __webpack_require__(7);

var _OurStory2 = _interopRequireDefault(_OurStory);

var _SpecialMenu = __webpack_require__(10);

var _SpecialMenu2 = _interopRequireDefault(_SpecialMenu);

var _RandomQuote = __webpack_require__(8);

var _RandomQuote2 = _interopRequireDefault(_RandomQuote);

var _Reviews = __webpack_require__(9);

var _Reviews2 = _interopRequireDefault(_Reviews);

var _ContactUs = __webpack_require__(5);

var _ContactUs2 = _interopRequireDefault(_ContactUs);

var _Footer = __webpack_require__(6);

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function App(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    'div',
    { 'class': 'app' },
    (0, _hyperapp.h)(_Header2.default, { state: state, action: actions }),
    (0, _hyperapp.h)(_TopImg2.default, { state: state, action: actions }),
    (0, _hyperapp.h)(_OurStory2.default, { state: state, action: actions }),
    (0, _hyperapp.h)(_SpecialMenu2.default, { state: state, action: actions }),
    (0, _hyperapp.h)(_RandomQuote2.default, { state: state, action: actions }),
    (0, _hyperapp.h)(_Reviews2.default, { state: state, action: actions }),
    (0, _hyperapp.h)(_ContactUs2.default, { state: state, action: actions }),
    (0, _hyperapp.h)(_Footer2.default, { state: state, action: actions })
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var companyInfo = {
  title: 'PRIME STEAK RESTAURANT',
  phone: '(718) - 219 - 8652',
  location: 'Los Angeles, California'
};

var specialMenuData = [{
  title: 'Super BBQ Grill No Smoke',
  description: 'Fried eggs, Steak, baked potato or french fries, side of vegetables',
  price: 25
}, {
  title: 'Chicken Fingers',
  description: 'Fried eggs, Steak, baked potato or french fries, side of vegetables',
  price: 15
}, {
  title: 'All American Hamburger',
  description: 'Fried eggs, Steak, baked potato or french fries, side of vegetables',
  price: 10
}];

var reviewsData = [{
  company: 'The Food Networks',
  author: 'Joe Bastiachi',
  authorInfo: 'Winner Master Chef 2018',
  highlight: 'Best Restaurant in the L.A area!',
  review: "Tumblr tilde jianbing narwhal roof party enamel pin poke lyft cronut seitan la croix copper mug fam af pok pok. Cred lomo bespoke chambray waistcoat pok pok green juice before they sold out hammock trust fund XOXO jean shorts freegan you probably haven't heard of them wolf.intelligentsia."
}, {
  company: 'HBO',
  author: 'Joe Bastiachi',
  authorInfo: 'Winner Master Chef 2018',
  highlight: 'Best Restaurant in the L.A area!',
  review: "Tumblr tilde jianbing narwhal roof party enamel pin poke lyft cronut seitan la croix copper mug fam af pok pok. Cred lomo bespoke chambray waistcoat pok pok green juice before they sold out hammock trust fund XOXO jean shorts freegan you probably haven't heard of them wolf.intelligentsia."
}, {
  company: 'CWB',
  author: 'Joe Bastiachi',
  authorInfo: 'Winner Master Chef 2018',
  highlight: 'Best Restaurant in the L.A area!',
  review: "Tumblr tilde jianbing narwhal roof party enamel pin poke lyft cronut seitan la croix copper mug fam af pok pok. Cred lomo bespoke chambray waistcoat pok pok green juice before they sold out hammock trust fund XOXO jean shorts freegan you probably haven't heard of them wolf.intelligentsia."
}, {
  company: 'NBC',
  author: 'Joe Bastiachi',
  authorInfo: 'Winner Master Chef 2018',
  highlight: 'Best Restaurant in the L.A area!',
  review: "Tumblr tilde jianbing narwhal roof party enamel pin poke lyft cronut seitan la croix copper mug fam af pok pok. Cred lomo bespoke chambray waistcoat pok pok green juice before they sold out hammock trust fund XOXO jean shorts freegan you probably haven't heard of them wolf.intelligentsia."
}, {
  company: 'The New Times',
  author: 'Joe Bastiachi',
  authorInfo: 'Winner Master Chef 2018',
  highlight: 'Best Restaurant in the L.A area!',
  review: "Tumblr tilde jianbing narwhal roof party enamel pin poke lyft cronut seitan la croix copper mug fam af pok pok. Cred lomo bespoke chambray waistcoat pok pok green juice before they sold out hammock trust fund XOXO jean shorts freegan you probably haven't heard of them wolf.intelligentsia."
}];

var randomQuoteData = [{
  author: 'Johnny',
  quote: 'Cooking Is An Art Form, A Creative Thing.'
}, {
  author: 'Lisa',
  quote: 'If cooking becomes an art form rather than a means of providing a reasonable diet, then something is clearly wrong.'
}, {
  author: 'David',
  quote: 'The greatest dishes are very simple.'
}];

var globalState = exports.globalState = {
  count: 0,
  companyInfo: companyInfo,
  specialMenuData: specialMenuData,
  reviewsData: reviewsData,
  randomQuoteData: randomQuoteData,
  reviewStatus: {
    currentReview: 0
  }
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ContactUs;

var _hyperapp = __webpack_require__(0);

var _Header = __webpack_require__(1);

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ContactUs(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    'section',
    { id: 'ContactUs', 'class': 'texturebg' },
    (0, _hyperapp.h)(
      'div',
      { 'class': 'container' },
      (0, _hyperapp.h)(
        'h5',
        { 'class': 'comp-title' },
        'Contact Us'
      ),
      (0, _hyperapp.h)(
        'h2',
        null,
        'Delicious Flavor of Autumn'
      ),
      (0, _hyperapp.h)(
        'div',
        { 'class': 'box' },
        (0, _hyperapp.h)(
          'div',
          { 'class': 'row' },
          (0, _hyperapp.h)(
            'div',
            { 'class': 'col-md-6' },
            (0, _hyperapp.h)(
              'div',
              { 'class': 'title' },
              state.companyInfo.location
            ),
            (0, _hyperapp.h)(
              'h6',
              { 'class': 'Address' },
              '435 main st ',
              (0, _hyperapp.h)('br', null),
              'Hialeah, FL 12402'
            ),
            (0, _hyperapp.h)(
              'p',
              null,
              (0, _hyperapp.h)(
                'strong',
                null,
                'Email:'
              ),
              ' ',
              (0, _hyperapp.h)(
                'a',
                { href: 'mailto:info@primesteak.com' },
                ' info@primesteak.com'
              )
            )
          ),
          (0, _hyperapp.h)(
            'div',
            { 'class': 'col-md-6' },
            (0, _hyperapp.h)(
              'h6',
              null,
              'Phone:'
            ),
            (0, _hyperapp.h)(
              'div',
              { 'class': 'title' },
              '786-346-6789'
            ),
            (0, _hyperapp.h)(
              'h6',
              null,
              'Lunch Service:'
            ),
            (0, _hyperapp.h)(
              'p',
              null,
              'Friday, Saturday and Sunday: Bookings',
              (0, _hyperapp.h)('br', null),
              ' from 12pm - 1:30pm'
            ),
            (0, _hyperapp.h)(
              'h6',
              null,
              'Dinner Service:'
            ),
            (0, _hyperapp.h)(
              'p',
              null,
              'Daily',
              (0, _hyperapp.h)('br', null),
              ' from 6pm - 9:30pm'
            )
          )
        )
      )
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Footer;

var _hyperapp = __webpack_require__(0);

var _Header = __webpack_require__(1);

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Footer(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    'footer',
    null,
    (0, _hyperapp.h)(
      'div',
      { 'class': 'container' },
      (0, _hyperapp.h)(
        'nav',
        { 'class': 'menu' },
        (0, _hyperapp.h)(
          'a',
          { href: '#' },
          'Our Story'
        ),
        (0, _hyperapp.h)(
          'a',
          { href: '#' },
          'Reviews'
        ),
        (0, _hyperapp.h)(
          'a',
          { href: '#' },
          'Special Menu'
        ),
        (0, _hyperapp.h)(
          'a',
          { href: '#' },
          'Reservations'
        ),
        (0, _hyperapp.h)(
          'a',
          { href: '#' },
          'Contact Us'
        )
      ),
      (0, _hyperapp.h)(
        'ul',
        { 'class': 'social-media' },
        (0, _hyperapp.h)(
          'li',
          null,
          (0, _hyperapp.h)(
            'a',
            { href: 'http://facebook.com', target: 'new' },
            (0, _hyperapp.h)('i', { 'class': 'fa fa-facebook-official', 'aria-hidden': 'true' })
          )
        ),
        (0, _hyperapp.h)(
          'li',
          null,
          (0, _hyperapp.h)(
            'a',
            { href: 'http://twitter.com', target: 'new' },
            (0, _hyperapp.h)('i', { 'class': 'fa fa-twitter', 'aria-hidden': 'true' })
          )
        ),
        (0, _hyperapp.h)(
          'li',
          null,
          (0, _hyperapp.h)(
            'a',
            { href: 'http://google.com', target: 'new' },
            (0, _hyperapp.h)('i', { 'class': 'fa fa-google-plus', 'aria-hidden': 'true' })
          )
        ),
        (0, _hyperapp.h)(
          'li',
          null,
          (0, _hyperapp.h)(
            'a',
            { href: 'http://youtube.com', target: 'new' },
            (0, _hyperapp.h)('i', { 'class': 'fa fa-youtube-play', 'aria-hidden': 'true' })
          )
        )
      ),
      (0, _hyperapp.h)(
        'div',
        { 'class': 'copyright' },
        '\xA9 2019 Copyright'
      )
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = OurStory;

var _hyperapp = __webpack_require__(0);

var _Header = __webpack_require__(1);

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function OurStory(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    'section',
    { id: 'OurStory' },
    (0, _hyperapp.h)(
      'div',
      { 'class': 'container' },
      (0, _hyperapp.h)(
        'div',
        { 'class': 'row' },
        (0, _hyperapp.h)(
          'div',
          { 'class': 'col-md-6' },
          (0, _hyperapp.h)(
            'h5',
            { 'class': 'comp-title' },
            'Our Story'
          ),
          (0, _hyperapp.h)(
            'h2',
            null,
            'Cooking is the art of adjustment'
          ),
          (0, _hyperapp.h)(
            'p',
            null,
            'Tumblr tilde jianbing narwhal roof party enamel pin poke lyft cronut seitan la croix copper mug fam af pok pok. Cred lomo bespoke chambray waistcoat pok pok green juice before they sold out hammock trust fund XOXO jean shorts freegan you probably haven\'t heard of them wolf.intelligentsia.'
          ),
          (0, _hyperapp.h)(
            'div',
            { 'class': 'quote' },
            '"Best steak in your local restaurant" - ',
            (0, _hyperapp.h)(
              'strong',
              null,
              'Thomas Eggsy'
            )
          ),
          (0, _hyperapp.h)(
            'a',
            { href: '#', 'class': 'reserve-btn' },
            'Reserve'
          )
        ),
        (0, _hyperapp.h)(
          'div',
          { 'class': 'col-md-6' },
          (0, _hyperapp.h)('div', { 'class': 'video-img' })
        )
      )
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = RandomQuote;

var _hyperapp = __webpack_require__(0);

var _Header = __webpack_require__(1);

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function RandomQuote(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    'section',
    { id: 'RandomQuote', style: {
        backgroundImage: 'linear-gradient(135deg, rgba(0,0,0,.2) 0, #000 100%), url("http://www.coupondunia.in/blog/wp-content/uploads/2014/05/food-blogl-1050x590.jpg")'
      } },
    (0, _hyperapp.h)(
      'div',
      { 'class': 'container' },
      (0, _hyperapp.h)(
        'h1',
        null,
        '"Cooking is an art form, a creative thing."'
      ),
      (0, _hyperapp.h)(
        'span',
        { 'class': 'author' },
        '- Jhonny -'
      )
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Reviews;

var _hyperapp = __webpack_require__(0);

var _Header = __webpack_require__(1);

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Reviews(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  var currentReview = function currentReview() {
    return (0, _hyperapp.h)(
      'div',
      null,
      (0, _hyperapp.h)(
        'h5',
        { 'class': 'comp-title' },
        'REVIEWS'
      ),
      (0, _hyperapp.h)(
        'h2',
        null,
        state.reviewsData[state.reviewStatus.currentReview].company
      ),
      (0, _hyperapp.h)(
        'h4',
        null,
        '"',
        state.reviewsData[state.reviewStatus.currentReview].highlight,
        '"'
      ),
      (0, _hyperapp.h)(
        'p',
        null,
        state.reviewsData[state.reviewStatus.currentReview].review
      ),
      (0, _hyperapp.h)(
        'div',
        { 'class': 'author' },
        (0, _hyperapp.h)(
          'strong',
          null,
          state.reviewsData[state.reviewStatus.currentReview].author
        ),
        ' - ',
        (0, _hyperapp.h)(
          'em',
          null,
          state.reviewsData[state.reviewStatus.currentReview].authorInfo
        )
      )
    );
  };

  var leftClickBTN = function leftClickBTN() {
    if (state.reviewStatus.currentReview == 0) {
      console.log('do nothing');
    } else {
      actions.reviewLeftClicked();
    }
  };

  var rightClickBTN = function rightClickBTN() {
    if (state.reviewStatus.currentReview == state.reviewsData.length - 1) {
      console.log('do nothing');
    } else {
      actions.reviewRightClicked();
    }
  };

  return (0, _hyperapp.h)(
    'section',
    { id: 'Reviews' },
    (0, _hyperapp.h)(
      'div',
      { 'class': 'container' },
      (0, _hyperapp.h)(
        'div',
        { 'class': 'row' },
        (0, _hyperapp.h)(
          'div',
          { 'class': 'col-md-8' },
          (0, _hyperapp.h)(
            'div',
            { 'class': 'side-img' },
            (0, _hyperapp.h)('img', { src: 'https://img-aws.ehowcdn.com/600x600p/photos.demandstudios.com/getty/article/85/121/skd181312sdc.jpg' })
          )
        ),
        (0, _hyperapp.h)(
          'div',
          { 'class': 'col-md-4' },
          currentReview(),
          (0, _hyperapp.h)(
            'div',
            { 'class': 'arrows' },
            (0, _hyperapp.h)('i', { onclick: leftClickBTN, 'class': 'fa fa-arrow-left ' + (state.reviewStatus.currentReview > 0 ? 'ready' : ''), 'aria-hidden': 'true' }),
            (0, _hyperapp.h)('i', { onclick: rightClickBTN, 'class': 'fa fa-arrow-right ' + (state.reviewStatus.currentReview == state.reviewsData.length - 1 ? '' : 'ready'), 'aria-hidden': 'true' })
          )
        )
      )
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SpecialMenu;

var _hyperapp = __webpack_require__(0);

var _Header = __webpack_require__(1);

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function SpecialMenu(_ref) {
  var state = _ref.state,
      actions = _ref.actions;


  var loopMenu = function loopMenu() {
    return state.specialMenuData.map(function (item) {
      return (0, _hyperapp.h)(
        'div',
        { 'class': 'col-md-4' },
        (0, _hyperapp.h)(
          'div',
          { 'class': 'box' },
          (0, _hyperapp.h)(
            'div',
            { 'class': 'box-img' },
            (0, _hyperapp.h)(
              'div',
              { 'class': 'price-circle' },
              '$',
              item.price
            )
          ),
          (0, _hyperapp.h)(
            'span',
            { 'class': 'title' },
            item.title
          ),
          (0, _hyperapp.h)(
            'p',
            { 'class': 'details' },
            item.description
          )
        )
      );
    });
  };

  return (0, _hyperapp.h)(
    'section',
    { id: 'SpecialMenu', 'class': 'texturebg' },
    (0, _hyperapp.h)(
      'div',
      { 'class': 'container' },
      (0, _hyperapp.h)(
        'h5',
        { 'class': 'comp-title' },
        'Special Menu'
      ),
      (0, _hyperapp.h)(
        'h2',
        null,
        'Delicious Flavor of Autunm'
      ),
      (0, _hyperapp.h)(
        'div',
        { 'class': 'row boxes' },
        loopMenu()
      ),
      (0, _hyperapp.h)(
        'a',
        { href: '#', 'class': 'link' },
        'View Full Menu'
      )
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TopImg;

var _hyperapp = __webpack_require__(0);

var _Header = __webpack_require__(1);

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function TopImg(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  console.log(state.companyInfo.title);
  return (0, _hyperapp.h)(
    'section',
    { id: 'TopImg' },
    (0, _hyperapp.h)(
      'div',
      { 'class': 'container' },
      (0, _hyperapp.h)(
        'div',
        { 'class': 'title' },
        (0, _hyperapp.h)(
          'h5',
          null,
          'Welcome'
        ),
        (0, _hyperapp.h)(
          'h1',
          null,
          state.companyInfo.title
        )
      ),
      (0, _hyperapp.h)(
        'div',
        { 'class': 'contact-info' },
        (0, _hyperapp.h)(
          'div',
          { 'class': 'container' },
          (0, _hyperapp.h)(
            'div',
            { 'class': 'booking' },
            'Book Table Directly'
          ),
          (0, _hyperapp.h)(
            'h2',
            null,
            '(xxx) - xxx - xxxx'
          ),
          (0, _hyperapp.h)(
            'div',
            { 'class': 'hours' },
            'Opening Hours ',
            (0, _hyperapp.h)(
              'strong',
              null,
              'Mon - Frid: '
            ),
            ' 9am - 9pm',
            (0, _hyperapp.h)(
              'strong',
              null,
              'Weekend:'
            ),
            ' 9am - 11pm'
          )
        )
      )
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _hyperapp = __webpack_require__(0);

var _actions = __webpack_require__(2);

var _globalState = __webpack_require__(4);

var _App = __webpack_require__(3);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _hyperapp.app)({
  state: _globalState.globalState,
  view: function view(state, actions) {
    return (0, _hyperapp.h)(_App2.default, { state: state, actions: actions });
  },
  root: document.getElementById('app'),
  actions: _actions.actions,
  events: {
    action: function action(state, actions, _ref) {
      var name = _ref.name,
          data = _ref.data;

      console.group("Action Info");
      console.log("Name:", name);
      console.log("Data:", data);
      console.groupEnd();
    },
    load: function load(state, actions) {}
  }

});

/***/ })
],[12]);