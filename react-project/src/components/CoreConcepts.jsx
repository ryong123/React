

import CoreConcept from './CoreConcept';
import { CORE_CONCEPTS } from '../data';

export default function CoreConcepts() {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {CORE_CONCEPTS.map((conceptitem, index) => (
          <CoreConcept key={conceptitem.title} {...conceptitem} />
        ))}
      </ul>
    </section>
  );
}
