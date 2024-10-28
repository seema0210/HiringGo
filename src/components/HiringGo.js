import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";
import { FiMenu } from "react-icons/fi";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaStar } from 'react-icons/fa';
import { FaStarHalfAlt } from 'react-icons/fa';
import home_Img from '../images/home_page.png'
import vector from '../images/Vector.png'
import safety from '../images/safety.png'
import bodyType from '../images/body_Type.png'
import transmission from '../images/transmission.png'
import seating from '../images/seating_capacity.png'
import fuel from '../images/fuel_type.png'
import carRightSide from '../images/car_rightside.png'
import carFront from '../images/car_front.png'
import carBack from '../images/with_back.png'
import expert from '../images/expert.png'
import whiteImg from '../images/white_car.png'
import blackImg from '../images/black_img.png'
import eclipse from '../images/Ellipse.png'
import red from '../images/red.png'
import add1 from '../images/add1.png'
import add2 from '../images/add2.png'
import add3 from '../images/add3.png'



const HiringGo = () => {

  const data = [
    {
      type: 'Diesel',
      transmission: 'Manual',
      aiar: '15.0 kmpl',
      city: '17.0 kmpl'
    },
    {
      type: 'Diesel',
      transmission: 'Manual',
      aiar: '15.0 kmpl',
      city: '17.0 kmpl'
    },
    {
      type: 'Petrol',
      transmission: 'Manual',
      aiar: '17.19 kmpl',
      city: '16.57 kmpl'
    },
    {
      type: 'Petrol',
      transmission: 'Automatic',
      aiar: '11.0 kmpl',
      city: '13.0 kmpl'
    },
  ]


  return (
    <div>
      <div className='menu-bar'>
        <div className='menu'>
          <FiMenu />
        </div>
        <div className='search-bar'>

          <p><IoSearchOutline />&nbsp;&nbsp;</p>
          <FaArrowRight />
        </div>
      </div>

      <nav>
        <ul>
          <li className='constant'>Overview</li>
          <li>Compare <span><IoMdArrowDropdown /></span></li>
          <li>Images</li>
          <li>User Reviews</li>
          <li>Varients</li>
          <li>Videos</li>
          <li>More</li>
        </ul>
      </nav>

      <div className='home'>
        <h1>XUV 700</h1>
        <img src={carFront} alt='no img' />
        <p>With its Sci-Fi Technology, Spirited Performance and World-Class Safety, this powerhouse of an SUV is obsessively engineered to dial up adrenaline like never before.</p>
      </div>

      <div className='car-info'>
        <div className='info'>
          <h1>Mahindra</h1>
          <h2>XUV 700</h2>
          <FaStar color="#FFAC30" size='30px' />
          <FaStar color="#FFAC30" size='30px' />
          <FaStar color="#FFAC30" size='30px' />
          <FaStar color="#FFAC30" size='30px' />
          <FaStarHalfAlt color="#FFAC30" size='30px' /> <span className='icon'>108 Reviews</span>
          <p>Rs.13.18 - 24.58 Lakh</p>
        </div>
        <div>
          <div className='car_part'>
            <div>
              <img src={vector} alt="no img" />
              <p className='name'>Engine</p>
              <p>1997 to 2184 cc</p>
            </div>
            <div className=''>
              <img src={safety} alt="no img" />
              <p className='name'>Safety</p>
              <p>5 Star (Global NCAP)</p>
            </div>
            <div>
              <img src={bodyType} alt="no img" />
              <p className='name'>Body Type </p>
              <p>SUV</p>
            </div>
          </div>
          <div className='car_part'>
            <div>
              <img src={transmission} alt="no img" />
              <p className='name'>Transmission</p>
              <p>Manual & Automatic (TC)</p>
            </div>
            <div>
              <img src={seating} alt="no img" />
              <p className='name'>Seating Capacity </p>
              <p>5 & 7 Seater</p>
            </div>
            <div>
              <img src={fuel} alt="no img" />
              <p className='name'>Fuel Type </p>
              <p>Petrol & Diesel</p>
            </div>
          </div>
        </div>
      </div>

      <div className='theory'>
        <div>
          <img src={carRightSide} alt="no img" />
        </div>
        <p>The Mahindra XUV700 has 1 Diesel Engine and 1 Petrol Engine on offer. The Diesel engine is 2198 cc while the Petrol engine is 1999 cc . It is available with Automatic & Manual transmission. Depending upon the variant and fuel type the XUV700 has a mileage of . The XUV700 is a 7 seater 4 cylinder car and has length of 4695, width of 1890 and a wheelbase of 2750.</p>
        <button className='btn'>Check Current Offers</button>
      </div>

      <div className='back_img'>
        <div className='back_info'>
          <h1>Mahindra XUV700 Price</h1>
          <p>The price of Mahindra XUV700 starts at Rs. 13.18 Lakh and goes upto Rs. 24.58 Lakh. Mahindra XUV700 is offered in 23 variants - the base model of XUV700 is MX and the top variant Mahindra XUV700 AX7 Diesel AT Luxury Pack AWD which comes at a price tag of Rs. 24.58 Lakh.</p>
        </div>
        <div>
          <img src={carBack} alt="no img" />
        </div>
      </div>

      <nav className='navbar'>
        <ul>
          <li className='constant'>All Varient</li>
          <li>Diesel Version</li>
          <li>Petrol Version</li>
          <li>Automatic Version</li>
        </ul>
        <div className='car_detail'>
          <p className='varient'>Varient</p>
          <p className='price'>Price</p>
        </div>
        <div className='price_info'>
          <div className='p_info'>
            <h2>XUV700 MX</h2>
            <p>1999 cc, Manual, Petrol</p>
            <p>More than 2 months waiting</p>
          </div>
          <div className='p_info'>
            <h2>Rs.13.18 Lakh*</h2>
            <p className='price_col'>Get On Road Price*</p>
          </div>
          <div className='p_info'>
            <button className='btns'>View Offers</button>
          </div>
        </div>
        <div className='price_info'>
          <div className='p_info'>
            <h2>XUV700 MX Diesel</h2>
            <p>2198 cc, Manual, Diesel</p>
            <p>More than 2 months waiting</p>
          </div>
          <div className='p_info'>
            <h2>Rs.13.70 Lakh*</h2>
            <p className='price_col'> Get On Road Price*</p>
          </div>
          <div className='p_info'>
            <button className='btns'>View Offers</button>
          </div>
        </div>
        <div className='price_info'>
          <div className='p_info'>
            <h2>XUV700 AX3</h2>
            <p>1999 cc, Manual, Petrol</p>
            <p>More than 2 months waiting</p>
          </div>
          <div className='p_info'>
            <h2>Rs.15.28 Lakh*</h2>
            <p className='price_col'>Get On Road Price</p>
          </div>
          <div className='p_info'>
            <button className='btns'>View Offers</button>
          </div>
        </div>
        <button className='btn_viewMore'>View More <IoMdArrowDropdown /></button>
      </nav>

      <div className='table'>
        <h1>Mahindra <br />XUV700 Mileage</h1>
        <p>The claimed ARAI mileage: <br />
          The claimed ARAI mileage for the automatic variants: </p>

        <table>
          <thead>
            <tr>
              <th>Fuel Type</th>
              <th>Transmission</th>
              <th>ARAI Mileage</th>
              <th>City Mileage</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((val, i) => (
                <tr>
                  <td>{val.type}</td>
                  <td>{val.transmission}</td>
                  <td>{val.aiar}</td>
                  <td>{val.city}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>

      <div className='expert'>
        <div className='expert_car'>
          <div className='exp'>
            <p className='first'>Here’s some </p>
            <h1>Expert Advice!</h1>
            <p>With so many segment-first features, drivetrains, seating and variant options, the XUV700 is trying to please everyone. But does it get the basics right to first get into your consideration?</p>
          </div>
          <div>
            <img src={expert} alt="no img" />
          </div>
        </div>
        <div className='expert_nav'>
          <nav>
            <ul>
              <li className='constant_color'>Exterior <span><IoMdArrowDropdown /></span></li>
              <li className='left_br'>Interior</li>
              <li className='left_br'>Performance</li>
              <li className='left_br'>Verdict</li>
            </ul>
          </nav>
        </div>
        <p className='exp_p'>While the platform is all-new, Mahindra has decided to retain the essence of the XUV500 in the 700’s design. Paying homage to the 500 are the new headlamps where the “C” shape is maintained by the LED DRLs. However, these pack an all-LED beam and the indicators are dynamic as well. Complementing these are more LEDs in the fog lamps, which also feature cornering lights. The headlamps flow in the slats of the grille which features an aggressive design. The bonnet too gets strong creases which adds muscle to the front look for the 700. Safe to say, you won't be confusing the XUV700 with anything on the road when you see one at night.</p>
        <div className='white_car'>
          <img src={whiteImg} alt="no img" />
        </div>
        <button className='btn_white'>View More <IoMdArrowDropdown /></button>
      </div>

      <div className='black_img'>
        <img src={blackImg} alt="no img" />
        <div>
          <h1>Pros <span className='and'>and</span> Cons</h1>
          <h2>Take on Mahindra XUV700</h2>
          <p>If you are in the market looking for any kind of SUV for your family, the XUV700 first gets all the basics right and then impress you with its segment-first features</p>
        </div>
      </div>

      <div>
        <hr />
        <div className='amazing'>
          <h2>Absolutely Amazing</h2>
          <ul>
            <li>Road presence - Sheer size with a commanding stance and loads of visual appeal</li>
            <li>Airy cabin - More spacious than the Alcazar and almost as roomy as the Safari</li>
            <li>Capable powertrains - The powertrain options effortlessly power the bulky XUV700</li>
            <li>Unique feel-good features - It offers a range of feel-good features missing from rivals</li>
          </ul>
        </div>
        <hr />
        <div className='amazing'>
          <h2 className='next'>Could have been Better</h2>
          <ul>
            <li>Not the quietest diesel - There's some drivetrain lash when using the throttle</li>
            <li>Firm ride quality - It’s only at slow speeds that the ride can get bothersome</li>
            <li>Last row ingress/egress - The absence of a sliding second row makes it even worse</li>
          </ul>
        </div>
      </div>

      <div className='mahindra'>
        <div className='info'>
          <h1>Mahindra XUV700</h1>
          <h2>User Review</h2>
          <FaStar color="#FFAC30" size='40px' />
          <FaStar color="#FFAC30" size='40px' />
          <FaStar color="#FFAC30" size='40px' />
          <FaStar color="#FFAC30" size='40px' />
          <FaStarHalfAlt color="#FFAC30" size='40px' /> <span className='icon'><span className='num'>4.5</span><span className='col'> From our 108 users </span></span>
          <div className='filter'>
            <p>Write your Reviews</p>
            <button>Filter<IoMdArrowDropdown /></button>
          </div>
        </div>
      </div>

      <div className='view_more'>
        <div className='maps'>

        {
          [1, 2, 3].map((i) => (
            <div className='map'>
              <FaStar color="#FFAC30" size='20px' />
              <FaStar color="#FFAC30" size='20px' />
              <FaStar color="#FFAC30" size='20px' />
              <FaStar color="#FFAC30" size='20px' />
              <FaStar color="#FFAC30" size='20px' />
              <p>It is a fantastic car with good mileage, features, looks, performance, and build quality are the best.</p>
              <p className='add'>By Mahendrakumar Baviskar <br />On: Aug 18, 2022 | 193 Views</p>
            </div>
          ))
        }
        </div>
        <button>View More<IoMdArrowDropdown /></button>
      </div>

      <div className='red'>
        <div className='red_car'>
          <h1>Mahindra XUV700 </h1>
          <h2>Related Videos </h2>
          <div className='pouse'>
            <img src={eclipse} alt="no img" />
            <p>Mahindra XUV700 2022 has videos of its detailed review, pros & cons, comparison & variant explained,test drive experience, features, specs, interior & exterior details and more. Watch our Latest Hindi video of Mahindra XUV700 to know price, safety features & more.</p>
          </div>
        </div>
        <img src={red} alt="no img" />
      </div>

      <div className='news'>
        <img src={add1} alt="no img" />
        <img src={add2} alt="no img" />
        <img src={add3} alt="no img" />
      </div>

    </div>
  )
}

export default HiringGo