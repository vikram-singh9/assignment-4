import React from 'react'
import Cards from './Components/Cards'
const page = () => {
  return (
    <>
    <Cards name="Haris Bhukhari" roll={83773} distance="No" city="Karachi" center = "Governor House Karachi" campus="Main" day="Monday 2 to 5" />
    <Cards name="Bilal Ahmed" roll={93847} distance="No" city="Hyderabad" center = "Governor House Karachi" campus="Main" day="Sunday 2 to 5" />
    <Cards name="Danish Hussain" roll={284949} distance="No" city="Sukkur" center = "Governor House Karachi" campus="Main" day="Tuesday 2 to 5" />
    </>
  )
}

export default page