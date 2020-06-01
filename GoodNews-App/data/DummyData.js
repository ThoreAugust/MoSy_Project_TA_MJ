import Article from '../models/article';

const Lorem = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et';
const Lorem1 = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et';
const imgDummy = 'https://www.wikihow.com/images/thumb/4/4e/Write-an-Article-Review-Step-4-Version-3.jpg/aid1749037-v4-728px-Write-an-Article-Review-Step-4-Version-3.jpg.webp';
const articleDummy = 'https://www.tagesschau.de/inland/corona-kinderrechte-grundgesetz-101.html';

export const ARTICLES = [
  new Article('a1', 'Test1', Lorem1, imgDummy, 'Wikipedia', articleDummy, '01.06.2020 04:30 CEST'),
  new Article('a2', 'Test2', Lorem, imgDummy, 'Wikipedia', articleDummy, '01.06.2020 04:30 CEST'),
  new Article('a3', 'Test3', Lorem, imgDummy, 'Wikipedia', articleDummy, '01.06.2020 04:30 CEST'),
  new Article('a4', 'Test4', Lorem1, imgDummy, 'Wikipedia', articleDummy, '01.06.2020 04:30 CEST'),
  new Article('a5', 'Test5', Lorem, imgDummy, 'Wikipedia', articleDummy, '01.06.2020 04:30 CEST'),
  new Article('a6', 'Test6', Lorem, imgDummy, 'Wikipedia', articleDummy, '01.06.2020 04:30 CEST'),
  new Article('a7', 'Test7', Lorem, imgDummy, 'Wikipedia', articleDummy, '01.06.2020 04:30 CEST'),
  new Article('a8', 'Test8', Lorem1, imgDummy, 'Wikipedia', articleDummy, '01.06.2020 04:30 CEST'),
  new Article('a9', 'Test9', Lorem, imgDummy, 'Wikipedia', articleDummy, '01.06.2020 04:30 CEST'),
  new Article('a10', 'Test10', Lorem, imgDummy, 'Wikipedia', articleDummy, '01.06.2020 04:30 CEST'),
  new Article('a11', 'Test11', Lorem1, imgDummy, 'Wikipedia', articleDummy, '01.06.2020 04:30 CEST'),
];