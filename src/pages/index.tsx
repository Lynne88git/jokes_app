//import { useRouter } from 'next/router';
//import Image from 'next/image';
import { Meta } from "@/layout/Meta";
import { Main } from "@/templates/Main";
import JokeList from "./jokelist";


const Index = () => {
  // const router = useRouter();

  return (
    <Main
      meta={
        <Meta
          title="Next.js Typescript based jokes project"
          description="Nothing too fancy. Just a good laugh."
        />
      }
    >
      <ul className="jokes space-y-4">
        <li className="w-96 bg-white shadow rounded">
          <JokeList />
        </li>
      </ul>
    </Main>
  );
};

export default Index;
