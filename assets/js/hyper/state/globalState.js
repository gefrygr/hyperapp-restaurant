var companyInfo = {
  title: 'PRIME STEAK RESTAURANT',
  phone: '(718) - 219 - 8652',
  location: 'Los Angeles, California',
}

var specialMenuData = [
  {
    title: 'Super BBQ Grill No Smoke',
    description: 'Fried eggs, Steak, baked potato or french fries, side of vegetables',
    price: 25
  },
  {
    title: 'Chicken Fingers',
    description: 'Fried eggs, Steak, baked potato or french fries, side of vegetables',
    price: 15
  },
  {
    title: 'All American Hamburger',
    description: 'Fried eggs, Steak, baked potato or french fries, side of vegetables',
    price: 10
  }
]

var reviewsData = [
  {
    company: 'The Food Networks',
    author: 'Joe Bastiachi',
    authorInfo: 'Winner Master Chef 2018',
    highlight: 'Best Restaurant in the L.A area!',
    review: "Tumblr tilde jianbing narwhal roof party enamel pin poke lyft cronut seitan la croix copper mug fam af pok pok. Cred lomo bespoke chambray waistcoat pok pok green juice before they sold out hammock trust fund XOXO jean shorts freegan you probably haven't heard of them wolf.intelligentsia.",
  },
  {
    company: 'HBO',
    author: 'Joe Bastiachi',
    authorInfo: 'Winner Master Chef 2018',
    highlight: 'Best Restaurant in the L.A area!',
    review: "Tumblr tilde jianbing narwhal roof party enamel pin poke lyft cronut seitan la croix copper mug fam af pok pok. Cred lomo bespoke chambray waistcoat pok pok green juice before they sold out hammock trust fund XOXO jean shorts freegan you probably haven't heard of them wolf.intelligentsia.",
  },
  {
    company: 'CWB',
    author: 'Joe Bastiachi',
    authorInfo: 'Winner Master Chef 2018',
    highlight: 'Best Restaurant in the L.A area!',
    review: "Tumblr tilde jianbing narwhal roof party enamel pin poke lyft cronut seitan la croix copper mug fam af pok pok. Cred lomo bespoke chambray waistcoat pok pok green juice before they sold out hammock trust fund XOXO jean shorts freegan you probably haven't heard of them wolf.intelligentsia.",
  },
  {
    company: 'NBC',
    author: 'Joe Bastiachi',
    authorInfo: 'Winner Master Chef 2018',
    highlight: 'Best Restaurant in the L.A area!',
    review: "Tumblr tilde jianbing narwhal roof party enamel pin poke lyft cronut seitan la croix copper mug fam af pok pok. Cred lomo bespoke chambray waistcoat pok pok green juice before they sold out hammock trust fund XOXO jean shorts freegan you probably haven't heard of them wolf.intelligentsia.",
  },
  {
    company: 'The New Times',
    author: 'Joe Bastiachi',
    authorInfo: 'Winner Master Chef 2018',
    highlight: 'Best Restaurant in the L.A area!',
    review: "Tumblr tilde jianbing narwhal roof party enamel pin poke lyft cronut seitan la croix copper mug fam af pok pok. Cred lomo bespoke chambray waistcoat pok pok green juice before they sold out hammock trust fund XOXO jean shorts freegan you probably haven't heard of them wolf.intelligentsia.",
  }
]

var randomQuoteData = [
  {
    author: 'Johnny',
    quote: 'Cooking Is An Art Form, A Creative Thing.'
  },
  {
    author: 'Lisa',
    quote: 'If cooking becomes an art form rather than a means of providing a reasonable diet, then something is clearly wrong.'
  },
  {
    author: 'David',
    quote: 'The greatest dishes are very simple.'
  },
]

export const globalState = {
  count: 0,
  companyInfo,
  specialMenuData,
  reviewsData,
  randomQuoteData,
  reviewStatus: {
    currentReview: 0,
  }
}
