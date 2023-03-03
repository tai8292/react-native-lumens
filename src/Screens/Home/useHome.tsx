import { Images } from '@Images/Images';
import { ImageSourcePropType } from 'react-native';

export type HomeSectionItem = {
  id: string | number;
  description: string;
  amount: number;
  image: ImageSourcePropType;
  buttonText?: string;
  buttonType?: string;
};

export type HomeSectionData = {
  title: string;
  data: HomeSectionItem[];
};

interface UseHome {
  data: HomeSectionData[];
}

const useHome = (): UseHome => {
  const data: HomeSectionData[] = [
    {
      title: 'Petrol',
      data: [
        {
          id: 1,
          description: '50% discount for every $100 top-up on your Shell Petrol Card',
          amount: 15,
          image: Images.imgTestData,
        },
        {
          id: 2,
          description: '50% discount for every $100 top-up on your Shell Petrol Card',
          amount: 1000,
          image: Images.imgTestData,
          buttonText: 'Insufficient coins',
          buttonType: 'webview',
        },
        {
          id: 3,
          description: '50% discount for every $100 top-up on your Shell Petrol Card',
          amount: 15,
          image: Images.imgTestData,
        },
        {
          id: 4,
          description: '50% discount for every $100 top-up on your Shell Petrol Card',
          amount: 15,
          image: Images.imgTestData,
        },
        {
          id: 5,
          description: '50% discount for every $100 top-up on your Shell Petrol Card',
          amount: 15,
          image: Images.imgTestData,
          buttonText: 'Insufficient coins',
          buttonType: 'webview',
        },
      ],
    },
    {
      title: 'Rental Rebate',
      data: [
        {
          id: 1,
          description: '50% discount for every $100 top-up on your Shell Petrol Card',
          amount: 15,
          image: Images.imgTestData,
        },
        {
          id: 2,
          description: '50% discount for every $100 top-up on your Shell Petrol Card',
          amount: 1000,
          image: Images.imgTestData,
          buttonText: 'Insufficient coins',
          buttonType: 'webview',
        },
        {
          id: 3,
          description: '50% discount for every $100 top-up on your Shell Petrol Card',
          amount: 15,
          image: Images.imgTestData,
        },
        {
          id: 4,
          description: '50% discount for every $100 top-up on your Shell Petrol Card',
          amount: 15,
          image: Images.imgTestData,
        },
        {
          id: 5,
          description: '50% discount for every $100 top-up on your Shell Petrol Card',
          amount: 15,
          image: Images.imgTestData,
          buttonText: 'Insufficient coins',
          buttonType: 'webview',
        },
      ],
    },
    {
      title: 'Food and Beverage',
      data: [
        {
          id: 1,
          description: '50% discount for every $100 top-up on your Shell Petrol Card',
          amount: 15,
          image: Images.imgTestData,
        },
        {
          id: 2,
          description: '50% discount for every $100 top-up on your Shell Petrol Card',
          amount: 1000,
          image: Images.imgTestData,
          buttonText: 'Insufficient coins',
          buttonType: 'webview',
        },
        {
          id: 3,
          description: '50% discount for every $100 top-up on your Shell Petrol Card',
          amount: 15,
          image: Images.imgTestData,
        },
        {
          id: 4,
          description: '50% discount for every $100 top-up on your Shell Petrol Card',
          amount: 15,
          image: Images.imgTestData,
        },
        {
          id: 5,
          description: '50% discount for every $100 top-up on your Shell Petrol Card',
          amount: 15,
          image: Images.imgTestData,
          buttonText: 'Insufficient coins',
          buttonType: 'webview',
        },
      ],
    },
  ];

  return { data };
};
export default useHome;
