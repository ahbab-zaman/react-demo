import React, { useState } from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { BiLogOut } from 'react-icons/bi';
import { FaRegQuestionCircle } from 'react-icons/fa';
import { IoCloseSharp } from 'react-icons/io5';
import { FiEdit2 } from 'react-icons/fi';
import { MdEdit } from 'react-icons/md';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Menu Button */}
      <div className="menu-button" onClick={() => setIsOpen(true)}>
        &#9776;
      </div>

      {/* Sidebar */}
      <div className={`sidebar-container ${isOpen ? 'open' : ''}`}>
        {/* Header */}
        <div className="sidebar-header">
          <div className="close-btn" onClick={() => setIsOpen(false)}>
            <IoCloseSharp />
          </div>
          <h2>CIUDAD UNIVERSITARIA</h2>
          <div className="profile">
            <div className="profile-avatar">
              R
              <div className="edit-icon">
                <MdEdit className='edit' size={13} />
              </div>
            </div>
            <div className="profile-name">Ray</div>
          </div>
        </div>

        {/* Menu */}
        <div className="sidebar-menu">
          <div className="menu-item">
            <AiOutlineHome />
            INICIO
          </div>
          <div className="menu-item">
            <FaRegQuestionCircle />
            SUPORTE
          </div>
          <div className="menu-item">
            <BiLogOut />
            CERRAR SECCION
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
