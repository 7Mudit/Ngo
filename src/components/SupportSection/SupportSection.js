import React from 'react'
import './SupportSection.css'
import {IoIosArrowForward} from 'react-icons/io'

const SupportSection = () => {
  return (
    <div className='supportSection'>
        <div className='supportSection-left'>
            <h3>Stay Connected</h3>
            <p>Join our email list to get the latest SADS related news and updates delivered to your inbox.
            </p>
            <a href='/'>Subscribe to our Email List <IoIosArrowForward className='icon-arrow-support'/></a>
        </div>
        <div className='supportSection-right'>
            <h3>Show Your Support</h3>
            <p>Your support — no matter the size — powers life-saving research and medical education, patient advocacy, and awareness for SADS conditions.</p>
            <p>There are many ways to support our community, including becoming a sustainer as a monthly donor, making a one-time gift, hosting an online or in-person fundraiser, donating to one of our honorary funds, or with your own creative idea!</p>
            <p>Learn more about how you can save lives and strengthen our community through the various ways to give.</p>
            <button>Donate</button>
        </div>
    </div>
  )
}

export default SupportSection