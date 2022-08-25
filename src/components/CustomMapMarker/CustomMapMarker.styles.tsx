import styled from '@emotion/styled';

import pallete from 'shared/Pallete';

export const CustomMapMarker = styled.div`
  min-width: 18.75rem;
  padding: 0.75rem;
  background-color: ${pallete.scheme.white};
  border-radius: 0.75rem;
  transform: translateY(calc(-50% - 8px));
  .stilettos {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translate(-50%, 0);
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 8px;
    border-color: ${pallete.scheme.white} transparent transparent transparent;
  }
  &:hover {
    z-index: 999;
  }
`;

export const ProfileImage = styled.div`
  width: 100%;
  height: 8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1.75rem;
  overflow: hidden;
  background-color: ${pallete.scheme.gray};
  img {
    max-width: 17.25rem;
    max-height: 8rem;
    -webkit-user-drag: none;
  }
`;

export const ProfileImageAltText = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
  color: ${pallete.scheme.darkgray};
`;

export const CompanyIntroBox = styled.div`
  display: flex;
  flex-direction: column;
  .companyProfile {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    margin: 0.6rem 0;
  }
  #companyName {
    font-size: 1rem;
    font-weight: 600;
  }
  #companyUri {
    width: fit-content;
    font-size: 0.75rem;
    color: ${pallete.scheme.blue};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;
