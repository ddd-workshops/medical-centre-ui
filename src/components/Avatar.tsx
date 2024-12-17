import React from 'react';
import type { PatientProfile } from '../contract';

type AvatarProps =
  | { src: string }
  | { children: string; }
  & {
    size?: 'SMALL' | 'MEDIUM' | 'LARGE';
  };

const sizeClasses = {
  SMALL: 'w-8 h-8 text-sm',
  MEDIUM: 'w-12 h-12 text-lg',
  LARGE: 'w-16 h-16 text-xl',
};

export const Avatar: React.FC<AvatarProps> = ({ size = 'MEDIUM', ...props }) => {
  let element: React.ReactNode;
  if ('src' in props) {
    element = <img src={props.src} alt="Avatar" className="rounded-full w-full h-full object-cover" />;
  } else {
    element = props.children;
  }

  return (
    <div className={`inline-flex items-center justify-center rounded-full bg-green-500 text-white ${sizeClasses[size]}`}>
      {element}
    </div>
  );
};

type ProfileAvatarProps = {
  profile: PatientProfile;
  size?: 'SMALL' | 'MEDIUM' | 'LARGE';
};

export const ProfileAvatar: React.FC<ProfileAvatarProps> = ({ profile, size }) => {
  const initials = `${profile.firstName[0]}${profile.lastName[0]}`;
  return <Avatar size={size}>{initials}</Avatar>;
};