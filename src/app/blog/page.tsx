import { Metadata } from 'next'
import HeroBackground from '../../../utilities/HeroBackground';
import img from "../../../assests/blogbg.jpg"
import { useEffect } from 'react';
type Props = {}

interface Blog {
  title: string | null;
  para: string[] | null;
  id: string | null;
  created_at: string | null;
  author: string | null;
  article_img: string | null;
}




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