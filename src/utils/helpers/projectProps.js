import YongaMobileUrl from '../../assets/images/Yonga_mobile.png'
import YongaDesktopUrl from '../../assets/images/Yonga_desktop.png'
import TmnyDesktopUrl from '../../assets/images/Tmny_desktop.png'
import TmnyMobileUrl from '../../assets/images/Tmny_mobile.png'

const yongaProps = {
  title: 'Yonga',
  heading: 'Eccommerce MERN app',
  imgURL: {
    mobile: YongaMobileUrl,
    desktop: YongaDesktopUrl
  },
  links: {
    repository: 'https://github.com/gerardsegismundo/yonga',
    demo: 'https://yonga.herokuapp.com/'
  },
  features: [
    'Cookie-based authentication with refresh and access token. (CSRF and JWT based app)',
    'Register with confirmation email.',
    'Forget and Reset password.',
    'Google and Facebook login',
    'Upload photo with cloudinary API',
    'Resize and crop image upload',
    'Rating system',
    'Commenting System (Nested CRUD)',
    'User dashboard with edit profile and orders',
    'Full featured shopping cart',
    'Checkout process (shipping, payment method, etc)',
    'PayPal / credit card integration',
    'Database seeder and more!'
  ]
}

const tmnyProps = {
  title: 'TMNY',
  heading: 'BLOGS MERN WEB APP',
  imgURL: {
    mobile: TmnyMobileUrl,
    desktop: TmnyDesktopUrl
  },
  links: {
    repository: 'https://github.com/gerardsegismundo/themomnurseyogi',
    demo: 'https://themomnurseyogi.herokuapp.com/'
  },
  features: [
    'Firebase Authentication - Google and Facebook login',
    'Commenting on posts (nested CRUD)',
    'Like and dislike posts',
    'Bootstrap Responsive Design',
    'and more!'
  ]
}

export { yongaProps, tmnyProps }
