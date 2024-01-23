import TextExpander from './TextExpander';

import './global.css';

function App() {
  return (
    <>
      <h1>Text Expander</h1>
      <TextExpander explaned={false} border={true}>
        Nearly ten years had passed since the Dursleys had woken up to find
        their nephew on the front step, but Privet Drive had hardly changed at
        all.
      </TextExpander>
      <TextExpander explaned={false}>
        The sun rose on the same tidy front gardens and lit up the brass number
        four on the Dursleys' front door; it crept into their living room, which
        was almost exactly the same as it had been on the night when Mr.
      </TextExpander>
      <TextExpander explaned={false}>
        Dursley had seen that fateful news report about the owls. Only the
        photographs on the mantelpiece really showed how much time had passed.
      </TextExpander>
      <TextExpander explaned={false}>
        Ten years ago, there had been lots of pictures of what looked like a
        large pink beach ball wearing different-colored bonnets - but Dudley
        Dursley was no longer a baby, and now the photographs showed a large
        blond boy riding his first bicycle, on a carousel at the fair, playing a
        computer game with his father, being hugged and kissed by his mother.
        The room held no sign at all that another boy lived in the house, too.
      </TextExpander>
    </>
  );
}

export default App;
