import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import '../styles/PublicationAdd.css';
import { actionCreatePublicationAsync, actionDeletePublicationAsync, actionListPublicationsAsync } from '../redux/Actions/ActionPublication';

interface Publication {
  Id: string;
  Media: string;
  Description: string;
  LikesPublication: string;
  SharedPublication: string;
  ActionsPublication: string;
}

export default function AddPublication() {
  const [new_Name, SetName] = useState<string>()
  const dispatch: any = useDispatch();
  const [publications, setPublications] = useState<Publication[]>([]);
  const [newId, setNewId] = useState<string>('');
  const [publicationCount, setPublicationCount] = useState<number>(0); // Contador para generar nombres únicos

  const addPublication = async () => {
    try {
      const recuperacionPublication: Publication[] = await dispatch(actionListPublicationsAsync());

      // Generar un nombre único basado en el contador
      const uniqueName = new_Name;
      console.log(new_Name);
      
      dispatch(actionCreatePublicationAsync({
        Media: formValues.Media,
        Description: formValues.Description,
        Likes: formValues.LikesPublication,
        Shared: formValues.SharedPublication,
        Comment: "S",
        ActionsPublication: uniqueName
      }));

      // Incrementar el contador para la próxima publicación
      setPublicationCount(publicationCount + 1);
      setPublications(recuperacionPublication);

      switch (publicationCount) {
        case 1:
          SetName("John Doe Smith");
          break;
        case 2:
          SetName("Emma Johnson Brown");
          break;
        case 3:
          SetName("Michael Martinez Lee");
          break;
        case 4:
          SetName("Sophia Garcia Perez");
          break;
        case 5:
          SetName("William Taylor Anderson");
          break;
        case 6:
          SetName("Olivia White Miller");
          break;
        case 7:
          SetName("James Davis Rodriguez");
          break;
        case 8:
          SetName("Ava Martinez Perez");
          break;
        case 9:
          SetName("Alexander Clark Wilson");
          break;
        case 10:
          SetName("Charlotte Adams Carter");
          break;
        default:
          SetName("Unknown");
      }
      
    } catch (error) {
      console.error('Error al recuperar las publicaciones:', error);
    }
  }

  const DelatePublication = async () => {
    try {
      await dispatch(actionDeletePublicationAsync(newId));

      const updatedPublications: Publication[] = await dispatch(actionListPublicationsAsync());
      setPublications(updatedPublications);
      setNewId('');
    } catch (error) {
      console.error('Error al eliminar la publicación:', error);
    }
  };

  const [formValues, setFormValues] = useState<Publication>({
    Id: '',
    Media: '',
    Description: '',
    LikesPublication: '',
    SharedPublication: '',
    ActionsPublication: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <div>
      <button onClick={addPublication}>ADD PUBLICATION</button>
      <button onClick={DelatePublication}>Borrar Publicación</button>
      {publications.map((publication, index) => (
        <div key={index}>
          <table>
            <tbody>
              <tr>
                <th>Image Publication </th>
                <th>Description</th>
                <th>Likes Publication</th>
                <th>Shared</th>
                <th>Actions</th>
              </tr>
              <tr>
                <td>
                  <img className='imgPublicadas' key={publication.Id} src={publication.Media} alt="Media" onClick={() => setNewId(publication.Id)} />
                </td>
                <td>
                  <p>{publication.Description}</p>
                </td>
                <td>
                  <p>{publication.LikesPublication}</p>
                </td>
                <td>
                  <p>{publication.SharedPublication}</p>
                </td>
                <td>
                  {publication.ActionsPublication}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
      <form>
        <label htmlFor="description">Description</label>
        <input
          type="text"
          placeholder="Description"
          name="Description"
          value={formValues.Description}
          onChange={handleChange}
        />

        <label htmlFor="media">Media</label>
        <input
          type="text"
          placeholder="Media Fire"
          name="Media"
          value={formValues.Media}
          onChange={handleChange}
        />

        <label htmlFor="likesPublication">Likes Publication</label>
        <input
          type="text"
          placeholder="Likes Publications"
          name="LikesPublication"
          value={formValues.LikesPublication}
          onChange={handleChange}
        />

        <label htmlFor="sharedPublication">Shared Publication</label>
        <input
          type="text"
          placeholder="Shared Publication"
          name="SharedPublication"
          value={formValues.SharedPublication}
          onChange={handleChange}
        />

        <label htmlFor="actionsPublication">Actions Publication</label>
        <input
          type="text"
          placeholder="Actions Publication"
          name="ActionsPublication"
          value={formValues.ActionsPublication}
          onChange={handleChange}
        />
      </form>
    </div>
  )
}
