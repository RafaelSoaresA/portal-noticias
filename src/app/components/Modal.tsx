// components/CustomModal.tsx
import React, { useState } from 'react';
import ReactModal from 'react-modal';

interface ICustomModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  item: { title: string, abstract: string, byline: string, created_date: string, url: string};

}

const CustomModal: React.FC<ICustomModalProps> = ({ isOpen, onRequestClose, item }) => {

  return (
    <ReactModal isOpen={isOpen} onRequestClose={onRequestClose}>
      <div className='flex flex-col gap-4 bg-cover mt-7'>
        <div className="absolute top-2 right-1">
            <button className=" flex flex-auto text-gray-700 text-base p-2 mr-4  transition mb-3 hover:bg-slate-400 rounded-2xl cursor-pointer" onClick={onRequestClose}>Fechar</button>
        </div>
        
        <div>
            <img className=" w-[480px] max-h-md " src={item.multimedia?.[0]?.url}/>
        </div>
        
        <h2 className='text-gray-700 text-4xl font-bold'>{item.title}</h2>
        <p className='text-gray-700  text-4xl '>{item.abstract}</p>
        <div className=" w-52">
            <p className='text-gray-700 text-base p-2 mr-4  transition mb-3 hover:bg-slate-400 rounded-2xl cursor-pointer'><a target='_blank' href={item.url}>Abrir Notícia Completa</a></p>
        </div>
       
        
      </div>
    </ReactModal>
  );
};

export default CustomModal;
