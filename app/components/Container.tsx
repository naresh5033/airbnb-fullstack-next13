'use client';

// we ve to make this as client comp/ coz by default every comp that created insidee the app are svr side comp
// this could lead to hydration probs if we mix and match the imports with client and svr comps
interface ContainerProps {
  children: React.ReactNode
};
//A ReactNode is a ReactElement, a ReactFragment, a string, a number or an array of ReactNodes, or null, or undefined, or a boolean:
//ReactNode is used as return type for render() in class components. It also is the default type for children attribute with PropsWithChildren.

const Container: React.FC<ContainerProps> = ({ children }) => {
  return ( 
    <div
      className="
        max-w-[2520px]
        mx-auto
        xl:px-20 
        md:px-10
        sm:px-2
        px-4
      "
    >
      {children}
    </div>
   );
}
 
export default Container;
