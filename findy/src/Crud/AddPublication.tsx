import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { actionListPublicationsAsync } from '../redux/Actions/ActionPublication';

interface Publication {
  Id: string;
  Media: string;
  Description: string;
  // Añadir otras propiedades
}

export default function AddPublication() {
  console.log("Entro a la función");

  const dispatch: any = useDispatch();
  const [publications, setPublications] = useState<Publication[]>([]);

  const addPublication = async () => {
    try {
      const recuperacionPublication: Publication[] = await dispatch(actionListPublicationsAsync());
      setPublications(recuperacionPublication);
    } catch (error) {
      console.error('Error al recuperar las publicaciones:', error);
    }
  }

  console.log(publications);

  return (
    <div>
      <button onClick={addPublication}>ADD PUBLICATION</button>
      {publications.map((publication, index) => (
        <img key={publication.Id} src={publication.Media} alt="Media" />
        // <h1>{publication.Description}</h1>  
      ))}
    </div>
  )
}
