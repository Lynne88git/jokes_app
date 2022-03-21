import { ReactNode } from 'react';
import "../../styles/Home.module.css";
//import Link from 'next/link';

//import { AppConfig } from '@/utils/AppConfig';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="px-1 w-full antialiased text-gray-700">
    {props.meta}

    <div className="mx-auto px-24">


      {props.children}

    </div>
  </div>
);

export { Main };
