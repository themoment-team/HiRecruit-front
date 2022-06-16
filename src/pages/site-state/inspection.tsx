import styled from '@emotion/styled';
import { NextPage } from 'next';

import { Logo } from 'assets/icons/Logo';

const InspectionWrapper = styled.main`
  height: 100vh;
  display: grid;
  place-items: center;
  section {
    height: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  h1 {
    font-size: 1rem;
    font-weight: 500;
  }
`;

const InspectionPage: NextPage = () => {
  return (
    <InspectionWrapper>
      <section>
        <Logo logoColor="black" />
        <h1>&nbsp;&nbsp;| 서비스가 점검중이에요</h1>
      </section>
    </InspectionWrapper>
  );
};

export default InspectionPage;
