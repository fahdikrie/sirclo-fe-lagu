import { Dispatch, SetStateAction } from 'react';
import tw, { styled } from 'twin.macro';

interface NavigationProps {
  activeTab: string;
  setActiveTab: Dispatch<SetStateAction<IActiveTab>>;
}

interface TabProps extends NavigationProps {
  name: IActiveTab;
}

const SWrapper = tw.div`
  pt-10 md:pt-20
  text-center
`;

const STitle = tw.h1`
  font-black text-white
  text-3xl md:text-5xl
  mb-5 md:mb-10
`;

const SNavigation = tw.div`
  gap-20
  pb-8 md:pb-10
  flex justify-center items-center
`;

const STab = styled.div(({ isActiveTab }: { isActiveTab: boolean }) => [
  tw`
    cursor-pointer
    text-lg md:text-xl

    pb-1
    border-2
    border-transparent
  `,
  isActiveTab && tw`border-b-purple-700!`,
]);

const TABS = ['tracks', 'artists'];

const Tab = ({ activeTab, setActiveTab, name }: TabProps) => (
  <STab
    isActiveTab={activeTab === (name as string)}
    onClick={() => setActiveTab(name)}
  >
    by {name}
  </STab>
);

const Navigation = (props: NavigationProps) => (
  <SWrapper>
    <STitle>
      <u>Last FM&apos;s</u> Top Charts
    </STitle>
    <SNavigation>
      {TABS.map((tab, id) => (
        <Tab key={id} name={tab as IActiveTab} {...props} />
      ))}
    </SNavigation>
  </SWrapper>
);

export default Navigation;
