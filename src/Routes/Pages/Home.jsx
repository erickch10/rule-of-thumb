import React from 'react';
import DefaultLayout from '../../Layouts/DefaultLayout';
import Featured from '../../Components/Featured';
import PeopleSection from '../../Components/People/PeopleSection';
import { THEMES } from '../../Constants';

export default () => (
  <DefaultLayout pageTitle="Rule of Thumb." theme={THEMES.dark}>
    <Featured />
    <PeopleSection />
  </DefaultLayout>
);
