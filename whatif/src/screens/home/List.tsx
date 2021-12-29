import faker from 'faker';
import { Colors } from '../../assets/fonts/theme/colors';
faker.seed(1);

const color = [
  Colors.rallyPurple,
  Colors.rallyYellow,
  Colors.rallyGreen,
  Colors.rallyOrange,
  Colors.rallyBlue,
  Colors.rallyDarkGreen,
];

const data = [
  {
    image: 'https://cdn-icons-png.flaticon.com/512/435/435041.png',
  },
  {
    image: 'https://cdn-icons-png.flaticon.com/512/435/435061.png',
  },
  {
    image: 'https://cdn-icons-png.flaticon.com/512/435/435065.png',
  },
  {
    image: 'https://cdn-icons-png.flaticon.com/512/435/435050.png',
  },
  {
    image: 'https://cdn-icons-png.flaticon.com/512/435/435037.png',
  },
  {
    image: 'https://cdn-icons-png.flaticon.com/512/435/435043.png',
  },
  {
    image: 'https://cdn-icons-png.flaticon.com/512/435/435055.png',
  },
  {
    image: 'https://cdn-icons-png.flaticon.com/512/435/435049.png',
  },
  {
    image: 'https://cdn-icons-png.flaticon.com/512/435/435031.png',
  },
  {
    image: 'https://cdn-icons-png.flaticon.com/512/435/435021.png',
  },
  {
    image: 'https://cdn-icons-png.flaticon.com/512/435/435025.png',
  },
  {
    image: 'https://cdn-icons-png.flaticon.com/512/435/435023.png',
  },
];

export const detailsIcons = [
  { color: '#FFF107', icon: 'ios-heart' },
  { color: '#F3B000', icon: 'ios-chatbubble' },
  // { color: '#F2988F', icon: 'edit' },
];

export default data.map((item, index) => ({
  ...item,
  key: faker.datatype.uuid(),
  color: color[index % color.length],
  author: '김남형',
  title: '좋은 개발자란 무엇인가? 코드를 잘 치는것인가 빨리 치는것인가???',
  description:
    '일이삼사오육칠만구영 일이삼사오육칠만구영 일이삼사오육칠만구영 35 일이삼사오육칠만구영 일이삼사오육칠만구영 일이삼사오육칠만구영 35',
  category: '빨리 개발 합시다',
  date: Date.now(),
}));
