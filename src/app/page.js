'use client'

import Image from 'next/image'
import html2pdf from 'html2pdf.js'

// PNG
import logo from '@/assets/logo.png'
import qrCodePng from '@/assets/qr.png'
import ArcPng from '@/assets/arc.png'
import IataPng from '@/assets/iata.png'

// Illustrations PNG
import ServicePageIllustration from '@/assets/illustrations/service-page-hero-illustration.png'
import InfoPageIllustration from '@/assets/illustrations/info-page-hero-illustration.png'
import TestimonialPageIllustration from '@/assets/illustrations/testimonial-page-hero-illustration.png'
import ItineraryPageIllustration from '@/assets/illustrations/itinerary-page-hero-illustration.png'
import OffersIllustrationPng from '@/assets/illustrations/offers-illustration.png'
import ContactIllustrationPng from '@/assets/illustrations/contact-illustration.png'

// Vectors
import WelcomeOnboardSvg from '@/assets/vector/WelcomeOnboard.svg'
import HomeHederDashedPath from '@/assets/vector/hero-path.svg'
import DotsPng from '@/assets/vector/dots.svg'

import TestimonialImage1 from '@/assets/testimonials/1.png'
import TestimonialImage2 from '@/assets/testimonials/2.png'
import TestimonialImage3 from '@/assets/testimonials/3.png'
import TestimonialImage4 from '@/assets/testimonials/4.png'
import TestimonialImage5 from '@/assets/testimonials/5.png'
import TestimonialImage6 from '@/assets/testimonials/6.png'

import HomeHeroPng1 from '@/assets/temp/home-hero-1.png'
import HomeHeroPng2 from '@/assets/temp/home-hero-2.png'
import HomeHeroPng3 from '@/assets/temp/home-hero-3.png'

