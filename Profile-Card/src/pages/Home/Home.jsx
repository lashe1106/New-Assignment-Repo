import Card from '../../components/Card/Card'
import '../../components/Card/Card.css'
import './Home.css'
import Profile1 from '../../assets/webp/1.webp'
import Profile2 from '../../assets/webp/2.webp'
import Profile3 from '../../assets/webp/3.webp'
import Profile4 from '../../assets/webp/4.webp'
import Profile5 from '../../assets/webp/5.webp'
import Profile6 from '../../assets/webp/6.webp'
import Profile7 from '../../assets/webp/7.webp'
import Profile8 from '../../assets/webp/8.webp'
import Profile9 from '../../assets/webp/9.webp'
import Profile10 from '../../assets/webp/10.webp'
import Profile11 from '../../assets/webp/11.webp'
import Profile12 from '../../assets/webp/12.webp'
function Home() {
  return (
    <div className='home-card'>
      <Card profileImage= {Profile1} name= 'Aba Mary' age= '24' location= 'Lagos, Nigeria' />
      <Card profileImage={Profile2} name= 'Bello Nancy' age= '22' location= 'Kwara, Nigeria' />
      <Card profileImage={Profile3} name='Ciel Ope' age='27' location='Ogun, Nigeria' />
      <Card profileImage={Profile4} name='Dame Peace' age='21' location='Kogi, Nigeria' />
      <Card profileImage={Profile5} name='Efiong Quincy' age='23' location='Rivers, Nigeria' />
      <Card profileImage={Profile6} name='Favour Rinke' age='25' location='Osun, Nigeria' />
      <Card profileImage={Profile7} name='Geffery Susan' age='24' location='Lagos, Nigeria' />
      <Card profileImage={Profile8} name='Hillary Adetayo' age='24' location='Lagos, Nigeria' />
      <Card profileImage={Profile9} name='Lanre Mercy' age='22' location='Oyo, Nigeria' />
      <Card profileImage={Profile10} name='Mohammed Aisha' age='28' location='Lagos, Nigeria' />
      <Card profileImage={Profile11} name='Arin Faith' age='21' location='Abuja, Nigeria' />
      <Card profileImage={Profile12} name='Wisdom Aderonke' age='25' location='Ogun, Nigeria' />
    </div>
  )
}

export default Home
