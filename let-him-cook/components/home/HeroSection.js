import React from 'react';
import Image from 'next/image';
import classes from './HeroSection.module.scss';
import Text from '../text/Text';
import ButtonWithLink from '../button/Button';
import Meals from '../../pages/meals';

function HeroSection() {
  return (
    <section className={classes.hero__section}>
      <div className={classes.hero__container}>
        <Meals />
      </div>
    </section>
  );
}

export default HeroSection;
