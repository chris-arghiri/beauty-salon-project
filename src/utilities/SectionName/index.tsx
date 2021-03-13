import React, { FunctionComponent } from 'react';
import style from './SectionName.module.scss';

interface ISectionNameProps {
  name: string;
  color: string;
}

const SectionName: FunctionComponent<ISectionNameProps> = ({ name, color }) => {
  return (
    <p className={style.SectionName} style={{ color: `${color}` }}>
      {name}
    </p>
  );
};

export default SectionName;
