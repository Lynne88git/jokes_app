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
      <div className="jokes">
          <JokeList />
      </div>
    </Main>
  );
};

export default Index;
