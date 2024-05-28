import MainContent from '../../MainContent/MainContent.tsx';
import SectionContent from '../../MainContent/SectionContent.tsx';

export default function Main() {
  return (
    <>
      <main>
        <MainContent></MainContent>
      </main>

      <section>
        <SectionContent></SectionContent>
      </section>
    </>
  );
}
