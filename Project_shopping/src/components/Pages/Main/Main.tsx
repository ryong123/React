import MainContent from '../../MainContent/MainContent/MainContent.tsx';
import SectionContent from '../../MainContent/SectionContent/SectionContent.tsx';
import SectionContent2 from '../../MainContent/SectionContent2/SectionContent2';

export default function Main() {
  return (
    <>
      <main>
        <MainContent></MainContent>
        <section>
          <SectionContent></SectionContent>
        </section>
        <section>
          <SectionContent2></SectionContent2>
        </section>
        <section></section>
      </main>

      <footer></footer>
    </>
  );
}
