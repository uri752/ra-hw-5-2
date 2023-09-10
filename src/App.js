import './App.css';
import Title from './components/Title/Title';
import News from './components/News/News';
import Rates from './components/Rates/Rates';
import FindRow from './components/FindRow/FindRow';
import Baner from './components/Baner/Baner';
import Cards from './components/Cards/Cards';

function App() {

  const news = [
    {
      icon: "https://w7.pngwing.com/pngs/563/359/png-transparent-mobile-phones-computer-icons-telephone-phone-icon-text-phone-icon-logo.png" ,
      title: "Текст новости 1",
      link: "#"
    }, 
    {
      icon: "https://w7.pngwing.com/pngs/563/359/png-transparent-mobile-phones-computer-icons-telephone-phone-icon-text-phone-icon-logo.png" ,
      title: "Текст новости 2",
      link: "#"
    },
    {
      icon: "https://w7.pngwing.com/pngs/563/359/png-transparent-mobile-phones-computer-icons-telephone-phone-icon-text-phone-icon-logo.png" ,
      title: "Текст новости 3",
      link: "#"
    }

  ];

  const rates = [
    {
      name: "USD MOEX" ,
      price: 60,
      deviation: 0.1
    }, 
    {
      name: "EUR MOEX" ,
      price: 70,
      deviation: 0.1
    }, {
      name: "Нефть" ,
      price: 80,
      deviation: 0.1
    }, 

  ];
  
  const cards = [   
    {
      title: "Погода",
      link: "#"
    },
    {
      title: "Посещаемое",
      link: "#"
    }, 
    {      
      title: "Карта Германии",
      link: "#"
    },
    {     
      title: "Телепрограмма",
      link: "#"
    },
    {     
      title: "Эфир",
      link: "#"
    }

  ];

  return (
   <div className="container">      
      <Title> 
        <ul className='list'>
          <li>Сейчас в СМИ</li>
          <li>в Германии</li>
          <li>Рекомендуем</li>
        </ul>
      </Title>
      
      <News news={news}/>
      <Rates rates={rates}/>
      <FindRow/>
      <Baner/>
      <Cards cards={cards}/>                          
   </div>
  );
}

export default App;
