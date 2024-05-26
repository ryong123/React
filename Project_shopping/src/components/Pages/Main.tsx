import MainSeat from '../../assets/images/MainSeat.png';
import MainBedding from '../../assets/images/MainBedding.png';
import MainKeep from '../../assets/images/MainKeep.png';

export default function Main() {
  return (
    <div>
      <h1>I need to possess What I desire</h1>

      <img src={MainSeat} alt="MainSeat.png" style={{ maxWidth: '100%' }} />
      <img
        src={MainBedding}
        alt="MainBedding.png"
        style={{ maxWidth: '100%' }}
      />
      <img src={MainKeep} alt="MainKeep.png" style={{ maxWidth: '100%' }} />
    </div>
  );
}
