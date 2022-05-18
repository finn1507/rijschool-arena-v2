import './App.css';
import AppBar from './content/appbar.js';
import Info from './content/Info.js';
import Footer from './content/footer.js';
import Pakketten from './content/Pakketten.js';
import Slideshow from './content/Foto-slider.js';

function App() {
  return (
    <div>
      <div className='min-h-screen'>
        <div className='overflow-auto pb-36'>
          <AppBar/>
          <Info/>
          <Pakketten/>
          <div className='flex justify-center'>
            <Slideshow
            imgs={[
              'https://images.unsplash.com/photo-1585255318859-f5c15f4cffe9?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixlib=rb-1.2.1&q=80&w=500',
              'https://images.unsplash.com/photo-1584226761916-3fd67ab5ac3a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixlib=rb-1.2.1&q=80&w=500',
              'https://images.unsplash.com/photo-1585179292338-45ba1f62f082?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixlib=rb-1.2.1&q=80&w=500',
              'https://images.unsplash.com/photo-1584753987666-ead137ec0614?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixlib=rb-1.2.1&q=80&w=500',
              'https://images.unsplash.com/photo-1584691267914-91c0bee55964?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixlib=rb-1.2.1&q=80&w=500',
              'https://images.unsplash.com/photo-1585084335487-f653d0859c14?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixlib=rb-1.2.1&q=80&w=500',
              'https://images.unsplash.com/photo-1583217874534-581393fd5325?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixlib=rb-1.2.1&q=80&w=500',
            ]}
          />
          </div>
        </div>
      </div>
      <div className='relative -mt-36'>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
