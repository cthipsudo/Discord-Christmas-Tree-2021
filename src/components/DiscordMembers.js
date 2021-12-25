import { Carousel } from '@trendyol-js/react-carousel';
import members from '../data/memberdata';
import Shuffle from '../services/shuffle';

import RyuUsagi from '../images/discord/ryuusagi.webp'

function DiscordMembers() {
  let memberEl = members.map((member, index) => {
    //let srcKey = Object.values(member.pathName)[0];
    return(
      <div key={index} className='text-center'>
        <img src={require(`../images/discord/${member.pathName}`)} alt={member.nickname}></img>
        <p className='member-name'>{member.nickname}</p>
      </div>
    );
  }); 

  memberEl = Shuffle.shuffle(memberEl)

  return(
    <Carousel className='discord-members w-full' show={10} slide={8} swiping={true} responsive={true}>
      {memberEl}
    </Carousel>
  );
}

export default DiscordMembers;