/* eslint-disable react/jsx-key */
"use client";

import React, {useEffect, useState} from 'react';
//import { NewsModel } from '../app/models/NewsModel';
//import { newsApi } from './services/apiService';
import { format } from 'date-fns';
import CustomModal from '../app/components/Modal';




const home_api = "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=gwq9TI7oTHho3Eyk7VQACZSdRUKgdGST";
export default function Home() {


    const [loading, setLoading] = useState(false);
    //const [news, setNews] = useState<NewsModel[]>([]);
    const [data, setData] = useState(null);

    const fetchAllData = async () => {
        try {
            setLoading(true);

            const response = await fetch(home_api);
            const data = await response.json();

            if(!data) throw 'Error fetching data'
            setData(data);
            console.log(data);

        }catch (error) {
            console.log(error);
        }finally {
            setLoading(false);
        }
    }


    interface IItem {
        title: string;
        abstract: string;
        byline: string;
        created_date: string;
        url: string;
      }

      const [modalIsOpen, setModalIsOpen] = useState(false);
      const [selectedItem, setSelectedItem] = useState<IItem | null>(null);
    
      const items: IItem[] = [
        {title: 'Item 1', abstract: 'Conteúdo do Item 1', byline: "", created_date: "", url: ""},
        // ... outros itens
      ];
    
      const handleOpenModal = (item: IItem) => {
        setSelectedItem(item);
        setModalIsOpen(true);
      };
      

      /*const IndexPage: React.FC = () => {
       
      
        return (
          <div>
            {items.map((item) => (
              <div key={item.id} onClick={() => handleOpenModal(item)}>
                {item.title}
              </div>
            ))}
            {selectedItem && (
              <CustomModal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                item={selectedItem}
              />
            )}
          </div>
        );
      };*/
      
      
    
    /*useEffect(() => {
        newsApi.get('/automobiles.json?api-key=gwq9TI7oTHho3Eyk7VQACZSdRUKgdGST')
        .then((resp) => {
            setNews(resp.data);
            console.log(news);
        })
    }, []);*/

    useEffect(() => {
        fetchAllData();
    }, []);

    function dataAtualFormatada(myDate: any): string {
        //const dataAtual = new Date();
        const formattedDate = format(myDate, 'MM/dd/yyyy HH:mm:ss');
        return formattedDate;
    }


    /*{news?.map((item) => (
        // eslint-disable-next-line react/jsx-key
        <div style={{'--bg-card': `url(${item.results[0].title})`} as React.CSSProperties} className="bg-[image:var(--bg-card)] bg-cover bg-no-repeat w-60 h-[245px] rounded-md"></div>
     ))}
     
       <div style={{'--bg-card': `url(${item.multimedia?.[0]?.url ?? 'Valor padrão'})`} as React.CSSProperties} className="bg-[image:var(--bg-card)] bg-cover bg-no-repeat w-120 h-[245px] rounded-md">
                <div className="flex h-full justify-center items-center backdrop-brightness-50 p-6 cursor-pointer">
                <h1 className="text-2xl font-semibold text-white ite">{item.title}</h1>
              </div>
            </div>
     */

  return (
    <main className="flex flex-wrap items-center justify-center h-full w-full gap-4 bg-cover">

        {loading && !data && 
        <p>Carregando informações...</p>
        }

        <header className=" backdrop-blur-lg pt-5 flex w-screen shadow-lg mb-24 relative">
            <div className="flex flex-auto justify-start items-center ml-24">
                <p className=" text-4xl font-bold text-center text-sky-700 font-serif">NOVO</p>
            </div>
            <div className="flex flex-auto justify-end mr-24">
                <p className="p-2 mr-4  transition mb-3 hover:bg-white rounded-2xl cursor-pointer text-sky-700">Categories</p>
                <p className="p-2 mr-4  transition mb-3 hover:bg-white rounded-2xl cursor-pointer text-sky-700">Login</p>
            </div>
        </header>
        
        <body>
            <div className="flex flex-wrap justify-center items-center absolute top-32 left-10">
                <p className="text-4xl font-bold text-center text-sky-700 font-serif">TOP STORIES</p>
            </div>
        </body>

        {data && (data as any).results?.map((item: any) => (
          
            
            <div className=" max-w-md rounded overflow-hidden shadow-lg flex flex-wrap ">
                <img onClick={() => handleOpenModal(item)} className="w-full cursor-pointer max-h-56" src={item.multimedia?.[0]?.url}/>
                <div className="px-6 py-4">
                    <div onClick={() => handleOpenModal(item)} className="font-bold text-xl mb-2 cursor-pointer">{item.title}</div>
                    <p className="text-gray-700 text-base">{item.abstract}</p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{item.byline}</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{dataAtualFormatada(item.created_date)}</span>
                </div>
            </div>

         ))}
   

        {selectedItem && (
              <CustomModal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                item={selectedItem}
              />
            )}
    </main> 
  );
}
