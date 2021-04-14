import React, { FunctionComponent } from 'react';
import style from './SectionName.module.scss';

interface ISectionNameProps {
  name: string;
  color: string;
  top: string | number;
  bottom: string | number;
  left: string | number;
  right: string | number;
}

const SectionName: FunctionComponent<ISectionNameProps> = ({
  name,
  color,
  top,
  left,
  bottom,
  right
}) => {
  return (
    <p
      className={style.SectionName}
      style={{
        color: `${color}`,
        top: `${top}`,
        left: `${left}`,
        bottom: `${bottom}`,
        right: `${right}`
      }}>
      {name}
    </p>
  );
};

export default SectionName;
