  import React,{useRef, useEffect, useState} from "react"
  import reactLogo from './assets/react.svg'
  import nodeLogo from "./assets/nodejs.png";
  import ProgressBar from 'react-bootstrap/ProgressBar';
  import Pop from "./assets/pop.mp3"
  function ReactClick(){

    let [finishedgame,setFinishedgame] = useState(false);

      let [progress,setProgress] = useState(0)
      // normal click
      let [click,setClick] = useState(0);
      let [perlick,setPerclick] = useState(1);
      let [priceperupgrade,setPriceperUpgrade] = useState(50);
      let [upgradelvlnormal,setUpgradeLvlNormal] = useState(0)
      
      // normal click



      const [startTime, setStartTime] = useState(null);
      const [elapsedTime, setElapsedTime] = useState(0);
    
      useEffect(() => {
        if (startTime === null) {
          setStartTime(Date.now());
        }
      }, []);
    
      useEffect(() => {
        if (startTime !== null && !finishedgame) {
          const timer = setInterval(() => {
            setElapsedTime(Math.floor((Date.now() - startTime) / 1000));
          }, 1000);
          return () => clearInterval(timer);
        }
      }, [startTime, finishedgame]); 
      // auto click
      let [autoclicprice,setAutoclickprice] = useState(250);
      let [perautoclick,setPerautoclick] = useState(0)
      let [timmeout,setTimmeout] = useState(2000)
      let [upgradelvlauto,setUpgradeLvlauto] = useState(0);

      // auto click

      // Node Auto clicker
      let [autonodeprice,setAutonodeprice] = useState(999999999999);
      let [pernodeautoclick,setPernodeAutoclick] = useState(0);
      let [nodetimmeout,setNodeTimmeout] = useState(2000);
      let [upgradenodelvl,setUpgradenodeLvl] = useState(0);
      const [showNodeLogo, setShowNodeLogo] = useState(false);

      // Node Auto clicker
      let [maxClick, setMaxClick] = useState(click); 


      useEffect(() => {
          if (click > maxClick) {
            setMaxClick(click);
          }
        }, [click]); 


        useEffect(() => {
          setProgress(calculateGoalProgress());
        }, [maxClick, upgradelvlnormal, upgradelvlauto, upgradenodelvl]); 
        const calculateGoalProgress = () => {
          // Progress = 50% from MAX clicks, 50% from levels
          const clickProgress = Math.min(maxClick / 100000, 1) * 50; // Use maxClick
          const levelProgress = Math.min(
            (upgradelvlnormal + upgradelvlauto + upgradenodelvl) / 130, 
            1
          ) * 50;
          return Math.min(clickProgress + levelProgress, 100);
        };
    


        useEffect(() => {
          if (perautoclick > 0) {
              let isMounted = true;
      
              const playLoop = () => {
                  if (!isMounted) return;
                  playPop();
                  const delay = Math.floor(Math.random() * (450 - 50 + 1)) + 50;
                  soundTimeoutRef.current = setTimeout(playLoop, delay);
              };
      
              playLoop();
      
              return () => {
                  isMounted = false;
                  if (soundTimeoutRef.current) {
                      clearTimeout(soundTimeoutRef.current);
                  }
              };
          }
      }, [perautoclick]);

useEffect(() => {
  if (perautoclick > 0) {
      const timer = setInterval(() => {
          setClick(c1 => c1 + perautoclick);
      }, timmeout);
      return () => clearInterval(timer);
  }
}, [perautoclick, timmeout]); 
      useEffect(() =>{
          if(pernodeautoclick > 0){
          // console.log("Auto Click Value Changed:", perautoclick);
          const nodetimer = setInterval(() => {
              setClick(c11 => c11 + pernodeautoclick);
              
          }, nodetimmeout);
          
          return () => clearInterval(nodetimer); 
      }
      }, [pernodeautoclick]);


      const audioContextRef = useRef(null);
  const audioBufferRef = useRef(null);
  const soundTimeoutRef = useRef(null);
  const soundTimeoutRefNode = useRef(null);
  useEffect(() => {
    const loadAudio = async () => {
        try {
            audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
            const response = await fetch(Pop);
            const arrayBuffer = await response.arrayBuffer();
            audioBufferRef.current = await audioContextRef.current.decodeAudioData(arrayBuffer);
        } catch (error) {
            console.error('Error loading audio:', error);
        }
    };

    loadAudio();

    return () => {
        if (audioContextRef.current) {
            audioContextRef.current.close().catch(error => console.error('Error closing audio context:', error));
        }
        if (soundTimeoutRef.current) {
            clearTimeout(soundTimeoutRef.current);
        }
    };
  }, []);


  useEffect(() => {
    if (pernodeautoclick > 0) {
        let isMounted = true;

        const playNodeLoop = () => {
            if (!isMounted) return;
            playPop();
            const delay = Math.floor(Math.random() * (450 - 50 + 1)) + 50;
            soundTimeoutRefNode.current = setTimeout(playNodeLoop, delay);
        };

        playNodeLoop();

        return () => {
            isMounted = false;
            if (soundTimeoutRefNode.current) {
                clearTimeout(soundTimeoutRefNode.current);
            }
        };
    }
  }, [pernodeautoclick]);


  useEffect(() => {
    if (pernodeautoclick > 0) {
        const nodetimer = setInterval(() => {
            setClick(c11 => c11 + pernodeautoclick);
        }, nodetimmeout);
        
        return () => clearInterval(nodetimer);
    }
}, [pernodeautoclick, nodetimmeout]);

  const playPop = () => {
    if (audioContextRef.current && audioBufferRef.current) {
        const source = audioContextRef.current.createBufferSource();
        source.buffer = audioBufferRef.current;
        source.connect(audioContextRef.current.destination);
        source.start(0);
    }
  };


  useEffect(() => {
    if (progress >= 100) {
      setFinishedgame(true);
    }
  }, [progress]);
if(finishedgame == false){


  return(
      <>
      
      <div style={{userSelect: "none"}}>
      <div style={{ 
    textAlign: 'center', 
    color: '#61dafb', 
    fontSize: '2rem', 
    fontWeight: 'bolder',
    textShadow: '0 0 10px rgba(97, 218, 251, 0.7)',
    animation: 'glow-pulse 3s infinite alternate'
  }}>
    {`${progress.toFixed(2)}%`}
  </div>
  <ProgressBar
    animated
    now={progress}
    style={{ 
      height: '30px', 
      backgroundColor: 'gray',
      boxShadow: '0 0 15px rgba(97, 218, 251, 0.5)'
    }}
  />

            <div className="my-5">
          <a href="https://vite.dev" target="_blank">
            {/* <img src={viteLogo} className="logo" alt="Vite logo" /> */}
          </a>
          <a  target="_blank" style={{cursor: "pointer", userSelect: "none"}} className="my-5" onClick={() => setClick(c => c + perlick)}>
            <img src={reactLogo} draggable="false" className="logo react img img-fluid" style={{height: "18rem"}} alt="React logo"  />
          </a>


        </div>
        <h1 className="text-light fw-bolder">{click.toFixed(2)} <img src={reactLogo} alt="" className="points" draggable="false" />
        <img src={nodeLogo} id="nodelogo" style={{height: "2rem",  display: showNodeLogo ? "inline-block" : "none"}} alt="" className="points px-2" draggable="false" />
        </h1>

        <div>
          
          <button  className="btn btn-outline-light" onClick={() =>{ 
              if(click >= priceperupgrade){
                  
                  setClick(c => c - priceperupgrade)
                      setPerclick(c =>  c * 1.15);
                  setPriceperUpgrade(p => Math.floor(p * 1.5))
                  setUpgradeLvlNormal(u => u+ 1)
                  // setPerclick(Math.floor(priceperupgrade))
              }
              }}
              >Normal <br/> LVL: <span className="text-warning">{upgradelvlnormal}</span> <br/> Double your clicks 
              <br/> PerClick: {perlick.toFixed(2)}, <br/> UpgardePrice: 
              {Math.floor(priceperupgrade)}</button>
  
              <button id="autoclicky" className="btn btn-outline-light m-3" onClick={() => {
      if (upgradelvlnormal >= 5) {
          if (click >= autoclicprice) {
              if (upgradelvlauto < 20) { 
                  setClick(c => c - autoclicprice);
                  setPerautoclick(sp => (sp === 0 ? 2 : sp * 1.5));
                  setAutoclickprice(p => Math.floor(p * 1.5) || 50);
                  setTimmeout(t => Math.max(t - 100, 100));
                  setUpgradeLvlauto(n => n + 1);
                  playPop();
              }
          }
      }
  }}>
      Auto Click <br/> LVL: <span className="text-warning">
      {upgradelvlnormal < 5 ? "First Reach Normal lvl 5" : upgradelvlauto}
      </span> <br />PerAutoclick: {perautoclick.toFixed(2)}<br/> 
      Price: {Math.floor(autoclicprice)} <br/> TimeItTakes: 
      {timmeout >= 0 ? timmeout+"ms" : "maxed"}
      </button>

        </div>
        

              <div className=" group columm">
                  <button onClick={() =>{
                          if (upgradelvlauto >= 15) {
                              if (click >= autonodeprice) {
                                  if (upgradenodelvl < 20) {  
                                      setClick(c => c - autonodeprice);
                                      setPernodeAutoclick(sp => (sp === 0 ? 20000000 : sp * 1.5));
                                      setAutonodeprice(p => Math.floor(p * 1.5) || 50);
                                      setNodeTimmeout(t => Math.max(t - 100, 100));   
                                      setUpgradenodeLvl(n => n + 1);
                                      setShowNodeLogo(true); 
                                      playPop()                               }
                              }
                          }

                  }} className="btn btn-outline-light m-1 ">Node Auto Clicker  
                    LVL: <span className="text-warning"> {upgradelvlauto < 15 ? "First Reach Auto lvl 15" : upgradenodelvl} </span>
                  <br/> Price: {autonodeprice} <br/>Node Autoclick: {pernodeautoclick} Time it takes  {nodetimmeout >= 0 ? nodetimmeout+"ms" : "maxed"} 
                  </button>

              </div>
        </div>
        </>
  )
  }
  else if(finishedgame){
    return(<>
    <div style={{userSelect: "none"}}>
    <a  target="_blank" style={{cursor: "pointer", userSelect: "none"}} className="my-5" onClick={() => setClick(c => c + perlick)}>
            <img src={reactLogo} draggable="false" className="logo react img img-fluid" style={{height: "18rem"}} alt="React logo"  />
          </a>
      <h1 className="text-info fw-bolder bg">You completed my game</h1>
      <h1 className="text-light my-2 fw-bolder">
            it took you {Math.floor(elapsedTime / 60)} minutes and {elapsedTime % 60} seconds to finish my game
          </h1>
          
    </div>
    </>)
  }
}

  export default ReactClick