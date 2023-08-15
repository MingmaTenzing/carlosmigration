import { YouTubeEmbed } from "react-social-media-embed";

function Youtube( video_link: string ) {
  return (<YouTubeEmbed height={300} url={video_link!} width={320} />);
}
export default Youtube;
