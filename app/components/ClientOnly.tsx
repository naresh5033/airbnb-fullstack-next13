'use client';

import React, { useState, useEffect } from 'react';

//this will checks whether we re in the svr side rendering or not
interface ClientOnlyProps {
  children: React.ReactNode;
}

//this will mount with every comps to protect hyderation(wrap our nav with this)
//we can wrap this with any of our client comp which might cause hyderation
const ClientOnly: React.FC<ClientOnlyProps> = ({ 
  children
}) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
      setHasMounted(true);
  }, [])

  if (!hasMounted) return null;

  return (
    <>
      {children}
    </>
  );
};

export default ClientOnly;
