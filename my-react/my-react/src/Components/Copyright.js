import React from 'react';

function Copyright() {
  return (
    <div>
      <footer>
        <div className='text-center p-3'>
          &copy; {new Date().getFullYear()} Copyright:{' '} All Rights Reserved
        </div>
      </footer>
    </div>

  );
}

export default Copyright;