export default function Home() {
  let opt = {
    margin: 0,
    filename: 'vacationum.pdf',
    image: { type: 'jpeg', quality: 1 },
    html2canvas: { scale: 4, useCORS: true, letterRendering: true },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'p' },
    pagebreak: { mode: ['css'] },
  }

  function generatePDF() {
    // Choose the element that your content will be rendered to.
    const element = document.getElementById('vacationum-pdf-container')
    if (!element) return alert('Something went wrong!')

    // Choose the element and save the PDF for your user.
    html2pdf().set(opt).from(element).save()
  }

  return (
    <div>
      {/* Download Button */}
      <button className="download-btn" onClick={generatePDF}>
        Download PDF
      </button>

      {/* Main PDF Container */}
      <main id="vacationum-pdf-container">
        {/* Home Page */}
        <div className="page home-page">
          {/* Home Page Header */}
          <header className="page-header">
            {/* Logo Container */}
            <div className="logo-wrapper">
              <Image src={logo} alt="" />
            </div>

            {/* Hero Section */}
            <section className="hero">
              <div className="hero-left">
                <h1 className="heading">
                  Discover your next <span>adventure</span> with us
                </h1>
                <Image src={WelcomeOnboardSvg} />
              </div>
              <div className="hero-right">
                <div className="images-container">
                  <div className="image-wrapper">
                    <Image src={HomeHeroPng1} alt="" />
                  </div>
                  <div className="image-wrapper">
                    <Image src={HomeHeroPng2} alt="" />
                  </div>
                  <div className="image-wrapper">
                    <Image src={HomeHeroPng3} alt="" />
                  </div>
                </div>
              </div>
            </section>

            <Image className="dashed-path" src={HomeHederDashedPath} alt="" />
          </header>

          {/* Home Page Body */}
          <section className="page-body">
            {/* Sub heading */}
            <div className="sub-heading">
              <svg
                className="dashed-circle"
                width="24"
                height="24"
                viewBox="0 0 67 67"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="33.5"
                  cy="33.5"
                  r="31"
                  stroke="#797878"
                  stroke-width="5"
                  stroke-dasharray="16 16"
                />
              </svg>
              <h3>
                <span>Vacantionum</span> offers you...
              </h3>

              <div className="bottom-dashed-line">
                <svg
                  width="131"
                  height="317"
                  viewBox="0 0 131 317"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.31878 0.815387L4.94135 123.975V123.975C6.56479 200.214 48.6452 269.826 115.396 306.695L130.008 314.766"
                    stroke="#797878"
                    stroke-width="4"
                    stroke-dasharray="25 25"
                  />
                </svg>
              </div>
            </div>

            {/* Offer Section */}
            <div className="offer-section">
              <div>
                <Image className="illustration" src={OffersIllustrationPng} alt="" />
              </div>
              <div className="offer-chip-container">
                <div className="offer-chip">
                  <p>Flight Bookings</p>
                  <span>
                    <svg
                      width="82"
                      height="82"
                      viewBox="0 0 82 82"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M76.6911 14.174L61.5313 29.3338L61.5711 29.4664L73.0835 71.8422C73.2806 72.7681 73.2566 73.7274 73.0135 74.6422C72.7704 75.5571 72.315 76.4018 71.6843 77.1077L67.8844 80.9076C67.6386 81.1945 67.3245 81.4149 66.9711 81.5484C66.6177 81.6819 66.2363 81.7241 65.8622 81.6713C65.4881 81.6184 65.1334 81.4721 64.8308 81.2459C64.5282 81.0197 64.2875 80.7209 64.1309 80.377L48.56 52.1928L43.6194 47.2457L30.5552 60.3099C29.0579 61.646 27.3844 62.7706 25.5815 63.6522L28.4994 73.2481C28.7208 74.1629 28.7164 75.1178 28.4865 76.0305C28.2566 76.9432 27.8081 77.7863 27.1797 78.487L26.0192 79.6542C25.4267 80.2422 24.6258 80.5722 23.791 80.5722C22.9562 80.5722 22.1553 80.2422 21.5628 79.6542L14.666 72.764L14.5466 72.6314L9.32091 67.4189L9.18828 67.2863L2.3047 60.3961C1.71669 59.8036 1.38672 59.0026 1.38672 58.1679C1.38672 57.3331 1.71669 56.5322 2.3047 55.9397L3.47186 54.7725C4.17383 54.1464 5.01747 53.7004 5.93012 53.4728C6.84277 53.2452 7.79706 53.2429 8.7108 53.4661L18.3067 56.3707C19.1891 54.5683 20.3136 52.895 21.649 51.397L34.7132 38.3328L29.7661 33.3989L1.58186 17.828C1.23803 17.6714 0.939212 17.4307 0.713006 17.1281C0.4868 16.8255 0.340503 16.4708 0.287629 16.0967C0.234755 15.7226 0.277009 15.3412 0.410489 14.9878C0.54397 14.6343 0.76437 14.3202 1.05133 14.0745L4.85122 10.2746C5.55741 9.64436 6.40209 9.18927 7.31686 8.94617C8.23164 8.70308 9.1908 8.67882 10.1167 8.87535L52.4925 20.3878L52.6251 20.4276L67.7849 5.26777C70.2386 2.80082 78.5347 -1.49644 81.0016 0.957241C83.4553 3.42419 79.1514 11.7137 76.6911 14.174Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                </div>
                <div className="offer-chip">
                  <p>Holiday Packages</p>
                  <span>
                    <svg
                      width="100"
                      height="84"
                      viewBox="0 0 100 84"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M83.1553 11.9047V81.5342L100 72.0906V2.46094L83.1553 11.9047Z"
                        fill="white"
                      />
                      <path
                        d="M20.8748 0.672852L7.92344 7.89453H79.966L92.8471 0.672852H20.8748Z"
                        fill="white"
                      />
                      <path
                        d="M49.1607 12.9521V27.7691C49.1607 29.1658 48.0283 30.298 46.6318 30.298H26.8863C25.4898 30.298 24.3574 29.1658 24.3574 27.7691V12.9521H0V83.3271H78.0977V12.9521H49.1607Z"
                        fill="white"
                      />
                      <path d="M44.1023 12.9512H29.415V25.2395H44.1023V12.9512Z" fill="white" />
                    </svg>
                  </span>
                </div>
                <div className="offer-chip">
                  <p>Hotel Bookings</p>
                  <span>
                    <svg
                      width="99"
                      height="99"
                      viewBox="0 0 99 99"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M70.125 78.375H78.375V45.375H53.625V78.375H61.875V53.625H70.125V78.375ZM12.375 78.375V16.5C12.375 15.406 12.8096 14.3568 13.5832 13.5832C14.3568 12.8096 15.406 12.375 16.5 12.375H74.25C75.344 12.375 76.3932 12.8096 77.1668 13.5832C77.9404 14.3568 78.375 15.406 78.375 16.5V37.125H86.625V78.375H90.75V86.625H8.25V78.375H12.375ZM28.875 45.375V53.625H37.125V45.375H28.875ZM28.875 61.875V70.125H37.125V61.875H28.875ZM28.875 28.875V37.125H37.125V28.875H28.875Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                </div>
                <div className="offer-chip">
                  <p>Cruise Bookings</p>
                  <span>
                    <svg
                      width="105"
                      height="87"
                      viewBox="0 0 105 87"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M101.039 45.8393H88.0936L82.9162 26.1571C82.4588 24.4189 80.8873 23.2071 79.0898 23.2071H52.3189V3.98099C52.3189 1.79588 50.5475 0.0244141 48.3624 0.0244141H32.9179C30.7328 0.0244141 28.9613 1.79588 28.9613 3.98099V23.2071H16.808C15.0107 23.2071 13.4392 24.4185 12.9814 26.1571L7.80384 45.8393H3.95842C1.39064 45.8393 -0.502644 48.2545 0.119152 50.7519L8.39324 83.9758C8.83231 85.7389 10.4157 86.9761 12.2325 86.9761H78.9752C80.3004 86.9761 81.5378 86.3125 82.271 85.2083L104.335 51.9844C106.077 49.3611 104.194 45.8393 101.039 45.8393ZM15.9858 45.8393L19.8581 31.1202C22.0242 31.1202 73.8755 31.1202 76.0397 31.1202L79.9118 45.8393H15.9858Z"
                        fill="white"
                      />
                      <path
                        d="M32.0906 34.5233H27.4021C25.217 34.5233 23.4456 36.2947 23.4456 38.4798C23.4456 40.665 25.217 42.4364 27.4021 42.4364H32.0906C34.2757 42.4364 36.0472 40.665 36.0472 38.4798C36.047 36.2947 34.2755 34.5233 32.0906 34.5233Z"
                        fill="white"
                      />
                      <path
                        d="M50.2932 34.5233H45.6047C43.4196 34.5233 41.6481 36.2947 41.6481 38.4798C41.6481 40.665 43.4196 42.4364 45.6047 42.4364H50.2932C52.4783 42.4364 54.2497 40.665 54.2497 38.4798C54.2497 36.2947 52.4783 34.5233 50.2932 34.5233Z"
                        fill="white"
                      />
                      <path
                        d="M68.4959 34.5233H63.8072C61.6221 34.5233 59.8506 36.2947 59.8506 38.4798C59.8506 40.665 61.6221 42.4364 63.8072 42.4364H68.4959C70.681 42.4364 72.4525 40.665 72.4525 38.4798C72.4525 36.2947 70.681 34.5233 68.4959 34.5233Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="contact-section">
              <div className="contact-details">
                <h3>Conatct Us</h3>
                <p>Ready to embark on your dream getaway? </p>
                <div className="contact-chip">
                  <p>+91 9871190075</p>
                  <span>
                    <svg
                      width="56"
                      height="56"
                      viewBox="0 0 56 56"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.4117 24.2692C15.8517 32.995 23.005 40.1175 31.7308 44.5883L38.5142 37.805C39.3467 36.9725 40.58 36.695 41.6592 37.065C45.1125 38.2058 48.8433 38.8225 52.6667 38.8225C54.3625 38.8225 55.75 40.21 55.75 41.9058V52.6667C55.75 54.3625 54.3625 55.75 52.6667 55.75C23.7142 55.75 0.25 32.2858 0.25 3.33333C0.25 1.6375 1.6375 0.25 3.33333 0.25H14.125C15.8208 0.25 17.2083 1.6375 17.2083 3.33333C17.2083 7.1875 17.825 10.8875 18.9658 14.3408C19.305 15.42 19.0583 16.6225 18.195 17.4858L11.4117 24.2692Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                </div>
                <div className="contact-chip">
                  <p>query@vacationum.com</p>
                  <span>
                    <svg
                      width="70"
                      height="36"
                      viewBox="0 0 70 36"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M31.5 35.5H17.5C12.6583 35.5 8.53067 33.7932 5.117 30.3795C1.70334 26.9658 -0.0023309 22.8393 2.39062e-06 18C2.34793e-06 13.1583 1.70684 9.03067 5.1205 5.617C8.53417 2.20334 12.6607 0.497669 17.5 0.500002L31.5 0.500002V7.5H17.5C14.5833 7.5 12.1042 8.52084 10.0625 10.5625C8.02084 12.6042 7 15.0833 7 18C7 20.9167 8.02084 23.3958 10.0625 25.4375C12.1042 27.4792 14.5833 28.5 17.5 28.5H31.5V35.5ZM21 21.5V14.5H49V21.5H21ZM38.5 35.5V28.5H52.5C55.4167 28.5 57.8958 27.4792 59.9375 25.4375C61.9792 23.3958 63 20.9167 63 18C63 15.0833 61.9792 12.6042 59.9375 10.5625C57.8958 8.52084 55.4167 7.5 52.5 7.5L38.5 7.5V0.500002L52.5 0.500002C57.3417 0.500002 61.4693 2.20684 64.883 5.6205C68.2967 9.03417 70.0023 13.1607 70 18C70 22.8417 68.2932 26.9693 64.8795 30.383C61.4658 33.7967 57.3393 35.5023 52.5 35.5H38.5Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                </div>
                <div className="contact-chip">
                  <p>www.vacationum.com</p>
                  <span>
                    <svg
                      width="68"
                      height="50"
                      viewBox="0 0 68 50"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M60.4103 0.333008L7.28205 0.333008C3.62948 0.333008 0.674226 3.10801 0.674227 6.49968L0.641022 43.4997C0.641022 46.8913 3.62948 49.6663 7.28205 49.6663H60.4103C64.0628 49.6663 67.0513 46.8913 67.0513 43.4997V6.49967C67.0513 3.10801 64.0628 0.333008 60.4103 0.333008ZM60.4103 12.6663L33.8462 28.083L7.28205 12.6663V6.49968L33.8462 21.9163L60.4103 6.49967V12.6663Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                </div>
              </div>

              <div>
                <Image className="illustration" src={ContactIllustrationPng} alt="" />
              </div>
            </div>
          </section>

          {/* Home Page Footer */}
          <footer className="page-footer">Welcome to Vacationum</footer>

          <div className="top-right-dots">
            <Image src={DotsPng} />
          </div>
        </div>

        {/* Service Page */}
        <div className="page service-page">
          {/* Service Page Header */}
          <header className="page-header">
            <div className="logo-wrapper">
              <Image src={logo} alt="" />
            </div>
            <section className="hero">
              <div className="hero-left">
                <h1 className="heading">
                  Our Services <span>and</span> Products
                </h1>
              </div>

              <div className="hero-right">
                <Image src={ServicePageIllustration} alt="" />
              </div>
            </section>
            <Image className="path" src={HomeHederDashedPath} alt="" />
          </header>

          {/* Service Page Body */}
          <section className="page-body">
            {/* Flights */}
            <div className="service-card">
              <h5>Flights</h5>
              <p>
                Our flight booking service is here to help you select the best and cost-effective
                options, if you wish to fly through the sky. We are working with the leading
                airlines to ensure a seamless booking experience, which will make it easier for you
                to reach your destination
              </p>
              <span>
                <svg
                  width="202"
                  height="192"
                  viewBox="0 0 202 192"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M177.396 163.847L166.619 176.298C157.103 187.292 142.84 192.979 128.369 191.55L125.292 191.245C111.189 189.852 97.3879 186.283 84.3775 180.667L36.8712 160.158C-0.736145 143.922 -11.253 95.5347 16.2223 65.1537L41.3711 37.3452C53.199 24.2664 67.6032 13.7743 83.6792 6.52756L85.8813 5.53489C99.0042 -0.380639 113.82 -1.36451 127.61 2.76389C137.332 5.67422 146.433 10.3525 154.457 16.564L163.412 23.4961C207.475 57.6042 213.863 121.715 177.396 163.847ZM120.531 81.3335L135.691 66.1737C138.152 63.7134 142.455 55.4239 140.002 52.957C137.535 50.5033 129.239 54.8006 126.785 57.2675L111.625 72.4273L111.493 72.3875L69.1168 60.8751C68.1909 60.6786 67.2318 60.7028 66.317 60.9459C65.4022 61.189 64.5576 61.6441 63.8514 62.2744L60.0515 66.0743C59.7645 66.32 59.5441 66.6341 59.4106 66.9875C59.2772 67.341 59.2349 67.7224 59.2878 68.0964C59.3406 68.4705 59.4869 68.8252 59.7132 69.1278C59.9394 69.4304 60.2382 69.6712 60.582 69.8277L88.7662 85.3987L93.7134 90.3326L80.6492 103.397C79.3137 104.895 78.1892 106.568 77.3068 108.37L67.7109 105.466C66.7972 105.243 65.8429 105.245 64.9303 105.473C64.0176 105.7 63.174 106.146 62.472 106.772L61.3048 107.939C60.7168 108.532 60.3869 109.333 60.3869 110.168C60.3869 111.002 60.7168 111.803 61.3048 112.396L68.3211 119.419L73.5467 124.631L73.6661 124.764L80.5629 131.654C81.1555 132.242 81.9564 132.572 82.7912 132.572C83.6259 132.572 84.4268 132.242 85.0194 131.654L86.1799 130.487C86.8083 129.786 87.2567 128.943 87.4866 128.03C87.7166 127.118 87.721 126.163 87.4996 125.248L84.5817 115.652C86.3845 114.77 88.058 113.646 89.5554 112.31L102.62 99.2454L107.56 104.193L123.131 132.377C123.288 132.721 123.528 133.019 123.831 133.246C124.134 133.472 124.488 133.618 124.862 133.671C125.236 133.724 125.618 133.682 125.971 133.548C126.325 133.415 126.639 133.194 126.885 132.907L130.684 129.107C131.315 128.402 131.771 127.557 132.014 126.642C132.257 125.727 132.281 124.768 132.084 123.842L120.571 81.4662L120.531 81.3335Z"
                    fill="#1296E1"
                  />
                </svg>
              </span>
            </div>

            {/* Holiday Package */}
            <div className="service-card">
              <h5>Holiday Package</h5>
              <p>
                The bottom of inside pages is setup for you to manually add page numbers, so it’s
                easy to adjust numbering for your printing preferences. The table of contents at
                left is also setup for manual editing, so you can easily update page numbers.
              </p>
              <span>
                <svg
                  width="202"
                  height="192"
                  viewBox="0 0 202 192"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M166.619 176.298L177.396 163.847C213.863 121.715 207.475 57.6042 163.412 23.4961L154.457 16.564C146.433 10.3525 137.332 5.67422 127.61 2.76389C113.82 -1.36451 99.0043 -0.380639 85.8813 5.53489L83.6792 6.52756C67.6032 13.7743 53.199 24.2664 41.3711 37.3452L16.2223 65.1537C-11.253 95.5347 -0.736149 143.922 36.8712 160.158L84.3775 180.667C97.3879 186.283 111.189 189.852 125.292 191.245L128.369 191.55C142.84 192.979 157.103 187.292 166.619 176.298Z"
                    fill="#1296E1"
                  />
                  <path
                    d="M139.155 62.9045V132.534L156 123.09V53.4608L139.155 62.9045Z"
                    fill="white"
                  />
                  <path
                    d="M76.8749 51.6727L63.9235 58.8944H135.966L148.847 51.6727H76.8749Z"
                    fill="white"
                  />
                  <path
                    d="M105.161 63.952V78.769C105.161 80.1657 104.028 81.2979 102.632 81.2979H82.8864C81.49 81.2979 80.3575 80.1657 80.3575 78.769V63.952H56.0001V134.327H134.098V63.952H105.161Z"
                    fill="white"
                  />
                  <path d="M100.102 63.951H85.4151V76.2393H100.102V63.951Z" fill="white" />
                </svg>
              </span>
            </div>

            {/* Hotels */}
            <div className="service-card">
              <h5>Hotels</h5>
              <p>
                When it comes to accommodation, we will select the best hotels and resorts that can
                offer you maximum comfort and luxury during your stay. Whether you're looking for a
                quiet hotel, elegant resort, or quaint country retreat, we have plenty of
                accommodations to suit your needs.
              </p>
              <span>
                <svg
                  width="202"
                  height="192"
                  viewBox="0 0 202 192"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M166.619 176.298L177.396 163.847C213.863 121.715 207.475 57.6047 163.412 23.4966L154.457 16.5645C146.433 10.353 137.332 5.67471 127.61 2.76438C113.82 -1.36402 99.0043 -0.380151 85.8813 5.53538L83.6792 6.52805C67.6032 13.7748 53.199 24.2669 41.3711 37.3457L16.2223 65.1542C-11.253 95.5352 -0.736149 143.923 36.8712 160.158L84.3775 180.667C97.3879 186.284 111.189 189.853 125.292 191.246L128.369 191.55C142.84 192.98 157.103 187.292 166.619 176.298Z"
                    fill="#1296E1"
                  />
                  <path
                    d="M123.125 124.375H131.375V91.3753H106.625V124.375H114.875V99.6253H123.125V124.375ZM65.3751 124.375V62.5003C65.3751 61.4063 65.8097 60.3571 66.5833 59.5835C67.3569 58.8099 68.4061 58.3753 69.5001 58.3753H127.25C128.344 58.3753 129.393 58.8099 130.167 59.5835C130.941 60.3571 131.375 61.4063 131.375 62.5003V83.1253H139.625V124.375H143.75V132.625H61.2501V124.375H65.3751ZM81.8751 91.3753V99.6253H90.1251V91.3753H81.8751ZM81.8751 107.875V116.125H90.1251V107.875H81.8751ZM81.8751 74.8753V83.1253H90.1251V74.8753H81.8751Z"
                    fill="white"
                  />
                </svg>
              </span>
            </div>

            {/* Cruise */}
            <div className="service-card">
              <h5>Cruise</h5>
              <p>
                Our cruise options are sure to fascinate the senses for those who seek a truly
                unique and memorable journey. You embark on spectacular ships, explore destinations
                and indulge in world class facilities. Our cruise packages make for an experience
                unlike anything else, from stunning ocean views to incredible onboard entertainment.
              </p>
              <span>
                <svg
                  width="202"
                  height="192"
                  viewBox="0 0 202 192"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M166.619 176.298L177.396 163.847C213.863 121.715 207.475 57.6047 163.412 23.4966L154.457 16.5645C146.433 10.353 137.332 5.67471 127.61 2.76438C113.82 -1.36402 99.0043 -0.380151 85.8813 5.53538L83.6792 6.52805C67.6032 13.7748 53.199 24.2669 41.3711 37.3457L16.2223 65.1542C-11.253 95.5352 -0.736149 143.923 36.8712 160.158L84.3775 180.667C97.3879 186.284 111.189 189.853 125.292 191.246L128.369 191.55C142.84 192.98 157.103 187.292 166.619 176.298Z"
                    fill="#1296E1"
                  />
                  <path
                    d="M154.039 94.8392H141.094L135.916 75.1571C135.459 73.4188 133.887 72.207 132.09 72.207H105.319V52.981C105.319 50.7958 103.548 49.0244 101.362 49.0244H85.918C83.7329 49.0244 81.9614 50.7958 81.9614 52.981V72.207H69.8081C68.0108 72.207 66.4393 73.4184 65.9816 75.1571L60.8039 94.8392H56.9585C54.3907 94.8392 52.4975 97.2545 53.1193 99.7519L61.3933 132.976C61.8324 134.739 63.4158 135.976 65.2326 135.976H131.975C133.3 135.976 134.538 135.312 135.271 134.208L157.335 100.984C159.077 98.3611 157.194 94.8392 154.039 94.8392ZM68.9859 94.8392L72.8582 80.1202C75.0243 80.1202 126.876 80.1202 129.04 80.1202L132.912 94.8392H68.9859Z"
                    fill="white"
                  />
                  <path
                    d="M85.0907 83.5232H80.4022C78.2171 83.5232 76.4457 85.2947 76.4457 87.4798C76.4457 89.6649 78.2171 91.4364 80.4022 91.4364H85.0907C87.2758 91.4364 89.0473 89.6649 89.0473 87.4798C89.0471 85.2947 87.2756 83.5232 85.0907 83.5232Z"
                    fill="white"
                  />
                  <path
                    d="M103.293 83.5232H98.6048C96.4197 83.5232 94.6482 85.2947 94.6482 87.4798C94.6482 89.6649 96.4197 91.4364 98.6048 91.4364H103.293C105.478 91.4364 107.25 89.6649 107.25 87.4798C107.25 85.2947 105.478 83.5232 103.293 83.5232Z"
                    fill="white"
                  />
                  <path
                    d="M121.496 83.5232H116.807C114.622 83.5232 112.851 85.2947 112.851 87.4798C112.851 89.6649 114.622 91.4364 116.807 91.4364H121.496C123.681 91.4364 125.453 89.6649 125.453 87.4798C125.453 85.2947 123.681 83.5232 121.496 83.5232Z"
                    fill="white"
                  />
                </svg>
              </span>
            </div>
          </section>

          {/* Service Page Footer */}
          <footer className="page-footer">
            <a target="_blank" href="tel:9871190075">
              Phone: 9871190075
            </a>
            <a target="_blank" href="mailto:query@vacationum.com">
              Email: query@vacationum.com
            </a>
            <a target="_blank" href="https://www.vacationum.com/">
              Web: www.vacationum.com
            </a>
          </footer>

          <div className="top-right-dots">
            <Image src={DotsPng} />
          </div>
        </div>

        {/* Itinerary Page */}
        <div className="page itinerary-page">
          {/* Itinerary Page header */}
          <header className="page-header">
            <div className="logo-wrapper">
              <Image src={logo} alt="" />
            </div>
            <section className="hero">
              <div className="hero-left">
                <h1 className="heading">
                  Day Wise <span>itinerary </span>
                </h1>
              </div>

              <div className="hero-right">
                <Image src={ItineraryPageIllustration} alt="" />
              </div>
              <Image className="path" src={HomeHederDashedPath} alt="" />
            </section>
          </header>

          {/* Itinerary Page Body */}
          <section className="page-body">
            <div className="itinerary-day-description">
              <h3>
                <div className="day-number">01</div>
                <span>Arrival at Cochin to Munnar (130 km – 4 hrs.)</span>
              </h3>
              <p>
                After arriving at Cochin airport, meet our representative who is waiting for you at
                the airport. He will drive towards Munnar. Leave by road for Munnar in the morning
                and enjoy a scenic drive to the most beautiful hill station in Kerala. You will be
                accompanied by the misty roads, the cloudy skies, and a number of dramatic
                waterfalls on your way. After arriving, check into the hotel. Munnar, situated
                almost 6,000ft above sea level, enchants visitors with its pleasant climate, lovely
                surroundings, and tea plantations, besides others, Enroute we’ll visit Valara,
                Cheeyappara waterfalls, and Tea Plantations.
              </p>
              <div className="image-wrapper">
                <img
                  src="https://s27363.pcdn.co/wp-content/uploads/2020/05/Travel-Quotes.jpg.optimal.jpg"
                  alt=""
                />
                <img
                  src="https://s27363.pcdn.co/wp-content/uploads/2020/05/Travel-Quotes.jpg.optimal.jpg"
                  alt=""
                />
                <img
                  src="https://s27363.pcdn.co/wp-content/uploads/2020/05/Travel-Quotes.jpg.optimal.jpg"
                  alt=""
                />
                <img
                  src="https://s27363.pcdn.co/wp-content/uploads/2020/05/Travel-Quotes.jpg.optimal.jpg"
                  alt=""
                />
              </div>
            </div>

            <div className="itinerary-day-description">
              <h3>
                <div className="day-number">02</div>
                <span>Arrival at Cochin to Munnar (130 km – 4 hrs.)</span>
              </h3>
              <p>
                After arriving at Cochin airport, meet our representative who is waiting for you at
                the airport. He will drive towards Munnar. Leave by road for Munnar in the morning
                and enjoy a scenic drive to the most beautiful hill station in Kerala. You will be
                accompanied by the misty roads, the cloudy skies, and a number of dramatic
                waterfalls on your way. After arriving, check into the hotel. Munnar, situated
                almost 6,000ft above sea level, enchants visitors with its pleasant climate, lovely
                surroundings, and tea plantations, besides others, Enroute we’ll visit Valara,
                Cheeyappara waterfalls, and Tea Plantations.
              </p>
              <div className="image-wrapper">
                <img
                  src="https://s27363.pcdn.co/wp-content/uploads/2020/05/Travel-Quotes.jpg.optimal.jpg"
                  alt=""
                />
                <img
                  src="https://s27363.pcdn.co/wp-content/uploads/2020/05/Travel-Quotes.jpg.optimal.jpg"
                  alt=""
                />
                <img
                  src="https://s27363.pcdn.co/wp-content/uploads/2020/05/Travel-Quotes.jpg.optimal.jpg"
                  alt=""
                />
                <img
                  src="https://s27363.pcdn.co/wp-content/uploads/2020/05/Travel-Quotes.jpg.optimal.jpg"
                  alt=""
                />
              </div>
            </div>
          </section>

          {/* Itinerary Page Footer */}
          <footer className="page-footer">
            <a target="_blank" href="tel:9871190075">
              Phone: 9871190075
            </a>
            <a target="_blank" href="mailto:query@vacationum.com">
              Email: query@vacationum.com
            </a>
            <a target="_blank" href="https://www.vacationum.com/">
              Web: www.vacationum.com
            </a>
          </footer>

          <div className="top-right-dots">
            <Image src={DotsPng} />
          </div>
        </div>

        {/* Itinerary Page 02 */}
        <div className="page itinerary-page">
          <header className="page-header">
            <div className="logo-wrapper">
              <Image src={logo} alt="" />
            </div>
          </header>

          <section className="page-body">
            <div className="itinerary-day-description">
              <h3>
                <div className="day-number">03</div>
                <span>Arrival at Cochin to Munnar (130 km – 4 hrs.)</span>
              </h3>
              <p>
                After arriving at Cochin airport, meet our representative who is waiting for you at
                the airport. He will drive towards Munnar. Leave by road for Munnar in the morning
                and enjoy a scenic drive to the most beautiful hill station in Kerala. You will be
                accompanied by the misty roads, the cloudy skies, and a number of dramatic
                waterfalls on your way. After arriving, check into the hotel. Munnar, situated
                almost 6,000ft above sea level, enchants visitors with its pleasant climate, lovely
                surroundings, and tea plantations, besides others, Enroute we’ll visit Valara,
                Cheeyappara waterfalls, and Tea Plantations.
              </p>
              <div className="image-wrapper">
                <img
                  src="https://s27363.pcdn.co/wp-content/uploads/2020/05/Travel-Quotes.jpg.optimal.jpg"
                  alt=""
                />
                <img
                  src="https://s27363.pcdn.co/wp-content/uploads/2020/05/Travel-Quotes.jpg.optimal.jpg"
                  alt=""
                />
                <img
                  src="https://s27363.pcdn.co/wp-content/uploads/2020/05/Travel-Quotes.jpg.optimal.jpg"
                  alt=""
                />
                <img
                  src="https://s27363.pcdn.co/wp-content/uploads/2020/05/Travel-Quotes.jpg.optimal.jpg"
                  alt=""
                />
              </div>
            </div>

            <div className="itinerary-day-description">
              <h3>
                <div className="day-number">04</div>
                <span>Arrival at Cochin to Munnar (130 km – 4 hrs.)</span>
              </h3>
              <p>
                After arriving at Cochin airport, meet our representative who is waiting for you at
                the airport. He will drive towards Munnar. Leave by road for Munnar in the morning
                and enjoy a scenic drive to the most beautiful hill station in Kerala. You will be
                accompanied by the misty roads, the cloudy skies, and a number of dramatic
                waterfalls on your way. After arriving, check into the hotel. Munnar, situated
                almost 6,000ft above sea level, enchants visitors with its pleasant climate, lovely
                surroundings, and tea plantations, besides others, Enroute we’ll visit Valara,
                Cheeyappara waterfalls, and Tea Plantations.
              </p>
              <div className="image-wrapper">
                <img
                  src="https://s27363.pcdn.co/wp-content/uploads/2020/05/Travel-Quotes.jpg.optimal.jpg"
                  alt=""
                />
                <img
                  src="https://s27363.pcdn.co/wp-content/uploads/2020/05/Travel-Quotes.jpg.optimal.jpg"
                  alt=""
                />
                <img
                  src="https://s27363.pcdn.co/wp-content/uploads/2020/05/Travel-Quotes.jpg.optimal.jpg"
                  alt=""
                />
                <img
                  src="https://s27363.pcdn.co/wp-content/uploads/2020/05/Travel-Quotes.jpg.optimal.jpg"
                  alt=""
                />
              </div>
            </div>

            <div className="itinerary-day-description">
              <h3>
                <div className="day-number">05</div>
                <span>Arrival at Cochin to Munnar (130 km – 4 hrs.)</span>
              </h3>
              <p>
                After arriving at Cochin airport, meet our representative who is waiting for you at
                the airport. He will drive towards Munnar. Leave by road for Munnar in the morning
                and enjoy a scenic drive to the most beautiful hill station in Kerala. You will be
                accompanied by the misty roads, the cloudy skies, and a number of dramatic
                waterfalls on your way. After arriving, check into the hotel. Munnar, situated
                almost 6,000ft above sea level, enchants visitors with its pleasant climate, lovely
                surroundings, and tea plantations, besides others, Enroute we’ll visit Valara,
                Cheeyappara waterfalls, and Tea Plantations.
              </p>
              <div className="image-wrapper">
                <img
                  src="https://s27363.pcdn.co/wp-content/uploads/2020/05/Travel-Quotes.jpg.optimal.jpg"
                  alt=""
                />
                <img
                  src="https://s27363.pcdn.co/wp-content/uploads/2020/05/Travel-Quotes.jpg.optimal.jpg"
                  alt=""
                />
                <img
                  src="https://s27363.pcdn.co/wp-content/uploads/2020/05/Travel-Quotes.jpg.optimal.jpg"
                  alt=""
                />
                <img
                  src="https://s27363.pcdn.co/wp-content/uploads/2020/05/Travel-Quotes.jpg.optimal.jpg"
                  alt=""
                />
              </div>
            </div>
          </section>

          <footer className="page-footer">
            <a target="_blank" href="tel:9871190075">
              Phone: 9871190075
            </a>
            <a target="_blank" href="mailto:query@vacationum.com">
              Email: query@vacationum.com
            </a>
            <a target="_blank" href="https://www.vacationum.com/">
              Web: www.vacationum.com
            </a>
          </footer>

          <div className="top-right-dots">
            <Image src={DotsPng} />
          </div>
        </div>

        {/* Information Page */}
        <div className="page info-page">
          {/* Information Page Header */}
          <header className="page-header">
            <div className="logo-wrapper">
              <Image src={logo} alt="" />
            </div>
            <section className="hero">
              <div className="hero-left">
                <h1 className="heading">
                  Hotel & other <span>Information</span>
                </h1>
              </div>

              <div className="hero-right">
                <Image src={InfoPageIllustration} alt="" />
              </div>
            </section>
          </header>

          {/* Information Page Body */}
          <section className="page-body">
            {/* Passenger Details */}
            <div className="section">
              <h5>Lead Passenger Name:</h5>
              <p>- Mrs Vartika Tyagi</p>

              <svg
                className="section-dot"
                width="30"
                height="30"
                viewBox="0 0 68 68"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="33.9355"
                  cy="33.853"
                  r="31"
                  stroke="#797878"
                  stroke-width="5"
                  stroke-dasharray="16 16"
                />
                <circle cx="34.4355" cy="34.353" r="10" fill="#E46F44" />
              </svg>
            </div>

            {/* Hotel Information Table */}
            <div className="section">
              <h5>Hotel Information:</h5>

              <table>
                <tr>
                  <td>Hotel Name</td>
                  <td>RADISSON BLU POSTE LAFAYETTE RESORT & SPA MAURITIUS</td>
                </tr>
                <tr>
                  <td>Date</td>
                  <td>02-AUG-2023</td>
                </tr>
                <tr>
                  <td>Type of Room</td>
                  <td>Standard Mountain View</td>
                </tr>
                <tr>
                  <td>Place</td>
                  <td>Mauritius</td>
                </tr>
                <tr>
                  <td>Rooms</td>
                  <td>01</td>
                </tr>
                <tr>
                  <td>Nights</td>
                  <td>04</td>
                </tr>
                <tr>
                  <td>Extra Mattress</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>Meal Plan</td>
                  <td>HALFBOARD</td>
                </tr>
              </table>

              <svg
                className="section-dot"
                width="30"
                height="30"
                viewBox="0 0 68 68"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="33.9355"
                  cy="33.853"
                  r="31"
                  stroke="#797878"
                  stroke-width="5"
                  stroke-dasharray="16 16"
                />
                <circle cx="34.4355" cy="34.353" r="10" fill="#E46F44" />
              </svg>
            </div>

            {/* Cost Information Table */}
            <div className="section">
              <h5>Cost Information:</h5>

              <table>
                <tr>
                  <td>Package Cost</td>
                  <td>₹76,190.48</td>
                </tr>
                <tr>
                  <td>Taxable Amount</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>Social Media Discount</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>GST</td>
                  <td>5%</td>
                </tr>
                <tr>
                  <td>Total Tax</td>
                  <td>3,809.52</td>
                </tr>
                <tr>
                  <td>Final Payable Amount</td>
                  <td>₹80,000/-</td>
                </tr>
              </table>
              <p className="info">
                <b>Note:</b> In order to avail the Social Media Discount, please follow us on
                Instagram and Facebook and share the screenshot.
              </p>

              <svg
                className="section-dot"
                width="30"
                height="30"
                viewBox="0 0 68 68"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="33.9355"
                  cy="33.853"
                  r="31"
                  stroke="#797878"
                  stroke-width="5"
                  stroke-dasharray="16 16"
                />
                <circle cx="34.4355" cy="34.353" r="10" fill="#E46F44" />
              </svg>
            </div>
          </section>

          {/* Information Page Footer */}
          <footer className="page-footer">
            <a target="_blank" href="tel:9871190075">
              Phone: 9871190075
            </a>
            <a target="_blank" href="mailto:query@vacationum.com">
              Email: query@vacationum.com
            </a>
            <a target="_blank" href="https://www.vacationum.com/">
              Web: www.vacationum.com
            </a>
          </footer>

          <div className="top-right-dots">
            <Image src={DotsPng} />
          </div>
        </div>

        {/* Information Page 02 */}
        <div className="page info-page other-info">
          <header className="page-header">
            <div className="logo-wrapper">
              <Image src={logo} alt="" />
            </div>
          </header>

          <section className="page-body">
            {/* Cost Breakage Table */}
            <div className="section">
              <h5>Cost Breakage:</h5>

              <table>
                <tr>
                  <td>Number of PAX</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>Tour Cost Per Person</td>
                  <td>₹40,000/-</td>
                </tr>
              </table>

              <svg
                className="section-dot"
                width="30"
                height="30"
                viewBox="0 0 68 68"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="33.9355"
                  cy="33.853"
                  r="31"
                  stroke="#797878"
                  stroke-width="5"
                  stroke-dasharray="16 16"
                />
                <circle cx="34.4355" cy="34.353" r="10" fill="#E46F44" />
              </svg>
            </div>

            {/* Inclusions  */}
            <div className="section">
              <h5>Inclusions :</h5>
              <ul>
                <li>Welcome drink on arrival (Nonalcoholic)</li>
                <li>4 nights’ accommodation based on route.</li>
                <li>One free lunch offered upon arrival or departure</li>
                <li>Meal plan (Breakfast & Dinner) as per itinerary.</li>
                <li>Service Pack ( On seat in coach basis )</li>
                <li>Full Day Ile Aux Cerf Tour with speed boat transfer</li>
                <li>Full Day North Tour on SIC basis.</li>
                <li>Full Day South Tour on SIC basis.</li>
                <li>All Airport transfers.</li>
                <li>Entire sightseeing on SIC basis.</li>
                <li>Government taxes/VAT/GST/driver charges.</li>
                <li>5 % GST</li>
              </ul>
              <svg
                className="section-dot"
                width="30"
                height="30"
                viewBox="0 0 68 68"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="33.9355"
                  cy="33.853"
                  r="31"
                  stroke="#797878"
                  stroke-width="5"
                  stroke-dasharray="16 16"
                />
                <circle cx="34.4355" cy="34.353" r="10" fill="#E46F44" />
              </svg>
            </div>

            {/* Exclusions  */}
            <div className="section">
              <h5>Exclusions :</h5>
              <ul>
                <li>Any other expenses or service not mentioned in inclusions</li>
                <li>All sorts of adventure activity costs.</li>
                <li>Room heater laundry, room service, tips etc.</li>
                <li>Cost due to upgrading /changing hotels, Room type, luxury cars etc.</li>
                <li>Any additional transportation which is not mentioned in the itinerary.</li>
              </ul>
              <svg
                className="section-dot"
                width="30"
                height="30"
                viewBox="0 0 68 68"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="33.9355"
                  cy="33.853"
                  r="31"
                  stroke="#797878"
                  stroke-width="5"
                  stroke-dasharray="16 16"
                />
                <circle cx="34.4355" cy="34.353" r="10" fill="#E46F44" />
              </svg>
            </div>

            {/* Terms & Conditions */}
            <div className="section">
              <h5>Terms & Conditions :</h5>
              <p>
                An extension/deviation of stay at the end of the tour of travel arrangement is
                permitted subject to maximum validity and restrictions of the air ticket, seat
                confirmation, and availability of accommodation prior to the commencement of the
                tour. The extra cost incurred to process the extension will be borne by the
                customer. It is the customer’s responsibility to hold a confirmed seat for the
                return flight. When extension/deviation requested cannot be confirmed 3 weeks prior
                to group departure, the customer is deemed to return on the original flight/tour
                schedule booked and no cancellation of tour is allowed. Extensions/deviations of
                stay will be Customer’s own expense and transfer to and from airport will not be
                provided. For Tours on chartered flight, no extension/deviation will be permitted.
                In case of flight cancellation or schedule changes, Vacationum Trip plannersis not
                liable for any losses or wastage of time.
              </p>
              <svg
                className="section-dot"
                width="30"
                height="30"
                viewBox="0 0 68 68"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="33.9355"
                  cy="33.853"
                  r="31"
                  stroke="#797878"
                  stroke-width="5"
                  stroke-dasharray="16 16"
                />
                <circle cx="34.4355" cy="34.353" r="10" fill="#E46F44" />
              </svg>
            </div>
          </section>

          <footer className="page-footer">
            <a target="_blank" href="tel:9871190075">
              Phone: 9871190075
            </a>
            <a target="_blank" href="mailto:query@vacationum.com">
              Email: query@vacationum.com
            </a>
            <a target="_blank" href="https://www.vacationum.com/">
              Web: www.vacationum.com
            </a>
          </footer>
        </div>

        {/* Information Page 03 */}
        <div className="page info-page other-info">
          <header className="page-header">
            <div className="logo-wrapper">
              <Image src={logo} alt="" />
            </div>
          </header>

          <section className="page-body">
            {/* Payment Information Table */}
            <div className="section">
              <h5>Payment Information:</h5>

              <table className="payment-info-table">
                <tr>
                  <td>Account Holder Name</td>
                  <td>Vacationum Trip Planners Private Limited</td>
                </tr>
                <tr>
                  <td>Account Number</td>
                  <td>695505601494</td>
                </tr>
                <tr>
                  <td>Account Type</td>
                  <td>Current Account</td>
                </tr>
                <tr>
                  <td>Bank</td>
                  <td>ICICI</td>
                </tr>
                <tr>
                  <td>Address</td>
                  <td>C 6, Lohia Nagar, Ghaziabad 201001, Uttar Pradesh</td>
                </tr>
                <tr>
                  <td>IFSC Code</td>
                  <td>ICIC0006955</td>
                </tr>
                <tr>
                  <td>UPI ID</td>
                  <td>vacationumtripplanerspltd@icici</td>
                </tr>
              </table>

              <svg
                className="section-dot"
                width="30"
                height="30"
                viewBox="0 0 68 68"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="33.9355"
                  cy="33.853"
                  r="31"
                  stroke="#797878"
                  stroke-width="5"
                  stroke-dasharray="16 16"
                />
                <circle cx="34.4355" cy="34.353" r="10" fill="#E46F44" />
              </svg>
            </div>

            {/* Scan and Pay  */}
            <div className="section">
              <h5>Scan and Pay :</h5>
              <Image src={qrCodePng} alt="" />
            </div>

            {/* Note  */}
            <div className="section">
              <h5>Note :</h5>
              <ul>
                <li>
                  For payment made through bank transfer, please give us at least 30 minutes so we
                  can confirm payment with the bank.
                </li>
                <li>
                  For UPI transactions, please share the screenshot of the payment for instant
                  confirmation.
                </li>
                <li>For any questions regarding alternate payment methods, please contact us.</li>
              </ul>
            </div>
          </section>

          <footer className="page-footer">
            <a target="_blank" href="tel:9871190075">
              Phone: 9871190075
            </a>
            <a target="_blank" href="mailto:query@vacationum.com">
              Email: query@vacationum.com
            </a>
            <a target="_blank" href="https://www.vacationum.com/">
              Web: www.vacationum.com
            </a>
          </footer>
        </div>

        {/* Testimonial Page */}
        <div className="page testimonial-page">
          {/* Testimonial Page Header */}
          <header className="page-header">
            <div className="logo-wrapper">
              <Image src={logo} alt="" />
            </div>
            <section className="hero">
              <div className="hero-left">
                <h1 className="heading">
                  Why <span>Choose</span> Vacationum
                </h1>
              </div>

              <div className="hero-right">
                <Image src={TestimonialPageIllustration} alt="" />
              </div>
            </section>
          </header>

          {/* Testimonial Page Body */}
          <section className="page-body">
            {/* Why Choose Us Text */}
            <div>
              <p>
                Choose Vacationum for unparalleled convenience, savings, and a seamless travel
                experience. We provide the best deals on hotels, flights, cruises, and packages,
                tailored to your preferences. With our dedicated team's personalized
                recommendations, your journey becomes an unforgettable adventure.
              </p>
              <p className="highlight">Vacationum: Where travel dreams come true.</p>
            </div>

            {/* Testimonials Images */}
            <h4 className="sub-heading">
              <svg
                className="section-dot"
                width="30"
                height="30"
                viewBox="0 0 68 68"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="33.9355"
                  cy="33.853"
                  r="31"
                  stroke="#797878"
                  stroke-width="5"
                  stroke-dasharray="16 16"
                />
                <circle cx="34.4355" cy="34.353" r="10" fill="#E46F44" />
              </svg>
              <span>Some testimonials of our happy customers.☺️</span>
            </h4>
            <div className="image-container">
              <Image src={TestimonialImage1} />
              <Image src={TestimonialImage2} />
              <Image src={TestimonialImage3} />
              <Image src={TestimonialImage4} />
              <Image src={TestimonialImage5} />
              <Image src={TestimonialImage6} />
            </div>

            {/* Certifications Images */}
            <div className="certifications">
              <Image src={IataPng} alt="" />
              <Image src={ArcPng} alt="" />
            </div>
          </section>

          {/* Testimonial Page Footer*/}
          <footer className="page-footer">
            <a target="_blank" href="tel:9871190075">
              Phone: 9871190075
            </a>
            <a target="_blank" href="mailto:query@vacationum.com">
              Email: query@vacationum.com
            </a>
            <a target="_blank" href="https://www.vacationum.com/">
              Web: www.vacationum.com
            </a>
          </footer>

          <div className="top-right-dots">
            <Image src={DotsPng} />
          </div>
        </div>
      </main>
    </div>
  )
}
