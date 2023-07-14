import { Metadata } from 'next'
import HeroBackground from '../../../utilities/HeroBackground';
import img from "../../../assests/blogbg.jpg"
import { supabase } from '../page';
import { useEffect } from 'react';
type Props = {}





function Blog({}: Props) {

 
  return (
    <div>
      <HeroBackground bg={img} title='Blog' subTitle="All the immigration news and information in one place" />
      
      <div>
        
      </div>
    </div>
  )
}
export default Blog;