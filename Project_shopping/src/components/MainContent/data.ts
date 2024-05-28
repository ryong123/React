import SectionSeat from '../../assets/images/SectionSeat.png';
import SectionBedding from '../../assets/images/SectionBedding.png';
import SectionKeep from '../../assets/images/SectionKeep.png';

interface SectionData {
  imgSrc: string;
  title: string;
  content: string[];
  imgLink: string;
}

export const Sections: SectionData[] = [
  {
    imgSrc: SectionSeat,
    title: 'Seat',
    content: ['Hard chairs', 'Soft chairs', 'Functional chairs', 'Tables'],
    imgLink: 'to pick',
  },
  {
    imgSrc: SectionBedding,
    title: 'Bedding',
    content: ['Bed', 'Pillow', 'Bed lighting', 'Blanket'],
    imgLink: 'to pick',
  },
  {
    imgSrc: SectionKeep,
    title: 'Keep',
    content: ['Clothing', 'Shelves', 'Bookcase', 'Miscellaneous'],
    imgLink: 'to pick',
  },
];
