import '../../styles/vtuber-styles.css'

import Gura from '../../images/vtuber/gura.gif'
import Brosemi from '../../images/vtuber/brosemi.png'
import Elira from '../../images/vtuber/elira.png'
import Finana from '../../images/vtuber/finana.png'
import Millie from '../../images/vtuber/millie.png'

function VtuberLayout() {
  return(
    <div className="vtuber-layout">
      <img className='brosemi' src={Brosemi}/>
      <img className='gura' src={Gura}/>
      <img className='elira' src={Elira}/>
      <img className='finana' src={Finana}/>
      <img className='millie-lr' src={Millie}/>
      <img className='millie-rl' src={Millie}/>
    </div>
  );
}

export default VtuberLayout;