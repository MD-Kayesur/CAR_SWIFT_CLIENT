import useMovementHook from "../Hooks/useMovementHook";

const Header = ({ title }) => {
    
  const [ref, isVisible] = useMovementHook();

  return (
    // <div ref={sectionRef} className="    my-10 px-9 text-center">
    //   <h1 className="text-5xl font-bold">{title}</h1>
    // </div>
    <div
      ref={ref}
      className={` ${isVisible ? "movement" : ""}  my-10 px-9 text-center`}>
      <h1 className="text-5xl font-bold">{title}</h1>
    </div>
  );
};

export default Header;
