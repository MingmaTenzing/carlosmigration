import { ImageResponse } from '@vercel/og';
import { supabase } from '../../../../../components/supabase/supabaseclient';
 
export const config = {
  runtime: 'edge',
};
type Props = {
    params: { articleTitle: string; articleID: string };
  };
 
export default async function ({params}: Props) {
    const { data, error } = await supabase
    .from("Blogs")
    .select("*")
    .eq("id", params.articleID);

    
   
        return new ImageResponse(
            <div
        style={{
          fontSize: 128,
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          textAlign: 'center',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img src={data![0].article_img!} alt={data![0].title!} />
     
      </div>
      , {
        width: 1200,
        height: 600,
      },
        )
    }
