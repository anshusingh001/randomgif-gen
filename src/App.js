
import './App.css';
import Random from './components/Random';
import Tag from './components/Tag';

function App() {

  return (
   
     <div className="w-full h-screen flex flex-col background relative overflow-x-hidden items-center">
     <h1 className='bg-white text-slate-950 font-bold text-3xl  text-center mt-8 w-11/12 rounded-lg px-[10px] py-[8px] '>Random GIF's</h1>
     <div className='flex flex-col w-full pad items-center gap-y-10 mt-[30px]'>
     <Random/>
      <Tag/>

     </div>
    
    </div>
  
    
  );
}

export default App;
