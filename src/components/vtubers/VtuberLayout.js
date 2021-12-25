import '../../styles/vtuber-styles.css'

import Gura from '../../images/vtuber/gura.gif'
import Brosemi from '../../images/vtuber/brosemi.png'
import Elira from '../../images/vtuber/elira.png'
import Finana from '../../images/vtuber/finana.png'
import Millie from '../../images/vtuber/millie.png'

function VtuberLayout() {
  return(
    <div className="vtuber-layout">
      <img className='brosemi' src={Brosemi} alt='brosemi'/>
      <img className='gura' src={Gura} alt='gura'/>
      <img className='elira' src={Elira} alt='elira'/>
      <img className='finana' src={Finana} alt='finana'/>
      <img className='millie-lr' src={Millie} alt='millie'/>
      <img className='millie-rl' src={Millie} alt='millie'/>
    </div>
  );
}

export default VtuberLayout;