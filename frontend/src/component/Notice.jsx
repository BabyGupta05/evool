import React from 'react'

const Notice = () => {
  return (
    <aside
      role="status"
      aria-live="polite"
      className={`fixed bottom-0 left-0 w-full px-4 py-2 text-sm md:text-base text-center z-50 bg-yellow-300 text-black font-bold shadow-md `}
    >
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed fugit doloremque accusantium excepturi. Deleniti maxime aperiam necessitatibus modi est, quisquam atque. Assumenda, perferendis aspernatur fugit molestiae modi commodi voluptatem at.
      </p>
    </aside>
  )
}

export default Notice
