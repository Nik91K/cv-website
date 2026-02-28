import React from 'react';

type CardProps = {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
};

const WorkSectionCard: React.FC<CardProps> = ({
  children,
  className = '',
  hoverable = true,
}) => {
  return (
    <div
      className={`backdrop-blur-sm rounded-2xl p-8 border border-white/10 bg-white/5 transition-all duration-300 h-full w-full
                ${hoverable ? 'hover:scale-102 hover:border-white/20 hover:bg-white/10 hover:shadow-xl hover:shadow-white/10' : ''}
                ${className}
            `}
    >
      {children}
    </div>
  );
};

export default WorkSectionCard;
