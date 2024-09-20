import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NodeCard = ({
  title,
  description,
  style,
  onClick,
  showButton = true,
  visible = false,
}: {
  title: string;
  description: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  showButton?: boolean;
  visible?: boolean;
}) => (
  <div
    className={`absolute border-2 border-[rgba(75,30,133,0.5)] rounded-[2em] bg-gradient-to-br from-[rgba(75,30,133,1)] to-[rgba(75,30,133,0.01)] text-white font-nunito p-[1.5em] flex justify-center items-center flex-col gap-[1em] backdrop-blur-[12px] z-10 transition-opacity duration-500 ${
      visible ? 'opacity-100' : 'opacity-0'
    }`}
    style={style}
    onClick={onClick}
  >
    <div>
      <h1 className="text-[2em] font-medium">{title}</h1> 
      <p className="text-[1em]">{description}</p>
    </div>
    {showButton && (
      <button className="h-fit w-fit px-[1.5em] py-[0.5em] border-[1px] rounded-full flex justify-center items-center gap-[0.75em] overflow-hidden group hover:translate-y-[0.125em] duration-200 backdrop-blur-[12px]">
        <p>Explore</p>
        <svg
          className="w-8 h-8 group-hover:translate-x-[10%] duration-300" 
          stroke="currentColor"
          strokeWidth="1"
          viewBox="0 0 24 24"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            strokeLinejoin="round"
            strokeLinecap="round"
          ></path>
        </svg>
      </button>
    )}
  </div>
);

const Sciencelibrary = () => {
  const navigate = useNavigate();

  const [visibleCards, setVisibleCards] = useState([false, false, false, false]); 

  useEffect(() => {
    const timeoutIds: NodeJS.Timeout[] = []; 

    // Show each card one by one with a delay
    visibleCards.forEach((_, index) => {
      const timeoutId = setTimeout(() => {
        setVisibleCards((prev) =>
          prev.map((visible, i) => (i === index ? true : visible))
        );
      }, index * 700); 
      timeoutIds.push(timeoutId);
    });

    
    return () => {
      timeoutIds.forEach((id) => clearTimeout(id));
    };
  }, []);

  const handleNodeClick = (id: string) => {
    switch (id) {
      case '2':
        navigate('/courses/engineering');
        break;
      case '3':
        
        break;
      case '4':
   
        break;
      default:
        break;
    }
  };

  return (
    <div className="h-screen w-screen bg-cover bg-fixed" style={{backgroundImage: 'linear-gradient(to right, #076585, #fff)'}}>
      <div className="relative h-full w-full">
        <NodeCard
          title="Science"
          description="A wide field of study that includes Engineering, Medical, and B.Sc."
          style={{ top: '20%', left: '50%', transform: 'translate(-50%, -50%)' }}
          showButton={false}
          visible={visibleCards[0]} 
        />
        <NodeCard
          title="Engineering"
          description="Explore courses in Engineering and careers."
          style={{ top: '60%', left: '20%', transform: 'translate(-50%, -50%)' }} 
          onClick={() => handleNodeClick('2')}
          visible={visibleCards[1]} 
        />
        <NodeCard
          title="Medical"
          description="Explore Medical science and its vast applications."
          style={{ top: '60%', left: '50%', transform: 'translate(-50%, -50%)' }} 
          onClick={() => handleNodeClick('3')}
          visible={visibleCards[2]} 
        />
        <NodeCard
          title="B.Sc"
          description="Get detailed information about B.Sc courses."
          style={{ top: '60%', left: '80%', transform: 'translate(-50%, -50%)' }} 
          onClick={() => handleNodeClick('4')}
          visible={visibleCards[3]} 
        />
      <div className=' flex w-full justify-center items-center p-5'>
        <h1 className=' text-lg font-bold text-black'>Note: As of now, only <span className=' text-white'> "Engineering Roadmap"</span> is available. Feel free to explore .</h1>
      </div>
        <svg className="absolute top-0 left-0 w-full h-full z-0">
          <line x1="50%" y1="28%" x2="20%" y2="50%" stroke="black" strokeWidth="1" />
          <line x1="50%" y1="28%" x2="50%" y2="50%" stroke="black" strokeWidth="1" />
          <line x1="50%" y1="28%" x2="80%" y2="50%" stroke="black" strokeWidth="1" />
        </svg>
        
      </div>
      
    </div>
  );
};

export default Sciencelibrary;
