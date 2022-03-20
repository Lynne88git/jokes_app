import { ReactNode } from 'react';
import "../../styles/Home.module.css";
//import Link from 'next/link';

import { AppConfig } from '@/utils/AppConfig';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="px-1 w-full antialiased text-gray-700">
    {props.meta}

    <div className="mx-auto max-w-screen-md">
      <div className="border-b border-gray-300">
        <div className="pt-16 pb-8">
          <div className="text-3xl font-bold text-gray-900">
            
          </div>
          <div className="text-xl">{AppConfig.description}</div>
        </div>
        <div>
          {/* <ul className="flex flex-wrap text-xl">
            <li className="mr-6">
              <Link href="/">
                <a className="text-gray-700 hover:text-gray-900 border-none">
                  Home
                </a>
              </Link>
            </li>
            <li className="mr-6">
              <Link href="/about/">
                <a className="text-gray-700 hover:text-gray-900 border-none">
                  About
                </a>
              </Link>
            </li>
          </ul> */}
        </div>
      </div>

      <div className="py-5 text-xl content">{props.children}</div>

    </div>
  </div>
);

export { Main };
