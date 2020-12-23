import React from 'react'

const today = new Date();
let today_mm = today.getMonth() + 1;
let today_yy = today.getFullYear() % 100;

if (today_mm < 10) {
  today_mm = 0 + today_mm
}

let mm = expirationDate.substring(0, 2);
let yy = expirationDate.substring(3);

if (yy > today_yy || (yy == today_yy && mm >= today_mm)) {
  return true;
} else {
  let errorMessage = 'The expiration date has passed. Check your card.'
  return false;
}

const Card = () => {
  return (
    
  )
}

export default Card
