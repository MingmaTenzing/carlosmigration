import { Metadata } from 'next'
import HeroBackground from '../../../utilities/HeroBackground';
import img from "../../../assests/blogbg.jpg"
import { supabase } from '../page';
type Props = {}
export const metadata:Metadata = {
  title: "Blog",
  description: "All the news and information regarding Australian immigration and visa in one place"
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