import React from 'react';
import Image from 'next/image';
import styles from './Footer.module.scss';
import Logo from '../../images/logo.jpg';
import Text from '../text/Text';

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.row}>
        <div className={styles.column}>
          <div className={styles.logo}>
            <Image src={Logo} alt="My Website Logo" />
            {/* <Text>My Website là cái gì z</Text> */}
          </div>
          <div className={styles.information} style={{ paddingRight: '0px', paddingLeft: '50px' }}>
            <h3>About Us</h3>
            <p>We are a website that provide</p>
            <p>a place where you can search for</p>
            <p>the best meal and reciept you want</p>
          </div>
        </div>
        <div className={styles.column}>
          <div className={styles.information}>
            <h3>Opening restaurant</h3>
            <p>Sat-Wet: 09:00am-10:00PM</p>
            <p>Thursdayt: 09:00am-11:00PM</p>
            <p>Friday: 09:00am-8:00PM</p>
            {/* <Text>Product 4</Text> */}
          </div>
        </div>
        <div className={styles.column}>
          <div className={styles.information} style={{ paddingLeft: '30px' }}>
            <h3>User links</h3>
            <p>About us</p>
            <p>Contact us</p>
            <p>Order delivery</p>
            <p>Payment & Tax</p>
          </div>
        </div>
        <div className={styles.column}>
          <div className={styles.information}>
            <h3>Contact Us</h3>
            <Text>
              Email:
              {' '}
              <a href="mailto:contact@mywebsite.com">contact@mywebsite.com</a>
            </Text>
            <Text>
              Phone:
              {' '}
              <a href="tel:+15555555555">+1 555 555 5555</a>
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
