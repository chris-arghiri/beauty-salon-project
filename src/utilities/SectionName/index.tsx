import React, { FunctionComponent } from 'react';
import style from './SectionName.module.scss';

interface ISectionNameProps {
  name: string;
  color: string;
  top: string | number;
  left: string | number;
}

const SectionName: FunctionComponent<ISectionNameProps> = ({
  name,
  color,
  top,
  left
}) => {
  return (
    <p
      className={style.SectionName}
      style={{ color: `${color}`, top: `${top}`, left: `${left}` }}>
      {name}
    </p>
  );
};

export default SectionName;
