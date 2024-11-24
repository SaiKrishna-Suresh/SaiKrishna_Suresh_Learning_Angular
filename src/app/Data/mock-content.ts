import {Players} from "../Shared/Models/Players";


export const MOCK_CONTENT: Players[] = [
  {
    rank: 1,
    firstName: 'Virat',
    lastName: 'Kohli',
    country: 'India',
    average: 55.5,
    image:'images/virat.jpg',
    debuteDate:new Date('2009-02-15'),
    role:'batsman',
    salary:7000000

  },
  {
    rank: 2,
    firstName: 'Steve',
    lastName: 'Smith',
    country: 'Australia',
    average:45.5,
    image:'images/stevesmith.jpg',
    debuteDate:new Date('2010-06-26'),
    role:'AllRounder',
    salary:5000000

  },
  {
    rank:3,
    firstName:'Kane',
    lastName:'Willaimson',
    country:'New Zealand',
    average:44.3,
    image:'images/kanewilliamson.jpg',
    debuteDate:new Date('2009-10-03'),
    role:'Batsman',
    salary:4000000

  },

];
