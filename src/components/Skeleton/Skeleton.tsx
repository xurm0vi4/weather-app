import React from 'react';

import styles from './Skeleton.module.css';

type SkeletonProps = {
  width: number;
  height: number;
};

const Skeleton: React.FC<SkeletonProps> = ({ width, height }) => {
  return <div style={{ width, height }} className={styles.skeleton}></div>;
};

export default Skeleton;
