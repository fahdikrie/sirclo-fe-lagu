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
  gap-20
  pt-10 md:pt-20
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
    {name}
  </STab>
);

const Navigation = (props: NavigationProps) => (
  <SWrapper>
    {TABS.map((tab, id) => (
      <Tab key={id} name={tab as IActiveTab} {...props} />
    ))}
  </SWrapper>
);

export default Navigation;
