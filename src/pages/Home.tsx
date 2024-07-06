import ReferralModal from '../components/ReferralModal'
import ContactExpertBar from '../components/ContactExpertBar'
import Navbar from '../components/Navbar'
import Navmenu from '../components/Navmenu'
import ReferralProcess from '../components/ReferralProcess'
import ReferralBenefits from '../components/ReferralBenefits'
import ReferNowButton from '../components/ReferNowButton'
import FAQ from '../components/FAQ'
import GetInTouchCard from '../components/GetInTouchCard'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <ReferralModal />
      <ContactExpertBar />
      <Navbar />
      <Navmenu />
      <img
        src='/refer-earn-banner.png'
        className='mx-auto rounded-3xl shadow-banner'
      />
      <ReferralProcess />
      <ReferralBenefits />
      <div className='flex mx-auto justify-center items-center'>
        <ReferNowButton />
      </div>
      <div className='flex  justify-center items-center '>
        <FAQ />
      </div>
      <div className='w-[100%] h-[100%] my-20'>
        <GetInTouchCard />
      </div>
      <div className=''>
        <Footer />
      </div>
    </>
  )
}

export default Home
