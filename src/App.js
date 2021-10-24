import './App.scss';

function App() {

  const Header = ({ children }) =>
    <div className='header'>
      <div className='container'>
        {children}
      </div>
    </div>

  const HeaderTop = ({ logo, children }) =>
    <div className='header__top'>
      <a className='logo' href='index.html'>
        <img src={logo} alt='logo' />
      </a>
      {children}
    </div>

  const Menu = ({ children }) =>
    <ul className='menu__list'>
      {children}
    </ul>

  const MenuItem = ({ link, title }) =>
    <li className='menu__item'>
      <a className='menu__link' href={link}>{title}</a>
    </li>

  const Address = ({ phone, address }) =>
    <address className='address'>
      <a className='address__phone' href={`'tel:${phone}'`}>{phone}</a>
      <p className='address__text'>{address}</p>
    </address >

  const HeaderContent = ({ children }) =>
    <div className='header__content'>
      {children}
    </div>

  const HeaderContentTop = ({ subtitle, title, text }) =>
    <div className='header__content-top'>
      <span className='header__subtitle'>{subtitle}</span>
      <h1 className='header__title'>{title}</h1>
      <span className='header__subtitle'>{text}</span>
    </div>

  const HeaderContentInner = ({ children }) =>
    <div className='header__content-inner'>
      {children}
    </div>

  const HeaderContentItem = ({ title, text }) =>
    <div className='header__content-item'>
      <div className='header__item-title'>{title}</div>
      <div className='header__item-text'>{text}</div>
    </div>

  const About = ({ children }) =>
    <div className='about container'>
      {children}
    </div >

  const AboutInner = ({ image, children }) =>
    <div className='about__inner'>
      <img src={image} alt='about image' />
      {children}
    </div>

  const AboutContent = ({ title, children }) =>
    <div className='about__content'>
      <h2 className='about__title title'>{title}</h2>
      {children}
    </div>

  const AboutText = ({ text }) =>
    <p className='about__text'>
      {text}
    </p>

  const AbouSubtitleText = ({ subtitle, children }) =>
    <p className='about__text'>
      <strong>{subtitle}  </strong>
      <ul>
        {children}
      </ul>
    </p>

  const AbouTextlist = ({ text }) => <li>{text}</li>

  const Price = ({ children }) =>
    <div className='price container'>
      <div className='price__inner'>
        {children}
      </div>
    </div >

  const PriceBooking = ({ text }) =>
    <div className='price__booking'>
      <p className='price__booking-text'>
        {text}
      </p>
      <a className='price__booking-box' href='#'>
        <div className='price__booking-link'>Онлайн запись</div>
      </a>
    </div>

  const PriceContent = ({ title, children }) =>
    <div className='price__content'>
      <h2 className='price__title title'>
        {title}
      </h2>
      <div className='price__content-inner'>
        {children}
      </div>
    </div>

  const PriceContentText = ({ text, number }) =>
    <p className='price__text-box'>
      <span className='price__text'>
        {text}
      </span>
      <strong>{number}</strong>
    </p>

  const Team = ({ title, children }) =>
    <div className='team'>
      <div className=' container'>
        <h2 className='team__title title'>
          {title}
        </h2>
        <div className='team__inner'>
          {children}
        </div>
      </div >
    </div>

  const TeamPerson = ({ name, image, text }) =>
    <div className='team__inner'>
      <div className='team__item _anim-items _anim-no-hide'>
        <p className='team__name'>
          {name}
        </p>
        <div className='team__item-box'>
          <img src={image} alt='photo img' />
        </div>
        <p className='team__text'>
          {text}
        </p>
      </div>
    </div>

  const Gallery = ({ title, children }) =>
    <div className='gallery'>
      <div className='container'>
        <h2 className=' gallery__title title'>
          {title}
        </h2>
        <div className='gallery__inner'>
          {children}
        </div>
      </div>
    </div>

  const GalleryImage = ({ image }) =>
    <img src={image} alt='gallery image' />

  const Footer = ({ children, text }) =>
    <div className='footer'>
      <div className='container'>
        <div className='footer__inner'>
          <a className='logo' href='#'>
            <img src='http://chicago-barbershop.mykulenko.com.ua/images/logo.svg' alt='logo image' />
          </a>
          {children}
        </div>
        <div class="footer__bottom">
          <p class="footer__bottom-text">
            {text}
          </p>
        </div>
      </div>
    </div>

  const FooterItem = ({ subtitle, children }) =>
    <div className='footer__item-box'>
      <div className='footer__subtitle'>
        {subtitle}
      </div>
      <ul className='footer__list'>
        {children}
      </ul>
    </div >

  const FooterListItem = ({ link, text }) =>
    <li className='footer__item'>
      <a className='footer__link' href={link}>
        {text}
      </a>
    </li>

  return (
    <div className='App'>
      <Header>
        <HeaderTop logo={'http://chicago-barbershop.mykulenko.com.ua/images/logo.svg'}>
          <Menu>
            <MenuItem link={'index.html'} title={'BarberShop Chicago'} />
            <MenuItem link={'sevices.html'} title={'Цены и бонусы'} />
            <MenuItem link={'team.html'} title={'Команда'} />
            <MenuItem link={'gallery.html'} title={'Галерея'} />
            <MenuItem link={'contact.html'} title={'Контакты'} />
          </Menu>
          <Address phone={'+380930014789'} address={'ул. Цементная, 8, Харьков'} />
        </HeaderTop>
        <HeaderContent>
          <HeaderContentTop subtitle={'LEGENDARY BARBERSHOP'} title={'CHICAGO'} text={'KHARKOV'} />
          <HeaderContentInner>
            <HeaderContentItem title={'CASHBACK'} text={'Возвращаем до 30% на следующие посещения'} />
            <HeaderContentItem title={'ЗАБОТА'} text={'Бесплатная коррекция окантовки в течение 10 дней'} />
            <HeaderContentItem title={'Уверенность'} text={'Опыт мастеров от 3х лет'} />
            <HeaderContentItem title={'Комфорт'} text={'FREE BAR, Безналичный расчет'} />
          </HeaderContentInner>
        </HeaderContent>
      </Header>

      <About>
        <AboutInner image={'http://chicago-barbershop.mykulenko.com.ua/images/about.jpg'}>
          <AboutContent title={'барбершоп chicago'}>
            <AboutText text={'Философия нашего барбершопа строится не только на сохранении, но и на создании традиций. Мы считаем, что легендарными становятся и Вы можете присоединиться к этой концепции!'} />
            <AboutText text={'Модные прически, мужские стрижки усов, бороды или бритьё опасной бритвой в Санкт-Петербурге – это именно то, чем мы занимаемся. Мы уверены, что бреем и стрижем лучше всех. Даже не обсуждается!'} />
            <AbouSubtitleText subtitle={'Мы знаем, что земля круглая, а дважды два четыре, но мы уверены в том, что:'}>
              <AbouTextlist text={'Мы побреем или пострижем тебя на высшем уровне!'} />
              <AbouTextlist text={' Мы обязательно угостим тебя чаем, кофе или более "горячими" напитками - решать тебе.'} />
              <AbouTextlist text={'Когда ты уйдешь, то захочешь вернуться.'} />
            </AbouSubtitleText>
          </AboutContent>
        </AboutInner>
      </About >

      <Price>
        <PriceBooking text={' Для всех наших гостей мы предоставляем бесплатную коррекцию окантовки в течение 10 дней после стрижки.'} />
        <PriceContent title={' Прайс на мужские стрижки'}>
          <PriceContentText text={'CASHBACK с каждой услуги'} number={'5%'} />
          <PriceContentText text={'CASHBACK с каждого друга*'} number={'1%'} />
          <PriceContentText text={'СТРИЖКА МАШИНКОЙ'} number={'700'} />
          <PriceContentText text={'СТРИЖКА УСОВ И БОРОДЫ'} number={'900'} />
          <PriceContentText text={'СТРИЖКА'} number={'1500'} />
          <PriceContentText text={'БРИТЬЕ'} number={'1300'} />
          <PriceContentText text={'СТРИЖКА + БОРОДА'} number={'1900'} />
          <PriceContentText text={'ДЕТСКАЯ СТРИЖКА (с 7 до 11 лет)'} number={'900'} />
        </PriceContent>
      </Price>

      <Team title={'Наша Команда'}>
        <TeamPerson
          name={'Барбер Анатолий'}
          image={'http://chicago-barbershop.mykulenko.com.ua/images/team/1.jpg'}
          text={'Старший барбер, сооснователь "Chicago Barbershop". Приверженец классических стрижек "старой школы". Считает,что стрижка должна подчеркивать внутреннее состояние.'} />
        <TeamPerson
          name={'Barber Мурат'}
          image={'http://chicago-barbershop.mykulenko.com.ua/images/team/2.jpg'}
          text={'Он же профессор, он же барбер и просто неплохой парень. Душой и сердцем отдаётся искусству цирюльника. Барбер - его карма.'} />
        <TeamPerson
          name={'Barber Крис'}
          image={'http://chicago-barbershop.mykulenko.com.ua/images/team/3.jpg'}
          text={'Ответственно и умело подходит к выбору и оформлению стрижки. Стричь для нее- это не только работа, но и реализация творческого потенциала.'} />
        <TeamPerson
          name={'Barber Владимир'}
          image={'http://chicago-barbershop.mykulenko.com.ua/images/team/4.jpg'}
          text={'Ответственно и умело подходит к выбору и оформлению стрижки.'} />
        <TeamPerson
          name={'Подготовка команды'}
          image={'http://chicago-barbershop.mykulenko.com.ua/images/team/5.jpg'}
          text={'Все мастера проходят внутреннее обучение, прежде чем приступить к работе, вне зависимости от их прошлого опыта.'} />
      </Team>

      <Gallery title={'Наши работы'}>
        <GalleryImage image={'http://chicago-barbershop.mykulenko.com.ua/images/gallery/1.jpg'} />
        <GalleryImage image={'http://chicago-barbershop.mykulenko.com.ua/images/gallery/2.jpg'} />
        <GalleryImage image={'http://chicago-barbershop.mykulenko.com.ua/images/gallery/3.jpg'} />
        <GalleryImage image={'http://chicago-barbershop.mykulenko.com.ua/images/gallery/4.jpg'} />
        <GalleryImage image={'http://chicago-barbershop.mykulenko.com.ua/images/gallery/5.jpg'} />
        <GalleryImage image={'http://chicago-barbershop.mykulenko.com.ua/images/gallery/6.jpg'} />
        <GalleryImage image={'http://chicago-barbershop.mykulenko.com.ua/images/gallery/7.jpg'} />
        <GalleryImage image={'http://chicago-barbershop.mykulenko.com.ua/images/gallery/8.jpg'} />
        <GalleryImage image={'http://chicago-barbershop.mykulenko.com.ua/images/gallery/9.jpg'} />
        <GalleryImage image={'http://chicago-barbershop.mykulenko.com.ua/images/gallery/10.jpg'} />
        <GalleryImage image={'http://chicago-barbershop.mykulenko.com.ua/images/gallery/11.jpg'} />
        <GalleryImage image={'http://chicago-barbershop.mykulenko.com.ua/images/gallery/12.jpg'} />
      </Gallery>
      
      <Footer text={' © 2021 «CHICAGO» BARBERSHOP.'}>
        <FooterItem subtitle={'Наши услуги'}>
          <FooterListItem link={'#'} text={'Стрижка с укладкой'} />
          <FooterListItem link={'#'} text={'Детская стрижка'} />
          <FooterListItem link={'#'} text={'Стрижка машинкой'} />
          <FooterListItem link={'#'} text={'Стрижка усов и бороды'} />
          <FooterListItem link={'#'} text={'Бритьё опасной бритвой'} />
          <FooterListItem link={'#'} text={'Моделирование бороды'} />
          <FooterListItem link={'#'} text={'Комплексные услуги'} />
        </FooterItem>
        <FooterItem subtitle={'Для посетителей'}>
          <FooterListItem link={'#'} text={'Выбираем бороду'} />
          <FooterListItem link={'#'} text={'Выбираем стрижку'} />
          <FooterListItem link={'#'} text={'Интересно о бороде'} />
          <FooterListItem link={'#'} text={'Любителям бриться'} />
        </FooterItem>
      </Footer>
    </div >
  );
}

export default App;
